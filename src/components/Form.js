import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      doesATrunfoCardExist } = this.props;

    return (
      <>
        <h3 className="form-title">Adicione nova carta</h3>
        <form action="" className="formulario">
          <label htmlFor="cartName" className="cart-name">
            Nome:
            <input
              type="text"
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cartDescription" className="descricao">
            Descrição:
            <textarea
              name="cardDescription"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1">
            Atributo 1:
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="attr2">
            Atributo 2:
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="attr3">
            Atributo 3:
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min="0"
              max="90"
            />
          </label>
          <label htmlFor="cartImage">
            Imagem:
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cartRarity">
            Raridade:
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfoInput">
            Super Trybe Trunfo
            {!doesATrunfoCardExist ? <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
              : <p>Você já tem um Super Trunfo em seu baralho</p> }
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  doesATrunfoCardExist: PropTypes.bool.isRequired,
};

export default Form;
