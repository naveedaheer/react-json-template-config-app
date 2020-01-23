import React, { Component } from 'react';
import { Card, Table, Form, Button, DropdownButton, Dropdown, Col, Row } from "react-bootstrap";
import './style.css';

class UploadJSONComponent extends Component {  
    render() {
    return <div  className="m-4">
      <h1>I'm the Upload component.</h1>;
      <h2>Config Values</h2>
      <div>

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
     
      <td>Key1</td>
      <td><Form>
    <div>
      <Form.Check 
        type="radio"
        id={`default`}
        label={`True`}
      />
            <Form.Check 
        type="radio"
        id="default"
        label="False"
      />
    </div>
</Form></td>
    </tr>
    <tr>
    
      <td>t</td>
      <td><DropdownButton
        title="Select Values"
        variant="secondary"
        id="dropdown-id"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton></td>
    </tr>

  </tbody>
</Table></Card.Body>
</Card>
</Card>
      </div>
      <div  className="mt-4">
        <h2>Action</h2>
      <Card className="card-container">
        <Card.Title></Card.Title>
        <Card.Body>
        <p>
          Please submit to save template.
          </p>
          <div>
          <Button variant="primary">icon n Submit</Button>
          <Button variant="success">Icon</Button>

            </div>  
        </Card.Body>
      </Card>
      </div>
    </div> 
  }
}
export default UploadJSONComponent;