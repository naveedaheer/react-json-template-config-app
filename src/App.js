import React from 'react';
import './App.css';
import LeftPanel from './components/leftPanel/leftPanel';
import UploadTemplate from './components/uploadTemplate/uploadTemplate';
import { Col, Row, Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
      <Row>
      <Col lg={4}>
      <LeftPanel />
      </Col>
      <Col lg={8}>
      <UploadTemplate />
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
