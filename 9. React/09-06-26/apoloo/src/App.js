
import './App.css';


import Button from './button';
import List from './list';
import Login from './login';
import Image from './OIP.jpg'

function App() {  

  const data = {
    text: "This is Paragraph Tag",
    image : Image
  }

  return (

    <>


      <h1>
        This is React App
      </h1>
     
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>

      <h1>
        The List is :- 
      </h1>
       <List/>

       <h1>Login </h1>
       <Login/>

       <h1>This is BElow Image  </h1>
       <img src={data.image} />
       <p>{data.text}</p>

       
    </>

  );
}


export default App;
