import { Container } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./components/Footer";

function App() {
  return (
  <>
  <Container className="my-4">
  <h1 className="text-center">Lista de Tareas</h1>
  </Container>
  <Footer></Footer>
  </>
  );
  
}

export default App;
