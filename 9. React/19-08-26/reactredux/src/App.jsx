
import './App.css'
import { increment, decrement, incrementBy10, decrementBy10, reset } from './Component/Counter'
import { useSelector, useDispatch} from 'react-redux'

function App() {

  const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.count )
  return (

    <>

     <div>Count : {count}</div>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy10())}>IncrementBy10</button>
      <button onClick={() => dispatch(decrementBy10())}>DecrementBy10</button>
      <button onClick={() => dispatch(reset())}>Reset</button>



    </>
  )
}

export default App
