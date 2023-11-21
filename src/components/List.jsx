function List() {
  const someArr = ["patatas", "tomates", "platanos", "zanahorias", "patatas"];
  // const someArrJSX = [ <li>Patatas</li>, <li>tomates</li>, <li>platanos</li>, <li>zanahorias</li> ]

  // const someArrJSX = someArr.map((eachElement) => {
  //   return <li>{eachElement}</li>;
  // });

  const ninjaTurtles = [
    {
      name: "leonardo",
      color: "blue",
      weapon: "katana",
    },
    {
      name: "raphael",
      color: "red",
      weapon: "sai",
    },
    {
      name: "donatello",
      color: "purple",
      weapon: "bo",
    },
    {
      name: "michelangelo",
      color: "orange",
      weapon: "nunchaku",
    },
    {
      name: "splinter",
      color: "gray",
      weapon: "cane",
    },
  ];

  return (
    <div>
      
      {someArr.map((eachElement, index) => {
        return (
          <li key={index}>{eachElement}</li>
        )
      })}

      {ninjaTurtles.map((eachCharacter, index) => {

        const cardStyles = {
          backgroundColor: eachCharacter.color
        }

        return (
          <div key={index} style={ cardStyles } >
            <h3>nombre: {eachCharacter.name}</h3>
            <p>arma: {eachCharacter.weapon}</p>
            <p>image: { eachCharacter.name === "splinter" ? "🐀" : "🐢"} </p>
            {/* <p>{ eachCharacter.name === "michelangelo" ? "🌟" : undefined}</p> */}
            { eachCharacter.name === "michelangelo" ? <p>favorita! 🌟</p> : null }
            {/* { eachCharacter.name ===  "michelangelo" && <p>favorita! 🌟</p> } */}
          </div>
        )
      })}

    </div>
  );
}

export default List;


// explicacion evaluadores de corto circuito

// const MONGO_URI = process.env.MONGODB_URI || "url"
// // si lo primero no existe, usa lo segundo

// const render = eachCharacter.name ===  "michelangelo" && <p>favorita! 🌟</p>
// // si lo primero es algo truthy (true, {}. [], "skjffks"), has tambien lo segundo
// // si lo primero es algo falsy, entonces no hagas lo segundo