import { Button } from 'bootstrap';
import './App.css';

function App() {
        function fun(){
          alert("You clicked???")
        }
      
      return(
        <div className='App'>
          <h1>Hello there</h1>
          <Button onClick={fun}>Dont click</Button>
        </div>
      );
}

export default App;
