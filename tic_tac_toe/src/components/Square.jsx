
function Square({value, onSquareClick, isWinningSquare}) {
  return (
   
     <div 
      className={`box  w-[100px] h-[100px] rounded-xl 
       flex justify-center items-center text-4xl font-semibold text-zinc-100  transition-colors duration-100 cursor-pointer  ${isWinningSquare? 'bg-green-500': 
        'bg-[#647DA8] hover:bg-[#7d96c3]'}`} 
       onClick={onSquareClick}>
        {value}
        </div>
  
  )
}

export default Square;