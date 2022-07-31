import React,  from 'react';
import PropTypes from 'prop-types';

class Card extends Component{
  render(){
const = { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, SuperTrunfo} = this.props;
  return(
    <div data-testid="name-card">
      <img data-testid="image-card">{cardName}</img>,
      <img data-testid="image-card">,
      <img src="cardImage", alt="cardName" >{cardImage, cardName}</img>,
      <p data-testid="description-card">{cardDescription}</p>,
      <p data-testid="attr1-card">{cardAttr1}</p>,
      <p data-testid="attr2-card">{cardAttr2}</p>,
      <p data-testid="attr3-card">{cardAttr3}</p>,
      <p data-testid="rare-card">{cardRare}</p>
      <p data-testid="trunfo-card">{SuperTrunfo}</p>


    </div>

  )
  };
   Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardImage:PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    SuperTrunfo: PropTypes.string.isRequired,
};

  export default card;