import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      deck: [],
      doesATrunfoCardExist: false,
      filteredName: '',
      filteredRarity: 'todas',
      filteredTrunfo: false,

    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();

    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deck,
    } = this.state;

    deck.push({
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    });
    this.setState({
      deck,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });

    const check = deck.some((element) => element.cardTrunfo === true);
    if (check) {
      this.setState({
        doesATrunfoCardExist: true,
      });
    }
  };

  removeCard = (index) => {
    const { deck } = this.state;
    const newDeck = [...deck];
    newDeck.splice(index, 1);
    const check = newDeck.some((element) => element.cardTrunfo === true);
    this.setState({
      deck: newDeck,
      doesATrunfoCardExist: check,
    });
  };

  filterDeck = () => {
    const { deck, filteredName, filteredRarity, filteredTrunfo } = this.state;
    let filteredDeck = deck;
    if (filteredName !== '') {
      filteredDeck = deck.filter((card) => card.cardName.includes(filteredName));
    }
    if (filteredTrunfo !== false) {
      filteredDeck = deck.filter((card) => card.cardTrunfo === true);
    }
    if (filteredRarity !== 'todas') {
      filteredDeck = deck.filter((card) => card.cardRare === filteredRarity);
    } if (filteredRarity !== 'todas' && filteredName !== '') {
      filteredDeck = deck
        .filter((card) => card.cardRare === filteredRarity && card.cardName
          .includes(filteredName));
    }
    return filteredDeck;
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      doesATrunfoCardExist,
      filteredName,
      filteredRarity,
      filteredTrunfo,
    } = this.state;
    const lim = 210;
    const attrLim = 90;
    const isSaveButtonDisabled = !cardName
     || !cardDescription
     || !cardImage
     || !cardRare
     || parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10) > lim
     || parseInt(cardAttr1, 10) > attrLim
     || parseInt(cardAttr2, 10) > attrLim
     || parseInt(cardAttr3, 10) > attrLim
     || parseInt(cardAttr2, 10) < 0
     || parseInt(cardAttr3, 10) < 0
     || parseInt(cardAttr1, 10) < 0;

    return (
      <body>
        <div>
          <img src="images/logo_tryunfo.png" alt="Tryunfo" className="logo" />
        </div>
        <div className="box-branco">
          <div className="box-nova-carta">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo=""
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              doesATrunfoCardExist={ doesATrunfoCardExist }
            />
          </div>
          <div className="box-preview">
            <h3 className="title">Pré-visualização</h3>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>

        <label htmlFor="nameFilter">
          Filtrar deck por nome:
          <input
            type="text"
            data-testid="name-filter"
            onChange={ this.handleChange }
            name="filteredName"
            value={ filteredName }
            disabled={ filteredTrunfo }
          />
        </label>
        <label htmlFor="rarityFilter">
          Filtrar deck por raridade:
          <select
            name="filteredRarity"
            data-testid="rare-filter"
            value={ filteredRarity }
            onChange={ this.handleChange }
            disabled={ filteredTrunfo }

          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            onChange={ this.handleChange }
            name="filteredTrunfo"
            value={ filteredTrunfo }
          />
        </label>
        {this.filterDeck().map((card, index) => (
          <div key={ card.cardName }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ () => this.removeCard(index) }
            >
              Excluir

            </button>
          </div>
        ))}
      </body>
    );
  }
}

export default App;
