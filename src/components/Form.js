import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="cartName">
          Nome:
          <input type="text" name="name" data-testid="name-input" />
        </label>
        <label htmlFor="cartDescription">
          Descrição:
          <textarea
            name="description"
            cols="30"
            rows="10"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Atributo 1:
          <input type="number" name="attr1" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Atributo 2:
          <input type="number" name="attr2" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Atributo 3:
          <input type="number" name="attr3" data-testid="attr3-input" />
        </label>
        <label htmlFor="cartImage">
          Imagem:
          <input type="text" name="image" data-testid="image-input" />
        </label>
        <label htmlFor="cartRarity">
          Raridade:
          <select name="rarity" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="valor3">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfoInput">
          Super Trybe Trunfo
          <input
            type="checkbox"
            name="trunfo"
            data-testid="trunfo-input"
          />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
