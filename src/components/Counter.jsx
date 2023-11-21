import { useState } from "react";

function Counter() {

  // let counterValue = 0;
  // necesitamos un lugar donde guardamos data
  // cada vez que esta data cambie, react la renderize nuevamente
  const [ counterState, setCounterState ] = useState(0)
  // console.log(algo)
  // console.log(counterState, setCounterState)
  // 1. El estado que acabamos de crear
  // 2. la funcion que usamos para actualizar el estado

  const handleClick = () => {
    console.log("haciendo click")
    // counterValue = counterValue + 1
    // console.log(counterValue)

    // como actualizamos el estado
    if (counterState < 20) {
      setCounterState(counterState + 1)
      // hacen dos cosas:
      // 1. Cambian el valor del estado
      // 2. Causan una renderización nueva del componente!!!
    }

    // ! NUNCA DEBEMOS MANIPULAR DIRECTAMENTE EL VALOR DEL ESTADO
  }

  console.log("renderizando componente")

  // nueva funcionalidad de registrar valores
  const [ registerValue, setRegisterValue ] = useState(0)

  const handleRegister = () => {
    setRegisterValue(counterState)
  }

  return (
    <div>
        <h2>Contador</h2>

        <h1>{counterState}</h1>

        <button onClick={ handleClick } disabled={counterState < 20 ? false : true}>Incrementar</button>

        <br />

        <button onClick={ handleRegister }>Registra numero</button>

        <p>el numero registrado es: {registerValue}</p>

    </div>
  )
}

export default Counter