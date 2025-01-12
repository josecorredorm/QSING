import React from 'react';
import './HomeContent.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
const HomeContent = () => {
  return (
    <>
    <div className="AdnContainer">
        <iframe
            src="https://www.youtube.com/embed/Adpc5OnysGA?si=Oruvpb6sTRu3hA8B" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
        
        <div className="AdnText">
            <h1>NUESTO ADN</h1>
            <p>
            En QS Ingeniería e Innovación generamos valor con soluciones de ingeniería a la medida de las necesidades de nuestros clientes a nivel nacional. Con más de 12 años de experiencia mediante nuestro sistema de gestión, nos caracterizamos por la seguridad, sostenibilidad y excelencia en nuestra labor.
            </p>
        </div>
    </div>
    <div className='GolContainer'>
        <div className='Goltext'>
            <h6>NUESTRO PROÓSITO</h6>
            <p>Transformar las necesidades y expectativas en soluciones ágiles, idóneas, innovadoras, rentables y de calidad que generan valor a nuestros clientes,  las comunidades y la organización a través de obras de ingeniería que perduran en el tiempo.</p>
            <h6>NUESTRA META</h6>
            <p>Para el 2028 estaremos consolidados en el sector de la ingeniería como una empresa que implementa tendencias innovadoras, seguras, sostenibles y que preservan el medio ambiente en el desarrollo de sus proyectos; con el objetivo de consolidar un amplio portafolio de nuevos clientes basados en el servicio y la experiencia.</p>
        </div>
        <div className='ImgContainer'>
            <img src="./slider 1.jpg" alt="img de referencia" />
        </div>
    </div>
        <Container className='ProjectContainer'>
            <Container className='ProjectTextContainer'>
            <h6>Ingeniería de calidad</h6>
            <h1>ALGUNO DE NUESTROS</h1>
            <h1>PROYECTOS</h1>
            <p>Construcción de más de 10.000 M2 de Centros de atención y ventas de Claro en todo el territorio nacional, en los que se ejecutaron las obras de adecuación civil, sistema de redes de telecomunicaciones, redes eléctricas, redes hidráulicas, redes sanitarias.</p>
            <p>Construcción de más de 3.000 M2 de oficinas de atención a clientes de Avantel en las principales ciudades de Colombia, ejecutamos las obras de adecuación civil, sistema de redes de telecomunicaciones, redes eléctricas, redes hidráulicas, redes sanitarias</p>
            <p>Construcción de más de 500 M2 de centros clínicos en los que ejecutamos obra civil, sistema de redes de telecomunicaciones, redes eléctricas, redes hidráulicas, redes sanitarias, aplicado a la legislación y reglamentación vigente.</p>
            <p>Diseño y ejecución de obra civil e implementación de redes eléctricas, de comunicación y suministro e instalación de los elementos y accesorios necesarios para el correcto funcionamiento de la Unidad de Búsqueda de Personas dadas por Desaparecidas (UBPD) en Quibdó, Medellín y San José del Guaviare.</p>
            <p>Hemos realizado más de 5.000M2 de diseños técnicos y arquitectónicos para la apertura de nuevas tiendas, sedes administrativas, centros de atención y ventas de nuestros clientes en todo el territorio nacional.</p>
            </Container>
        </Container>  
    {/* <Container className='ServicesContainer'>
        <h1>
            NUESTROS SERVICIOS
        </h1>
            <Card style={{ width: '19em', height: '13em', backgroundColor: '#81D741'}}>
                <Card.Body>
                    <Card.Title>DISEÑO</Card.Title>
                    <Card.Text style={{color: 'white', fontSize: '13px'}}>
                    Diseño arquitectónico, estructural, hidrosanitario, red contraincendios, sistemas de aire acondicionado, 
                    eléctrico y cableado estructurado de todo tipo de edificaciones.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '19em', height: '13em' }}>
                <Card.Body>
                    <Card.Title>OBRAS DE INGENIERÍA</Card.Title>
                    <Card.Text>
                    Desarrollo y ejecución de Obras de ingeniería civil y eléctrica, estructura metálica, movimiento de tierras.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '19em', height: '13em' }}>
                <Card.Body>
                    <Card.Title>ESTAURACIONES Y REMODELACIONES</Card.Title>
                    <Card.Text>
                    Restauraciones y remodelaciones de edificaciones industriales, comerciales y residenciales.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '19em', height: '13em', backgroundColor: '#1E73BE'}}>
                <Card.Body>
                    <Card.Title>MANTENIMIENTO</Card.Title>
                    <Card.Text style={{color: 'white'}}>
                    Mantenimiento preventivo y correctivo de instalaciones y edificaciones.
                    </Card.Text>
                </Card.Body>
            </Card>         
    </Container> */}
<Container className="ServicesContainer">
      <h1>NUESTROS SERVICIOS</h1>
      <Row className="gx-4 gy-4">
        <Col sm={8} md={6} lg={6}>
          <Card className="h-100" style={{ backgroundColor: '#81D741' }}>
            <Card.Body>
              <Card.Title>DISEÑO</Card.Title>
              <Card.Text style={{ color: 'white', fontSize: '13px' }}>
                Diseño arquitectónico, estructural, hidrosanitario, red contraincendios, sistemas de aire acondicionado, 
                eléctrico y cableado estructurado de todo tipo de edificaciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} md={6} lg={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>OBRAS DE INGENIERÍA</Card.Title>
              <Card.Text>
                Desarrollo y ejecución de Obras de ingeniería civil y eléctrica, estructura metálica, movimiento de tierras.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} md={6} lg={6}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>RESTAURACIONES Y REMODELACIONES</Card.Title>
              <Card.Text>
                Restauraciones y remodelaciones de edificaciones industriales, comerciales y residenciales.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8} md={6} lg={6}>
          <Card className="h-100" style={{ backgroundColor: '#1E73BE' }}>
            <Card.Body>
              <Card.Title>MANTENIMIENTO</Card.Title>
              <Card.Text style={{ color: 'white' }}>
                Mantenimiento preventivo y correctivo de instalaciones y edificaciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default HomeContent