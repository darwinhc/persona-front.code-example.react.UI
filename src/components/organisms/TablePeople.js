import React, {Fragment, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

// Design
import {Button, Modal, Space, Table} from "antd";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

// Constants
import { ID_TYPES } from "../../constants";
import {BACKEND_ENDPOINT} from "../../constants/endpoints";

// Actions
import {deletePerson} from "../../store/person/actions";


const TablePeople = () => {
    const people = useSelector((state) => state.person);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [personSelected, selectPerson] = useState(undefined);

    const showModal = (id) => { setIsModalVisible(true); selectPerson(id)};
    const handleDelete = async () => {
        setIsModalVisible(false);
        await axios.delete(`${BACKEND_ENDPOINT}/api/persona/${personSelected}`)
        dispatch(deletePerson(personSelected))
    };
    const handleNoDelete = () => { setIsModalVisible(false); };

    const columns = [
        { title: "Nombre", dataIndex: "nombre", key: "nombre" },
        { title: "Apellido", dataIndex: "apellido", key: "apellido" },
        {
            title: "Tipo documento",
            key: "tipo_documento",
            render: (text, record) => ID_TYPES[record.tipo_documento],
        },
        { title: "Documento", dataIndex: "documento", key: "documento" },
        { title: "Hobbie", dataIndex: "hobbie", key: "hobbie" },
        {
            title: "Acciones",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Button type="danger" title="Eliminar"
                            onClick={() => showModal(record.id)}>
                        <DeleteOutlined />
                    </Button>
                    <Button type="primary" title="Editar" onClick={() => {
                        navigate(`person/edit/${record.id}`)
                    }}>
                        <EditOutlined />
                    </Button>
                </Space>
            ),
        },
    ];

    return <Fragment>
        <Modal title="Basic Modal" visible={isModalVisible}
               onOk={handleNoDelete} onCancel={handleDelete}
               okText="No" cancelText="Si">
            <p>¿Está seguro que quiere eliminar la persona <strong>{people && people[personSelected] && people[personSelected].nombre}</strong>?</p>
        </Modal>
        <Table dataSource={people !== null ? people : [] }
               columns={columns}
               rowKey="id"/>
    </Fragment>;
};

export default TablePeople;
