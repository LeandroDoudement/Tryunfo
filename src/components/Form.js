import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Form.css';

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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      doesATrunfoCardExist } = this.props;

    const limiteDePontos = 210;
    const somaDePontos = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    const pontosRestantes = limiteDePontos - somaDePontos;

    return (
      <>
        <h3 className="form-title">Adicione nova carta</h3>
        <form action="" className="new-card-form">
          <label htmlFor="cardName" className="vertical-form-element">
            Nome:
            <input
              type="text"
              name="cardName"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cartDescription" className="vertical-form-element">
            Descrição:
            <textarea
              name="cardDescription"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr1" className="horizontal-form-element">
            Atributo 1:
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="attr2" className="horizontal-form-element">
            Atributo 2:
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <label htmlFor="attr3" className="horizontal-form-element">
            Atributo 3:
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
              min={ 0 }
              max={ 90 }
            />
          </label>
          <span className="points-element">
            Total de pontos:
            {somaDePontos}
          </span>
          <span className="points-element">
            Pontos restantes:
            {pontosRestantes < 0 ? 0 : pontosRestantes}
          </span>
          <label htmlFor="cartImage" className="horizontal-form-element">
            Imagem:
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cartRarity" className="vertical-form-element">
            Raridade:
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="Normal">Normal</option>
              <option value="Raro">Raro</option>
              <option value="Muito raro">Muito Raro</option>
            </select>
          </label>
          <div className="form-end">
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
              className="save-button"
            >
              Salvar

            </button>
          </div>
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
