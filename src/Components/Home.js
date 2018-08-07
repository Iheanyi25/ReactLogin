import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

 export default class Home extends Component {
  render() {
    return (
      <div >
        <Grid>
            <Jumbotron>
                <h1>Welcome, Iheanyi to the Home Page</h1>
                <p>For the sake of learning</p>
            </Jumbotron>
            <Link to="/about">
            <Button bsStyle="primary">About</Button>
            </Link>
            <Link to="/news">
            <Button bsStyle="primary">News</Button>
            </Link>
        </Grid>
      </div>
    );
  }
}

