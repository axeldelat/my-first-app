import React from 'react' //Importacion de React

//CSS
import "./Greet.css"

//Declaración del componente
// class Greet extends React.Component {
//     render() {
//         return (
//             <h1>
//                 {`Hola ${this.props.name}`}
//             </h1>
//         )
//     }
// }

function Greet(props) {
    return (
        <h1>
            {`Hola ${props.name}`}
        </h1>
    )
}

export default Greet // Exportar el component