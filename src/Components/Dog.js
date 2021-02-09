import React from 'react'

const Dog =( props )=> {

    const { name, id, image, isGoodDog } = props.dog

    return (
        <div>
            <img src={ image } />
            <h2>
                { name }
            </h2>
            <button>
                { isGoodDog ?
                    'Good Dog!'
                    :
                    'Bad Dog!'
                }
            </button>
        </div>
    )
}

export default Dog