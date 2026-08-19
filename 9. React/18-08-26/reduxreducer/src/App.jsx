import './App.css'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement , reset } from './Redux/action';

function App() {

  const num = useSelector((state) => state[0].count)

  const dispatch = useDispatch()

  console.log(num);
  

  return (
    <>
      <div>
        <div>Count : {num}</div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </>
  )
}

export default App