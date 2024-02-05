import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="Ejemplo: Tarea" minLength={3} maxLength={50}/>
          <Button variant="dark" className='ms-2' type ='submit'>Agregar</Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTarea;
