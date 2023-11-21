
function Events() {

  const handleClick = () => {
    console.log("clickando")
  }

  const handleMouseEnter = (event) => {
    console.log("pasando el cursor", event.target)
  }

  const handleChange = (event) => {
    console.log("escribiendo sobre el campo", event.target.value)
  }

  return (
    <div>
      
      <button onClick={ handleClick }>Click</button>
      <button onClick={ () => console.log("clickando") }>Click</button>

      <button onDoubleClick={ handleClick }>otro click</button>

      <div onMouseEnter={ handleMouseEnter }>
        <h2>Patata</h2>
      </div>

      <input type="text" onChange={ handleChange }/>

    </div>
  )
}

export default Events
