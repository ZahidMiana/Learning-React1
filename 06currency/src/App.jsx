
import {useSate} from 'react'
import { InputBox} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() 
{
  const [amount, setAmount] = useSate(0)
  const [from , setFrom] = useSate("usd")
  const [to, setTo] = useSate("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyinfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  

  return (
    <div
      className='w-full h-screen flex flex-wrap
      justify-center items-center bg-cover bg-no-repeat'
      style = {{
        backgroundImage: `url('https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D')`
      }}
    >

      <div className='w-full'>
          <div className='w-full max-w-md mx-auto border border-gray-60
          rounded-lg p-5 backdrop-blur-sm bg-white/30'>

            <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >

                <div className='w-full mb-l'>
                    <InputBox
                    label ="Form"
                    amount ={amount}
                  />
                </div>

                


              </form>

          </div>
      </div>
    </div>
  )
}

export default App
