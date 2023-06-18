import React from 'react'

export default function Square(props) {
    return (
        <div  onClick={props.onClick}
        style={{
            border: "2px solid blue",
            backgroundColor:'yellow',
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}
            className="square">
            <h1 style={{color:'green'}}>{props.value}</h1>
        </div>
    )
}
