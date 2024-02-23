import { Col, Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container className="px-5">
      <h1 className="my-5">Miroslav Pesic</h1>
      <Row>
        <Col xs={6}>
          <p style={{ fontSize: '1.25em' }}>
            I am a Full Stack Developer with a tendency of Frontend development. I can work full time, 8+ hours a day, 6
            days a week. I hope to work with you in a long time.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
