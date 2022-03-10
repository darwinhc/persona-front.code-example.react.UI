import React, {Fragment} from "react"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


// Components
import PersonForm from "../organisms/PersonForm";
// Constants
import {BACKEND_ENDPOINT} from "../../constants/endpoints";
import {updatePerson} from "../../store/person/actions";
import {notification} from "antd";


const UpdatePerson = () => {
    const params = useParams();
    const people = useSelector((state) => state.person);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const openNotification = (msg, desc=null) => {
        notification.open({
            message: msg,
            description: desc,
        });
    };

    const onFinish = async (values) => {
        try {
            const res = await axios.put(`${BACKEND_ENDPOINT}/api/persona/${params.id}`, values)
            dispatch(updatePerson(res.data));
            openNotification('Actualización de usuario satisfactoria')
            navigate('/');
        }catch (e){
            openNotification('Error al actualizar usuario')
        }
    }
    if(people !== null) {
        return <Fragment>
            <h1 style={{textAlign: "center", paddingTop: 20}}>Editar
                persona</h1>
            <div style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center', height: '70vh'
            }}>
                <PersonForm
                    onFinish={onFinish}
                    initialValues={
                        people.filter(person => person.id === parseInt(params.id))[0]
                    }/>
            </div>
        </Fragment>
    }
    return <div style={{ display: 'flex', justifyContent: 'center',
        alignItems: 'center', height: '70vh'}}>
        <p>Cargando ...</p>
    </div>
}

export default UpdatePerson;