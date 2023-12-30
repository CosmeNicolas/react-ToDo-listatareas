import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { Container } from "react-bootstrap"

import Footer from "./components/Footer"


function App() {
 

  return (
    <>
      <Container className="main text-center text-light">
      <h1>Lista de tareas</h1>
      </Container>
      <Footer/>
    </>
  )
}

export default App
