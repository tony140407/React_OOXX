import React, { useEffect, useState } from 'react'
import GamePlayGround from '../components/GamePlayground'
import { Player } from 'types/player.d'

const Mode1 = () => {
    const winningCondition = 1
    const [score, setScore] = useState<{ [value in Player]: number }>({ O: 0, X: 0 })
    const [isPause, setIsPause] = useState<boolean>(false)
    function gainOneScore(winner: Player) {
        setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }))
    }
    useEffect(() => {
        if (winningCondition === score.X || winningCondition === score.O) {
            setIsPause(true)
        }
    }, [score])
    return (
        <div w='90vh' h='90vh' m='x-auto'>
            <h2 data-testid='playerScore'>
                {score.O} : {score.X}
            </h2>
            <GamePlayGround isPause={isPause} gainOneScore={(winner) => gainOneScore(winner)} />
        </div>
    )
}

export default Mode1
