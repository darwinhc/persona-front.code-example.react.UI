import React, {Fragment, useEffect} from "react"
import {Link, useLocation, useNavigate} from "react-router-dom";

import {PageHeader} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {BACKEND_ENDPOINT} from "../../constants/endpoints";
import {loadPeople} from "../../store/person/actions";

const GeneralLayout = ({children}) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const people = useSelector((state) => state.person);
    const dispatch = useDispatch();

    const fetchPeople = async () => {
        const res = await axios.get(`${BACKEND_ENDPOINT}/api/persona`);
        dispatch(loadPeople(res.data));
    }

    useEffect( () => { if (people === null) fetchPeople() }, []);

    return <Fragment>
        <PageHeader
            className="site-page-header"
            onBack={pathname !== '/' ? () => navigate('/'): null}
            title="Enersinc"
            subTitle="Prueba tecnica full stack"
            extra={[
                pathname === '/' &&
                <Link to="/person/create" key="cre">Registrar persona</Link>
            ]}
        />
        {children}
    </Fragment>
}

export default GeneralLayout;