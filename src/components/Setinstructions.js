/* eslint-disable max-len */

/* eslint-disable require-jsdoc */


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
// import Footer from './footer';

export default class Setinstructions extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state={
      descriptiontest: [],
    };
  }


  componentDidMount() {
    axios.get('http://localhost:5000/routes/')
        .then((response) => {
          this.setState({descriptiontest: response.data.map(function(val, index) {
            return {id: val._id, description: val.post};
          })});
        })
        .catch((error) => {
          console.log(error);
        });
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(event.target.id);
    this.setState({
      descriptiontest: this.state.descriptiontest.filter(function(e) {
        return e.id != event.target.id;
      }),
    })
    ;
    const id={
      id: event.target.id,
    };
    axios.post('http://localhost:5000/routes/delete', id)
        .then((res) => console.log(res.data));
  }

  handleClick(event) {
  }


  render() {
    return (
      this.state.descriptiontest.map((value) => {
        return (
          <Form key={value.id} id={value.id} onSubmit={this.onSubmit}>
            <div className="instructions">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Instructions Title</Form.Label>
                <Form.Control as="textarea" rows={7}
                  ReadonlySet
                  value={value.description}
                />
              </Form.Group>
              <div className="buttona">
                <Button variant="danger" type="submit" > Delete </Button>
              </div>
            </div>
          </Form>);
      }));
  }
}

