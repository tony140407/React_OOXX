import React, { useState } from 'react'
import GamePlayGround from '../components/GamePlayground'
import { Player } from 'types/player.d'

const Mode1 = () => {
    const [score, setScore] = useState<{ X: number; O: number }>({ X: 0, O: 0 })
    function gainOneScore(winner: Player) {
        setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }))
    }
    return (
        <div w='90vh' h='90vh' m='x-auto'>
            <h2>
                {score.O} : {score.X}
            </h2>
            <GamePlayGround gainOneScore={(winner) => gainOneScore(winner)} />
        </div>
    )
}

export default Mode1
