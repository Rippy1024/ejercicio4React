import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
useState;

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState ([]);

  const handleSubmit = (e)=> {
e.preventDefault();
console.log('dentro del evento submit')
//realizar algo similar al tareas.push()
//se lo puede realizar con el operador spread ...
setTareas([...tareas, tarea]);
//limpiar el formulario
setTarea('');
  }

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Ejemplo: Tarea"
            minLength={3}
            maxLength={50}
            onChange={(e)=> setTarea(e.target.value) }
            value={tarea}
          />
          <Button variant="dark" className="ms-2" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
