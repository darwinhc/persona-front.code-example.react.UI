import React, {Fragment} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

// Components
import PersonForm from "../organisms/PersonForm";
// Constants
import {BACKEND_ENDPOINT} from "../../constants/endpoints";
import {createPerson} from "../../store/person/actions";
import {notification} from "antd";

const CreatePerson = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            const res = await axios.post(`${BACKEND_ENDPOINT}/api/persona/`, values);
            dispatch(createPerson(res.data))
            notification.open({
                message: 'Registro de usuario satisfactorio',
                description: `Se registró el usuario con nombre ${res.data.nombre}`
            })
            navigate('/')
        }catch (e){
            notification.open({
                message: 'Error al registrar usuario',
                description: e.message
            })
        }
    }
    return <Fragment>
        <h1 style={{textAlign:"center", paddingTop: 20}}>Registrar persona</h1>
        <div style={{display: 'flex',  justifyContent:'center',
            alignItems:'center', height: '70vh'}}>
            <PersonForm onFinish={onFinish}/>
        </div>
    </Fragment>
};

export default CreatePerson;