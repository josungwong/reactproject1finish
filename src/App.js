import './App.css';
import Box from "./compo/Box"
import {useState} from "react"

const choice = {
  rock:{
    name:"rock",
    img:"https://m.media-amazon.com/images/I/51rOMX5z40L.jpg"
  },
  scissors:{
    name:"scissors",
    img:"https://m.media-amazon.com/images/I/810Tz4tXUyL.jpg"
  },
  paper:{
    name:"paper",
    img:"https://m.media-amazon.com/images/I/617B4LbYLnL._AC_UF894,1000_QL80_.jpg"
  }
}
function App() {
  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect,setComputerSelect] = useState(null)
  const [result,setResult] = useState("")

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])  
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))

  }

  const judgement = (user,cpu) => {
    if(user.name === cpu.name){
      return "Tie"
    }else if(user.name === "rock")return cpu.name === "scissors"?"Win":"Lose"
    else if(user.name === "scissors")return cpu.name === "paper"?"Win":"Lose"
    else if(user.name === "paper")return cpu.name === "rock"?"Win":"Lose"
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice) //객체의 키값만 뽑아서 배열로 만들어줌
    let randomItem =Math.floor(Math.random()*itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }
  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result}/>
        <Box title='Computer' item={computerSelect} result={result}/>
      </div>
      <div className='main'>
        <button onClick={()=>play("scissors")} className='buttons'>가위</button>
        <button onClick={()=>play("rock")} className='buttons'>바위</button>
        <button onClick={()=>play("paper")} className='buttons'>보</button>
      </div>
    </div>
    
  );
}

export default App;
