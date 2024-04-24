import React, { Component } from "react";

class FromTo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      from:'',
      to:''
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


  handleFromTo = (event) => {
    const value = event.target.value;
    const id = event.target.id

    this.setState({
      [id] : value
    },() => {
      console.log(this.state.from + " " + this.state.to);
    });
  }

  render() {
    
    const valueFrom = this.state.from === '' ? 'Выберитe область' : this.state.from;
    const valueTo = this.state.to === '' ? 'Выберитe область' : this.state.to;

    // console.log(valueFrom);
    return (
      <section>
        <select id="from" value={valueFrom} onChange={this.handleFromTo}>
        {
          this.areasArr.map((element,index)=>{
            if(this.state.to === element){
              return
            }
            return(
              <option key={index} value={element}>{element}</option>
            )
          })
        }
        </select>
        <select id="to" value={valueTo} onChange={this.handleFromTo}>
        {
          this.areasArr.map((element,index)=>{
            if(this.state.from === element){
              return
            }
            return(
              <option key={index} value={element}>{element}</option>
            )
          })
        }
        </select>
      </section>
    )
  }
}

export default FromTo