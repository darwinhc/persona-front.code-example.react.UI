import React, {Fragment} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

// Components
import PersonForm from "../organisms/PersonForm";
// Constants
import {BACKEND_ENDPOINT} from "../../constants/endpoints";
import {createPerson} from "../../store/person/actions";

const CreatePerson = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        const res = await axios.post(`${BACKEND_ENDPOINT}/api/persona/`, values);
        dispatch(createPerson(res.data))
        navigate('/')
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