
import { useState } from "react"
import allWizard from "../data/wizards.json"
console.log(allWizard)

function WizardList() {

  const [ wizardstoShow, setWizardsToShow ] = useState( [] )

  const handleAdd = () => {
    console.log("probando añadir wizard/witch")

    // al clickar, voy a buscar el primer elemento de json
    // console.log(allWizard[0])
    // lo elimino del json
    const wizardToAdd = allWizard.shift() // pop
    console.log(wizardToAdd)

    // lo añado al estado wizardstoShow
    // setWizardsToShow lo usamos para actualizar el estado
    // clonamos el estado para no mutarlo con un push
    const clone = JSON.parse(JSON.stringify(wizardstoShow))
    clone.unshift(wizardToAdd) // o push
    setWizardsToShow(clone)

    // ejemplo avanzado de añadir sin clonar en otra linea
    // setWizardsToShow( [ ...wizardstoShow, wizardToAdd ] )

  }

  // metodos que mutan el original => shift, unshift, push, pop, splice, sort, reverse

  const handleDelete = (indexToDelete) => {
    console.log("intentando borrar", indexToDelete)

    // como sé cual elemento estoy tratando de borrar

    // como lo elimino del estado
    const clone = JSON.parse(JSON.stringify(wizardstoShow))
    clone.splice(indexToDelete, 1)
    setWizardsToShow(clone)

    // opcionalmente podriamos despues de de borrar del estado, añadir al allWizards

  }

  return (
    <div>

        <button onClick={handleAdd}>Añadir nuevos hechiceros o brujas</button>

        {wizardstoShow.map((eachWizard, index) => {
            return (
              <div key={eachWizard.id}>
                <hr />
                <h3>{eachWizard.name}</h3>
                <p>{eachWizard.description}</p>
                {/* <button onClick={ handleDelete }>Borrar</button> */}
                {/* //* Si le quiero pasar argumentos a handleDelete... */}
                <button onClick={ () => handleDelete(index) }>Borrar</button>
              </div>
            )
        })}

    </div>
  )
}

export default WizardList