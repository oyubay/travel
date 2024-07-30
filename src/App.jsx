import './App.css'
import Navbar from './components/Navbar'
import Place from './components/Place'
import data from './data.js'

function App() {
    const places = data.map((place)=>{
        return(
            <Place
                key={place.id}
                place={place}
            />
        )
    })

  return (
    <>
        <Navbar/>
        <section className="App">
            {places}
        </section>
    </>
  )
}

export default App
