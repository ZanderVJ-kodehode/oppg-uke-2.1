import { useState } from 'react'
import './App.css'

// for og få counter fra counter filen
import Counter from './oppg/Counter'
// for og få form fra form filen
import Form from './oppg/Form'

function App() {
  

  return (
    <>
      <div>
        {/* her returner jeg counter*/}
      <Counter/>
       {/* her returner jeg form*/}
      <Form/> 
      </div>
    </>
  )
}

// her ekspoterer jeg app for og kunne legge den i main.jsx som vises
export default App
