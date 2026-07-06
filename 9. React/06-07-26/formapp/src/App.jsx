import { useState } from "react";

import './App.css'
import Forms from './Component/forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Forms />
    </>
  )
}

export default App
