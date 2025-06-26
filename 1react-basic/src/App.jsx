import { useState ,useEffect} from 'react'
import './App.css'




function App() {
  let [color, setColor] = useState(() => {
    return localStorage.getItem("bgColor") || "olive";
  });

  useEffect(() => {
    localStorage.setItem("bgColor", color);
  }, [color]);

  return (
    <div class = "container" className='container w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div  className=' fixed flex flex-wrap justify-center bottom-10 inset-x-1.5 px-2'>
        <div  className=' flex flex-wrap justify-center gap-2 shadow-xl rounded-2xl p-2' style={{backgroundColor:'#fff'}}>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("red")} style={{backgroundColor:'red'}}>Red</button>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("green")} style={{backgroundColor:'green'}}>Green</button>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("blue")} style={{backgroundColor:'blue'}}>Bue</button>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("grey")} style={{backgroundColor:'grey'}}>Grey</button>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("violet")} style={{backgroundColor:'violet'}}>violet</button>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("brown")} style={{backgroundColor:'brown'}}>Brown</button>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("white")} style={{backgroundColor:'white'}}>White</button>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("black")} style={{backgroundColor:'black'}}>Black</button>
          <button className=' px-4 py-2 mx-1 rounded-4xl' onClick={()=>setColor("olive")} style={{backgroundColor:'olive'}}>Olive</button>

        </div>
      </div>
    </div>
  )
}

export default App
