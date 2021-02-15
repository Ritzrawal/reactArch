import React from 'react';
import PropType from 'prop-types'
import './button.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CardComponent = ({name,image}) => {
  return (
   
      <Card className="CardStyling">
        <CardImg className="CardImageStyling" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">4/5</CardSubtitle>
          <CardText>From US$132</CardText>
          
        </CardBody>
      </Card>
   
  );
};

export default CardComponent;
CardComponent.defaultProps={
    name:'Card Component',
    image:'https://ak-d.tripcdn.com/images/22010s000000i4uumB44D_R_600_400_R5_D.jpg'
}
CardComponent.PropType={
name:PropType.string
}