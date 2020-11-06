import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './ActiveMenu.css';

class ActiveMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isToggleOn: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState(state => ({
      isToggleOn: [e]
    }));
    console.log(e)
  }

  render() {
    return(
      <div>
        <h1>Tarea 01</h1>
        <ul>
          {MenuItems.map((item,)=> {
            return (
          <li key={item.id} onClick={(e) => this.handleClick(item.id, e)}>
            <a className={ item.isToggleOn ? 'small-font' : 'big-font'} href={item.url}>
              {item.title}
            </a>
          </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ActiveMenu
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