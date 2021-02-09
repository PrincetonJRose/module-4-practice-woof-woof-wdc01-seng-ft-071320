import React from 'react'

const DogContainer =( props )=> {

    const dogs = props.dogs.map( dog =>
        <span onClick = { ()=> props.setDog( dog ) } >
            { dog.name }
        </span>
    )

    return (
        <div id="dog-bar">
            { dogs }
        </div>
    )
}

export default DogContainer