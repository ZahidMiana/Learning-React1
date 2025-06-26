import { useState } from "react"
import './App.css'

function App() {
  const [color , setColor] = useState("olive");


  return (
    <div className="w-full h-screen flex items-center justify-center"
      style = {{backgroundColor: color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12">
        <div className= "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "red"}}>Red
          </button>

           <button
          onClick = {() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "green"}}>Green
          </button>

           <button
           onClick = {() => setColor("orange")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "orange"}}>Orange
          </button>

           <button
           onClick = {() => setColor("pink")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "pink"}}>Pink
          </button>

           <button
           onClick = {() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "yellow"}}>yellow
          </button>

            <button
            onClick = {() => setColor("grey")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "grey"}}>grey
          </button>

            <button
            onClick = {() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "violet"}}>violet
          </button>

            <button
            onClick = {()=> setColor("tomato")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "tomato"}}>tomato
          </button>

           <button
            onClick = {()=> setColor("blue")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "blue"}}>blue
          </button>

           <button
            onClick = {()=> setColor("purple")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "purple"}}>purple
          </button>

           <button
            onClick = {()=> setColor("white")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "white"}}>white
          </button>

          <button
            onClick = {()=> setColor("black")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "white"}}>black
          </button>

          <button
            onClick = {()=> setColor("teal")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "teal"}}>Teal
          </button>

          <button
            onClick = {()=> setColor("brown")}
          className="outline-none px-4 py-1 rounded-full shadow-lg"
          style = {{backgroundColor: "brown"}}>brown
          </button>
        </div>
      </div>
    </div>

  )
}

export default App
