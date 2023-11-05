
import { useState } from 'react';
import data from './Emojis.json'
import css from './App.css'

function App() {

  const [emojis , setemojis] = useState("")
  const [filtreditems , setfiltreditems] = useState(data)

  function searchinp (e) {
    setemojis(e.target.value)

    const filtredemojis = data.filter((emoji) => 
    emoji.description.includes(emojis)
    );

    setfiltreditems(filtredemojis)
  }

  return(
    <div>
      <h1 style={{"color" : "wheat"}}>Emoji Search</h1>
      <input type='text' id='inputsearch' value={emojis} onChange={searchinp}></input>
      <ul id='list'>
        {filtreditems.map((emojis , index) =>  <li key={index}>{emojis.emoji} {emojis.description}</li> )}
      </ul>
    </div>
  )
}export default App;