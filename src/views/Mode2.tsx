import React, { useEffect, useState } from 'react'
import GamePlayGround from '../components/GamePlayground'
import { Player } from 'types/player.d'

const Mode2 = () => {
    const winningCondition = 5
    const [score, setScore] = useState<{ [value in Player]: number }>({ O: 0, X: 0 })
    const [currentPlayGround, setCurrentPlayGround] = useState<number>(4)
    function gainOneScore(winner: Player) {
        setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }))
    }
    function changePlayGround() {}
    useEffect(() => {
        if (winningCondition === score.X || winningCondition === score.O) {
            // TODO: show dialog
            setCurrentPlayGround(-1)
        }
    }, [score])
    return (
        <div w='90vh' h='90vh' m='x-auto'>
            <h2 data-testid='playerScore'>
                {score.O} : {score.X}
            </h2>
            <section
                relative='~'
                w='100%'
                h='100%'
                grid='~ rows-3 cols-3 gap-5px'
                bg='gray-700'
                m='x-auto'
            >
                {Array.from({ length: 9 }).map((_, i) => (
                    <GamePlayGround
                        key={i}
                        isPause={currentPlayGround !== i}
                        gainOneScore={(winner: Player) => gainOneScore(winner)}
                    />
                ))}
            </section>
        </div>
    )
}

export default Mode2
