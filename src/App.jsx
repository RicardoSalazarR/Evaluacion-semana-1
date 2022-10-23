import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Change from './components/Change'
import quotes from './quotes.json'
import 'boxicons'

function App() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const [num, setNum] = useState(randomIndex)
  const colors=["blue","black","red","pink"]
  const [color,setColor]=useState("red")
  const changeIndex = () => {
    setNum(Math.floor(Math.random() * quotes.length))
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <div className='container' style={{backgroundColor:color}}>
      <div>
        <QuoteBox index={num} color={color} />
        <Change change={changeIndex} color={color}/>
      </div>
    </div>
  )
}

export default App
