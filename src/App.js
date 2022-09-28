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

  getInputValue = (event) => {
    const inputValue = event.target.value;
    this.setState({
      filteredName: inputValue,
    });
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
      deck,
      filteredName,
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

    const filteredDeck = deck.filter((card) => card.cardName.toLowerCase()
      .includes(filteredName.toLowerCase()));

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
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
        <label htmlFor="nameFilter">
          <input type="text" data-testid="name-filter" onChange={ this.getInputValue } />
        </label>
        {filteredDeck.map((card, index) => (
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
      </>
    );
  }
}

export default App;
