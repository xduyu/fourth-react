import React from 'react'
import './css/card.css'

function Card(props) {
    return (
        <div className="">

            {/* {
            products.map((item, index) => {
                return (
                    <div className="card" key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                    </div>
                )
            }
        )} */}

            <div className="User">
                <p>{props.username}</p>
                {props.avatar
                    ? <img src={props.avatar} alt="avatar" />
                    : <p>Аватара нет</p>}
            </div>


        </div>
    )
}

export default Card