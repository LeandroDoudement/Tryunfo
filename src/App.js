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
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  isSaveButtonDisabled = () => {
    const lim = 210;
    const attrLim = 90;
    const attrNegativeLim = 0;
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    return !cardName
    || !cardDescription
    || !cardImage
    || !cardRare
    || parseInt(cardAttr1, 10) + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10) > lim
    || parseInt(cardAttr1, 10) > attrLim
    || parseInt(cardAttr2, 10) > attrLim
    || parseInt(cardAttr3, 10) > attrLim
    || parseInt(cardAttr2, 10) < attrNegativeLim
    || parseInt(cardAttr3, 10) < attrNegativeLim
    || parseInt(cardAttr1, 10) < attrNegativeLim;
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
    } = this.state;
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
          isSaveButtonDisabled={ this.isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick=""

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
      </>
    );
  }
}

export default App;
