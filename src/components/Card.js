/* eslint-disable react/jsx-max-depth */
import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Card.css';
import CardAttributes from './CardAttributes';
import TryunfoLogo from '../images/TryunfoLogo.png';

const PLACEHOLDER = 'https://images-ext-1.discordapp.net/external/YqeBLAcZ5M_7frARPHOlGvUTYHxmAcmF2V0-0RWTQSk/https/upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.props;
    const attributes = [cardAttr1, cardAttr2, cardAttr3];
    return (
      <div className="outer-card">
        <div className="card">
          <div className="inner-card">
            <div className="card-header">
              <span
                className="card-header-rarity"
                data-testid="rare-card"
              >
                {cardRare}

              </span>
              <span className="card-header-name" data-testid="name-card">{cardName}</span>
            </div>
            <div className="card-content">
              <img
                src={ cardImage || PLACEHOLDER }
                alt={ cardName }
                data-testid="image-card"
                width="200px"
                height="200px"
                className="card-image"
              />
              <span
                className="card-description"
                data-testid="description-card"
              >
                {cardDescription}

              </span>
              <div className="card-attributes">
                {attributes.map((count, i) => (
                  <CardAttributes
                    key={ i }
                    i={ i + 1 }
                    count={ count }
                    data-testid={ `attr${i + 1}-card` }
                  />
                ))}
                {cardTrunfo && <img
                  data-testid="trunfo-card"
                  src={ TryunfoLogo }
                  alt="Super Tryunfo"
                  className="super-tryunfo-img"
                />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
