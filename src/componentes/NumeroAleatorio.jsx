import React from "react";

export default (props) => {
    const num = parseInt(Math.random() * (props.max - props.min) + props.min)
    return (
        <>
            <h2>
                {num}
            </h2>
        </>
    )
}