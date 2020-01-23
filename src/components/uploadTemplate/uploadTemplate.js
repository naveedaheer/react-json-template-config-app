import React, { Component } from 'react';
import { Card, Table, Button, Col, Row } from "react-bootstrap";
import './style.css';

class UploadJSONComponent extends Component {  
    render() {
    return <div>
      <h1>I'm the Upload component.</h1>;
      <h2>Config Values</h2>
      <div className="p-1">

      <Card className="card-container">
      <Card className="card-container m-3">
  <Card.Body>
  <Table responsive>
  <thead>
    <tr>
      <th>Key</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>
    <tr>
    
      <td>Table cell</td>
      <td>Table cell</td>
    </tr>

  </tbody>
</Table></Card.Body>
</Card>
</Card>
      </div>
    </div> 
  }
}
export default UploadJSONComponent;