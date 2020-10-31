import React, { Component } from 'react'

const KODERS_JSON = [
  {
    name: 'Axel',
    age: 31,
    hobbies: ['Videogames', 'Drink Every day', 'Pets']
  },
  {
    name: 'Ivan',
    age: 29,
    hobbies: ['Basketball', 'Chess']
  },
  {
    name: 'Luis',
    age: 34,
    hobbies: ['Money money', 'Pets', 'Social Media']
  },
  {
    name: 'Mauro',
    age: 21,
    hobbies: ['Money money', 'Pets', 'Social Media', 'Guitar']
  }
]


class Koders extends Component {
  constructor(props) {
    super(props)

    this.state = {
      koders: []
    }
    console.log('Constructor')
  }

  componentDidMount() {
    //Hicimos req
    //<- res
    console.log('Componentdidmount')
    setTimeout( () => {
      console.log('set')
      this.setState({
        koders: KODERS_JSON,
      })
    }, 100 )
  }

  renderKoders() {
    console.log('koders rendered')

    return this.state.koders.map(({ name, age, hobbies}) => {
      return (
        <li>
          {name}, {age} años
          <ul>
            {hobbies.map((hobbie) => (
              <li>{hobbie}</li>
            ))}
          </ul>
        </li>
      )
    })
  }

  render() {
    console.log('Render', this.state.koders)
    return (
      <div>
        <ul>{this.renderKoders()}</ul>
      </div>
    )
  }
}

export default Koders

/*

Dar estilo a tabla

Filtrar a los koders con 3 o mas hobbies

*/