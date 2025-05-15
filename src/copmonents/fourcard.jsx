import React from 'react'

function Fourcard({ el }) {
    return (
        <div>
            <div className="card">
                <div className="cardname">{el.n}</div>
                <div className="cardinfo">{el.n2}</div>
            </div>
        </div>
    )
}

export default Fourcard