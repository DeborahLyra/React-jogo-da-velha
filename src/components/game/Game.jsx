import { useState } from 'react'

import styles from './Game.module.css'

import GameOption from '../gameOption/GameOpition'

function Game (){

  const [gameState, setGameState] = useState( Array(9).fill(0))

  return (
    <div className={styles.game}>
      {
        gameState.map((value, position)=> 
        <GameOption 
          key ={`game-option-pos-${position}`}
          status ={value}
        /> 
        )
      }
    </div>
  )
}

export default Game