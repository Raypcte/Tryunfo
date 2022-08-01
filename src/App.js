import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  verificaCampos = () => {
    //     Os campos Nome, Descrição, Imagem e Raridade devem conter alguma informação (ou seja, os inputs não podem estar vazios).
    // A soma dos valores dos 3 atributos (attr1-input, attr2-input e attr3-input) não pode ultrapassar o valor 210.
    // Cada um dos três atributos pode ter no máximo 90 pontos cada.
    // Os atributos não podem receber valores negativos.
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const valorMaximo = 210;
    const und = 90;

    const tamanho = cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0;

    const soma = Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3);
    const maximo = soma <= valorMaximo;

    const maxUnd = Number(cardAttr1) <= und
      && Number(cardAttr2) <= und
      && Number(cardAttr3) <= und;

    const valorPositivo = Number(cardAttr1) >= 0
      && Number(cardAttr2) >= 0
      && Number(cardAttr3) >= 0;

    const verificacao = tamanho && maximo
    && maxUnd && valorPositivo;

    this.setState({
      isSaveButtonDisabled: !verificacao,
    });
  };

  onInputChange = (event) => {
    let valor = event.target.value;
    if (event.target.type === 'checkbox') {
      valor = event.target.checked;
    }
    this.setState({
      [event.target.name]: valor,
    }, this.verificaCampos);
  };

  onSaveButtonClick = () => {};

  render() {
    return (
      <div>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
