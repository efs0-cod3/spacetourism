
import './App.css'
import Home from './components/Home'
import data from './data'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Tech from './components/Tech'

function App() {
// console.log(data);

  return (
    <div className="App">
      <Home />
      {/* <Destination data={data.destinations}/> */}
      {/* <Crew crew={data.crew}/> */}
      {/* <Tech techno={data.technology}/> */}
    </div>
  )
}

export default App
