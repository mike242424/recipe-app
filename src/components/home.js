import { Container, Row } from 'react-bootstrap';


const HomePage = () => {
  return (

    <Container className="text-center">
      <Row>
      <div className="jumbotron mt-2">
        <h1 className="display-3"><strong> 👋 Welcome to Highway to FlavorTown!</strong></h1>
        <h4 className="p-2">Here, you are able search for recipes by ingredient or receive  random recipe ideas</h4>
      </div>
      </Row>
      <Row className="home-page">
      </Row>
    </Container>
  )
};

export default HomePage;