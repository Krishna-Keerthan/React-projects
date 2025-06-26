import { useState ,useCallback , useEffect , useRef} from 'react'
import './App.css'

function App() {
  const [length , setLength]  = useState(8)
  const [number , setNumber] = useState(false)
  const [character , setCharacter ] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str+="0123456789"
    if (character) str+="!@#$%^&*()"

    for (let i = 1; i < length; i++) {
      let char = Math.floor( Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }
  ,[length , number , character , setPassword])

  const passwordRef = useRef(null)

  const onClickClipboardSelect = useCallback(()=>{
    
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)

  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length , number , character , setPassword])

  return (
    <>
      

      <div className=' bg-gray-700 w-full max-w-md mx-auto shadow-2xl rounded-lg px-4 my-8 text-amber-700'>
      <h1 className='text-white text-4xl text-center'>Password Generator</h1>
        
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-amber-50 rounded'
        placeholder='PASSWORD' 
        readOnly
        ref={passwordRef}/>
        <button className='outline-none bg-amber-900 text-amber-100 px-3 py-0.5 shrink-0 focus:bg-violet-400' onClick={onClickClipboardSelect}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2 text-amber-50'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={30}
            value={length}
            onChange={(e)=> setLength(e.target.value)}
            className='cursor-pointer' />
            <label >Length {length}</label>

            <input type="checkbox"
            defaultChecked={number}
            id='numInput'
            onChange={()=>setNumber((prev)=>!prev)} />
            <label htmlFor="numInput">Numbers</label>

            <input type="checkbox"
            defaultChecked={character}
            id='charInput'
            onChange={()=>setCharacter((prev)=>!prev)} />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>


    </div>
    </>
  )
}

export default App
