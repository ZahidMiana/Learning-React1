import './App.css'

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold bg-purple-600 text-white p-6 rounded-xl shadow-lg">
        Tailwind CSS Test
      </h1>
    </div>
  )
}

export default App

    if(numberAllowed) str+="123456789"
    if(charAllowed) str+="!@#$%^&*(){}[]~+-"

    for(let i=0; i<=length; i++)
    {
      let char = Math.floor(Math.random() * str.length +1);
      pass +=str.charAt(char);
    }
    setPassword(pass);

  }, [length,numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password])
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
    <div className="w-full mx-w-md mx-auto shadow-md rounded-lg 
    px-4 my-8  text-orange-500 bg-gray-800 ">
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg
      overflow-hidden mb-4'>
        <input 
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref = {passwordRef}
        />

        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700
         text-white px-3 py-0.5 shrink-0'
         >Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
            <input 
            type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e) => {setLength(e.target.value)}}
            />
            <label htmlFor="">Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked= {numberAllowed}
            id= "numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
            <input 
            type="checkbox" 
            defaultChecked= {charAllowed}
            id= "charInput"
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="charInput">Char</label>
        </div>
      </div>
    </div>


    </>
  )
}

export default App
