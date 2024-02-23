import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
    <Container className="px-5">
      <h1 className="my-5">About me</h1>
      <Row>
        <Col xs={6}>
          <p style={{ fontSize: '1.25em' }}>
            Dynamic Full-Stack Developer skilled in Node.js, React, and Redux. Proven expertise in optimizing
            performance, implementing security measures, and driving successful client collaborations. Proficient in
            responsive design and streamlined processes. Adept at efficient code testing and DevOps practices. Strong
            problem-solving skills and effective communicator, committed to delivering high-quality, scalable solutions.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
