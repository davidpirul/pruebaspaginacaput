import { Container } from 'react-bootstrap';
import '../css/propuesta1.css'

export default function Propuesta1() {

  let caputlogo = 'https://i.ibb.co/pKCdr93/caput-logo.png'

  return (

    <div>
      <div id='navibar'>

        <img className='caput-logo' src={caputlogo} alt="caput-logo" />

        <div className='header'>
          <div className='navigation'>
            <div className='links'>
              <h4>PROYECTOS</h4>
              <h4>COLABORACIONES</h4>
              <h4>QUIENES SOMOS</h4>
              <h4>CONTACTO</h4>
            </div>
          </div>
        </div>
      </div >
      <div className='contenido'>
        <div className='low-opacity-bg-image'>
          <Container>
            <div id='contenidoppal'>
              <img id='imagen' src="https://i.ibb.co/0QSnXzZ/Recurso-19.png" alt="Recurso-19" />
              <img src="https://i.ibb.co/5jt3dbj/Recurso-18.png" alt="Recurso-18" />
              <img src="https://i.ibb.co/TKqcPD7/Recurso-17.png" alt="Recurso-17" />
              <img src="https://i.ibb.co/X2pr44t/Recurso-16.png" alt="Recurso-16" />
              <img src="https://i.ibb.co/5jHNyr7/Recurso-15.png" alt="Recurso-15" />
              <img src="https://i.ibb.co/V9RXc9J/Recurso-14.png" alt="Recurso-14" />
            </div>
          </Container>
        </div>
      </div>
    </div >
  )
};