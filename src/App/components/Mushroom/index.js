import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle,
} from 'reactstrap';

class Mushroom extends Component {
  render() {
    const { name, image, desc } = this.props.details;
    return (
      <div className='col-2 m-2'>
        <Card>
          <CardImg top width='100%' className='mushroom-img' src={image} alt={name} />
          <CardBody>
            <CardTitle tag='h5'>{name}</CardTitle>
            <CardText>{desc}.</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Mushroom;
