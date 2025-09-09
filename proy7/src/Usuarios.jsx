import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, } from 'react-bootstrap';

const data = [
    {id: 1, nombre: "Jorge Carranza", empresa: "Tec"},
    {id: 2, nombre: "Ramon Velez", empresa: "Banorte"},
    {id: 3, nombre: "Hugo Sanchez", empresa: "Real Madrid"},
    {id: 4, nombre: "Rafael Marquez", empresa: "Barcelona"},
    {id: 5, nombre: "Sergio Perez", empresa: "Cadillac Racing"},
    {id: 6, nombre: "Max Verstapen", empresa: "Orange Red Bull Racing"},
    {id: 7, nombre: "Carlos Sainz", empresa: "Williams Racing"},
];

class App extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: '',
            nombre: '',
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
          <Button variant="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Accion</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
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

        <Modal show={this.state.modalActualizar} onHide={this.cerrarModalActualizar}>
        <ModalHeader>
            <div>
            <h3>Editar</h3>
            </div>
        </ModalHeader>
        <ModalBody>
            <FormGroup>
            <label>Id</label>
            <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
            />
            </FormGroup>
            <FormGroup>
            <label>Nombre</label>
            <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.nombre}
            />
            </FormGroup>
            <FormGroup>
            <label>Empresa</label>
            <input
                className="form-control"
                name="empresa"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.empresa}
            />
            </FormGroup>
        </ModalBody>
        <ModalFooter>
            <Button variant="primary" onClick={() => this.editar(this.state.form)}>
            Editar
            </Button>
            <Button variant="danger" onClick={() => this.cerrarModalActualizar()}>
            Cancelar
            </Button>
        </ModalFooter>
        </Modal>


        <Modal show={this.state.modalInsertar} onHide={this.cerrarModalInsertar}>
        <ModalHeader>
            <div>
            <h3>Insertar</h3>
            </div>
        </ModalHeader>
        <ModalBody>
            <FormGroup>
            <label>Id:</label>
            <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length + 1}
            />
            </FormGroup>
            <FormGroup>
            <label>Nombre:</label>
            <input
                className="form-control"
                name="nombre"
                type="text"
                onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup>
            <label>Empresa:</label>
            <input
                className="form-control"
                name="empresa"
                type="text"
                onChange={this.handleChange}
            />
            </FormGroup>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
            Insertar
            </Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}
>Cancelar</Button>
        </ModalFooter>
        </Modal>
        </>
        );
    }
}

export { App as Usuarios }
