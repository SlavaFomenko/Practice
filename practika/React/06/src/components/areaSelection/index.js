import React, { Component } from 'react';


class AreaSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstSelect: ''
    }

    this.areasArr = ["АР Крим", "Одеська область", "Дніпропетровська область",
      "Чернігівська область", "Харківська область",
      "Житомирська область", "Полтавська область", "Херсонська область",
      "Київська область", "Запорізька область", "Луганська область",
      "Донецька область", "Вінницька область", "Миколаївська область",
      "Кіровоградська область", "Сумська область", "Львівська область",
      "Черкаська область", "Хмельницька область", "Волинська область",
      "Рівненська область", "Івано-Франківська область", "Тернопільська область",
      "Закарпатська область", "Чернівецька область"
    ]
  }

  handleChenge = (event) => {

    const value = event.target.value;

    this.setState({
      firstSelect: value
    })
  }

  render() {
    
    return (
      <section>

        <h2>Выбранная область - {this.state.firstSelect}</h2>
        <select value={this.state.firstSelect} onChange={this.handleChenge}>
          {this.areasArr.map((element, index) => {
            return (
              <option key={index} value={element}>{element}</option>
            )
          })}
        </select>
      </section>
    )
  }
}

export default AreaSelection;