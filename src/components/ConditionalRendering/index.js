import React, { Component } from 'react'

const NAVITEMS_JSON = [
  {
    name: 'Inicio',
    active: false
  },
  {
    name: 'Quienes Somos',
    active: false
  },
  {
    name: 'Servicios',
    active: false
  },
  {
    name: 'Contacto',
    active: true
  },
]

class ConditionalRendering extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navItems: NAVITEMS_JSON
    }
    console.log('Constructor')
  }

  hoverCheck(state) {
    let { navItems } = this.state
    this.setState({

    })
    navItems.map(item => (
      item.active = false
    )
    )

    this.active  = !state
    console.log(state)
  }

  renderItems() {
    console.log('Items rendered')

    return this.state.navItems.map(({ name, active}) => {
      return (
        <li onMouseEnter={() => this.hoverCheck(active) }>
          {active ? <h1>{name}</h1>: <h3>No active</h3>}
        </li>
      )
    })
  }


  render() {
    console.log('Render', this.state.navItems)
    return (
      <div>
        <ul>{this.renderItems()}</ul>
      </div>
    )
  }
}

export default ConditionalRendering

/*
1. Crear la funcionalidad del menu activo ( como slack ) SOLO PUEDE ESTAR UN ELEMENTO DEL "MENU"
ACTIVO A LA VEZ
<ul>
  <li>Channel 1</li>
  <li>Channel 2</li>
  <li>Channel 3</li>
</ul>
2. Dado un JSON, renderizar todos los elementos en la UI (como el componente Koders) volviendo
dinamico el menu
[
  {
    name: "Channel 1"
  },
  {
    name: "Channel 2"
  }
]
Happy hacking!
*/