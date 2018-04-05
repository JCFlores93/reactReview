import  React  from 'react'
import  ReactDOM  from 'react-dom'

//Traemos la referencia del objeto
const app = document.getElementById("app")
const holaMundo = <h1>Hola mundo, accediendo al DOM</h1>
ReactDOM.render(holaMundo, app)

