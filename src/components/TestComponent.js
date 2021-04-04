/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';


export default class TestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.changeDescription = this.changeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state={

      description: 'Hello world!',
    };
  }

  changeDescription(event) {
    this.setState({
      description: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    const exercise = {
      description: this.state.description,
    }
;

    console.log(exercise);
    axios.post('http://localhost:5000/routes/add', exercise)
        .then((res) => console.log(res.data));
    window.location = '/';
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <div className="instructions">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={7}
              required
              value={this.state.description}
              onChange={this.changeDescription}
            />
          </Form.Group>
          <div className="buttona">
            <Button variant="primary" type="submit"> Submit </Button>
          </div>
        </div>
      </Form>
    );
  }
}
