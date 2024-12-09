import React from "react"

const ConditionalRender = () => {
    const x = false;

    return (
        <div>
            {/* Render condicional */}
            <h3>Será exibido?</h3>
            {x == true ? <p>Se x for true sim</p> : <p>Se x for false</p>}
        </div>
    )
}

export default ConditionalRender;