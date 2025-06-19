import  { useState } from 'react'
import Square from './components/Square'
import calculateWinner from './utils/calculateWinner';
import './App.css';

function App() {
  
  // state handlers for handling player state and board state
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  

  const {winner, winningSquares} = calculateWinner(squares);
  
  function handleClick(i){
    if(squares[i] || winner) return;

    const nextSquare = squares.slice();
    if(xIsNext){
        nextSquare[i] = 'x';
    }
    else{
      nextSquare[i] = 'o';

    }
    setxIsNext(!xIsNext);
    setSquares(nextSquare);
  }

  // update status of the game
  
  let status;
  if(winner){
    // status = 'Winner: '+ winner.toUpperCase();
    status = '';
    
  }
  else{
    status = 'Turn: '+(xIsNext ? 'X' : 'O');
  }

  // reset the game state
  function resetBoard(){
    setSquares(Array(9).fill(null));
    setxIsNext(true);
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[linear-gradient(135deg,_#1e3c72,_#2a5298)] flex-shrink-0  '>
      <main className="main-container min-w-[360px] min-h-[504px] flex flex-col items-center  pt-[3vw]  rounded-xl bg-[#3C598E]">
            <h1  className='text-center font-bold mb-4 text-zinc-100'  >{status}</h1>
            <div className="  grid grid-container grid-cols-3 grid-rows-3 gap-2 rounded-xl ">
                
                {squares.map((value, index) => (
                  <Square 
                  key={index}
                  value={value} 
                  onSquareClick={() => handleClick(index)}
                  isWinningSquare={winningSquares && winningSquares.includes(index)}
                   />
                ))}
            </div>
            <div className= {`flex flex-col items-center gap-3  w-full ${winner? 'flex': 'hidden'}`}>
              <h1 className='text-3xl font-semibold text-zinc-100 mt-2'>{winner && winner.toUpperCase()} Win!</h1>
              <button className='px-4 py-2 bg-[#B76E01] font-medium text-zinc-100 rounded-md cursor-pointer transition-colors duration-100 hover:bg-[#c7a776]' onClick={resetBoard} >Play Again</button>
            </div>
            

      </main>
      
    </div>
  )


}

export default App