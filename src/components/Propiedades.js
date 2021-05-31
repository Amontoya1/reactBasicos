import React from 'react';

export default function Propiedades(props){
return(
    <div>
    <h2>{props.porDefecto}</h2>
    <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "Verdadeiro": "False"}</li>
        <li>{props.arreglo.join(", ")}</li>
        <li>{props.objeto.nome + " - " + props.objeto.email}</li>
        <li>{props.arreglo.map(props.funcion).join(", ")}</li>
        <li>{props.elementoReact}</li>
        <li>{props.ComponenteReact}</li>
    </ul>
    </div>
)
}

Propiedades.defaultProps = {
    porDefecto:"Las Props siendo interpoladas en una funtion"
}