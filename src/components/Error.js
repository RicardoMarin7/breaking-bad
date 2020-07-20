import React from 'react'


const Error = ({error}) =>(
    <div className="container">
        <div className="Quote__container">
            <h3>Ocurrio un error: {error}</h3>
        </div>
    </div>
)

export default Error