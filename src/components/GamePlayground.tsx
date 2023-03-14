import React, { useEffect, useRef, useState } from 'react'
import Block from '@/components/Block'
import { Player } from 'types/player.d'

type BlockValue = string | null
interface GamePlayGroundProps {
    gainOneScore: (winner: Player) => void
    isPause: boolean
}
const GamePlayGround = ({ gainOneScore, isPause }: GamePlayGroundProps) => {
    const [blocks, setBlocks] = useState<Array<BlockValue>>(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<string>(Player.player1)
    const [winLines, setWinLines] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ])

    const handleClick = (index: number) => {
        if (blocks[index] !== null) return
        const newBlocks = [...blocks]
        newBlocks[index] = currentPlayer
        setCurrentPlayer(currentPlayer === Player.player1 ? Player.player2 : Player.player1)
        setBlocks(newBlocks)
    }

    useEffect(() => {
        const checkWinner = () => {
            for (let i = 0; i < winLines.length; i++) {
                const [a, b, c] = winLines[i]
                if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
                    const updatedWinLines = [...winLines]
                    updatedWinLines.splice(i, 1)
                    setWinLines(updatedWinLines)
                    gainOneScore(blocks[a] as Player)
                    break
                }
            }
        }
        checkWinner()
    }, [blocks])

    return (
        <section
            relative='~'
            w='100%'
            h='100%'
            grid='~ rows-3 cols-3 gap-2px'
            bg='gray-700'
            m='x-auto'
        >
            {blocks.map((value, i) => (
                <Block
                    key={i}
                    value={value}
                    clickFn={() => handleClick(i)}
                    dataSet={`block_${i}`}
                />
            ))}
            {/* a mask when isPause===true show */}
            <div
                w='100%'
                h='100%'
                bg='gray-500/50'
                className='absolute top-0 left-0'
                style={{ display: isPause === true ? 'block' : 'none' }}
                data-testid='mask'
            ></div>
        </section>
    )
}

export default GamePlayGround
