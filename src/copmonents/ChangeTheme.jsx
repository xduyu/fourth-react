import React, { useState } from 'react'

function ChangeTheme() {
  const [isDark, setIsDark] = useState(false)
  function ChangeThemeFunction(){
    setIsDark(!isDark)
  }
  const themeStyle = {
    background: isDark ? 'black' : 'white',
    color: isDark ? 'white' : 'black',
    height: '100vh'
  }
    return (
    <div style={themeStyle}>
        <h2>Your theme now: {isDark ? 'dark' : 'ligth'}</h2>
        <button onClick={ChangeThemeFunction}>Change theme on {isDark ? 'ligth' : 'dark'}</button>
    </div>
  )
}

export default ChangeTheme