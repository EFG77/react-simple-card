import './App.css';
import SimpleCard from './SimpleCard';






function App() {
  let Title="Welcome to the Chech Republic"
    let Info="A beautiful country with a lot of lovely natural landscape."
    let Pic= <img src='https://media.istockphoto.com/photos/adult-male-tourist-with-a-backpack-looking-from-a-viepoint-at-rock-picture-id1324670141?s=612x612' alt={""} ></img> 
  
  let FullApp=[Title,Info,Pic]

  return (
    <div className="App">
      <SimpleCard Complete= {FullApp}/>
    </div>
  );
}

export default App 
