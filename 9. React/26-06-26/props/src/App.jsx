
import './App.css'
import Com_A from './Component/Com_A'
import { createContext } from 'react'

export const Name_Context = createContext()
export const Age_Context = createContext()

function App() {

  let name = "Tushar"
  let age = 28

  return (
    <>

      <Name_Context.Provider value={name}>
        <Age_Context.Provider value={age}>

          <Com_A />

        </Age_Context.Provider>

      </Name_Context.Provider>



    </>
  )
}

export default App
