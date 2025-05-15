import React from 'react'

function Message({ type, message }) {
    const colors = {
        error: "red",
        warn: "orange",
        info: "green",
    }
    return (
        <div><p style={{ color: colors[type] }}>{type} - {message}</p></div>
    )
}

export default Message