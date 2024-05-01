import { Form, Button, Row } from "react-bootstrap";

const CheckOutForm = ({ dataForm, handleChangeInput, handleSubmit }) => {
    return (     
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="name">Nombre: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese su Nombre" id="name" name="name" value={dataForm.name} onChange={handleChangeInput}/>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="phone">Teléfono: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese su Teléfono" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput}/>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="email">Email: </Form.Label>
                <Form.Control type="email" placeholder="Ingrese su Email" id="email" name="email" value={dataForm.email} onChange={handleChangeInput}/>
            </Form.Group>
            <Button variant="primary" type="submit">Enviar Orden</Button>
        </Form>
    );
};

export default CheckOutForm;