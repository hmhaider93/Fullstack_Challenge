/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint linebreak-style: ["error", "windows"]*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';


export default class Setinstructions extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state={
      input: 'Test',
      id: [],
      description: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/routes/')
        .then((response) => {
          this.setState({description: response.data.map((i) => i.post)});
          this.setState({id: response.data.map((i) => i._id)});
        })
        .catch((error) => {
          console.log(error);
        });
  }

  onSubmit(event) {
    console.log(event.target.value);
    event.preventDefault();
    console.log(this);
    this.setState({
      input: event.target.value,
    });
    console.log(event.target.value);

    // const instructionsid ={
    // id: this.state.input,
    // };
    // axios.post('http://localhost:5000/routes/delete', instructionsid)
    //  .then((res) => console.log(res.data));

    // this.componentDidMount();
    // }
  }

  handleClick(event) {
  }


  createTable() {
    const table=[];
    // const array=this.state.description;
    const arraylength=this.state.description.length;


    for (let index = 0; index < arraylength; index++) {
      table.push(
          <Form onSubmit={this.onSubmit}>
            <div className="instructions">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={7}
                  ReadonlySet
                  value={this.state.description}
                  onChange={this.changeDescription}
                />
              </Form.Group>
              <div className="buttona">
                <Button variant="primary" type="submit" > Submit </Button>
              </div>
            </div>
          </Form>,
      );
    }
    return table;
  }

  render() {
    return (

      <div>
        {this.createTable()}
      </div>
    );
  }
}

