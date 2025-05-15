import React, { useState } from 'react'

function Text() {
    const [text, setText] = useState('No data')
  return (
    <div><input type="text" placeholder='Enter the text!' onInput={(event) => {
        setText(event.target.value)
    }} />
    <p>
        you entered: {text}
    </p>
    </div>
  )
}

export default Text