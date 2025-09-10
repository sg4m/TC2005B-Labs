import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, } from 'react-bootstrap';

const data = [
    {id: 1, nombre: 'Santiago Gambrino', puesto: 'Desarrollador', empresa: 'Banorte'},
    {id: 2, nombre: 'David Alejandro', puesto: 'Finanzas', empresa: 'Banorte'},
    {id: 3, nombre: 'Jorge Carranza', puesto: 'Director', empresa: 'Banorte'},
    {id: 4, nombre: 'Jose Luis', puesto: 'Recursos Humanos', empresa: 'Banorte'},
];

class Empleados extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: '',
            nombre: '',
            puesto: '',
            empresa: '',
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato, modalActualizar: true,});
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({ modalInsertar: true}); 
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false});
    };
    
    editar = (data) => {
        let contador = 0;
        let arreglo = this.state.data;
        arreglo.map((registro) => {
            if (data.id === registro.id) {
                arreglo[contador].nombre = data.nombre;
                arreglo[contador].empresa = data.empresa;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };
   
    eliminar = (data) => {
        let opcion = window.confirm("Estás seguro que deseas eliminar el elemento "+data.id);
        if (opcion === true) {
            let contador = 0;
            let arreglo = this.state.data;
            arreglo.map((registro) => {
                if (data.id === registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false});
        }
    };

    insertar = () => {
        let valorNuevo = {...this.state.form};
        valorNuevo.id = this.state.data.length+1;
        let lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: { ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        return (
            <>
                <Container>
                    <br />
                    <Button variant="success" onClick={() => this.mostrarModalInsertar()}>Agregar Empleado</Button>
                    <br />
                    <br />
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Puesto</th>
                                <th>Empresa</th>
                            </tr>
                        </thead>
                    
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.puesto}</td>
                                    <td>{dato.empresa}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => this.mostrarModalActualizar(dato)}>Editar</Button>{" "}
                                        <Button variant="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                
                <Modal show={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Empleado</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>ID:</label>
                            <input className="form-control" readOnly type="text" value={this.state.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange} value={this.state.form.nombre} />
                        </FormGroup>
                        <FormGroup>
                            <label>Puesto:</label>
                            <input className="form-control" name="puesto" type="text" onChange={this.handleChange} value={this.state.form.puesto} />
                        </FormGroup>
                        <FormGroup>
                            <label>Empresa:</label>
                            <input className="form-control" name="empresa" type="text" onChange={this.handleChange} value={this.state.form.empresa} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="primary" onClick={() => this.editar(this.state.form)}>Editar</Button>
                        <Button variant="danger" onClick={() => this.cerrarModalActualizar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
                <Modal show={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Agregar Empleado</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Nombre:</label>
                            <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Puesto:</label>
                            <input className="form-control" name="puesto" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Empresa:</label>
                            <input className="form-control" name="empresa" type="text" onChange={this.handleChange} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="primary" onClick={() => this.insertar()}>Insertar</Button>
                        <Button variant="danger" onClick={() => this.cerrarModalInsertar()}>Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </>
        )
    }
}

export default Empleados;