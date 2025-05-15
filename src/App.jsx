import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import HeaderMain from './copmonents/header-main-page'
// import Main from './copmonents/main-page'
// import FooterMain from './copmonents/footer-main-page'
// import InfoFunctionMain from './copmonents/infoFunction-main'
// import InfoClass from './copmonents/infoClass'
// import Hello from './copmonents/Hello'
// import Message from './copmonents/Message'
import Card from './copmonents/card'
import Fourcard from './copmonents/fourcard'
import StudyInYtYt from './copmonents/StudyInYtYt'
import Counter from './copmonents/Counter'
import Text from './copmonents/Text'
import ChangeTheme from './copmonents/ChangeTheme'

import './App.css'

function App() {
  
  function handleClick() {
    alert('THX FOR CLICKING')
  }
  function handleClick2(value) {
    alert(value)
  }
  function DoubleClick(el) {
    console.log(el)
  }


  return (
    <div>
      <div className="container">
        <button onClick={handleClick}>Click me!</button>
        {/* С параметрами */}
        <button onClick={() => handleClick2("Привет!")} >Button 2</button>
        {/* Input */}
        <input type="text" onInput={(event) => {
          console.log(event.target.value)
        }} />
        {/* DoubleClick */}
        <button onDoubleClick={() => DoubleClick('Hello!')}>Click me! 2</button>
        <StudyInYtYt></StudyInYtYt>
        <Counter></Counter>
        <Text></Text>
        <ChangeTheme></ChangeTheme>
        {/* {
          competionCards.map((el, index) => {
            return <Fourcard key="index" el={el}></Fourcard>
          })
        } */}
      </div>
    </div>
  )
}

export default App
