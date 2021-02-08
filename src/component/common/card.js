import React from 'react';
import PropType from 'prop-types'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardComponent = ({name,image}) => {
  return (
    <div>
      <Card>
        <CardImg style={{width:'100%'}} src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
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