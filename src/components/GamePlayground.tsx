import React, { useEffect, useState } from 'react'
import Block from '@/components/Block'
import { Player } from 'types/player.d'

type BlockValue = string | null

const GamePlayGround = ({ gainOneScore }: { gainOneScore: (winner: Player) => void }) => {
    const [blocks, setBlocks] = useState<Array<BlockValue>>(Array(9).fill(null))
    const [currentPlayer, setCurrentPlayer] = useState<string>(Player.player1)

    const handleClick = (index: number) => {
        if (blocks[index] !== null) return
        const newBlocks = [...blocks]
        newBlocks[index] = currentPlayer
        setCurrentPlayer(currentPlayer === Player.player1 ? Player.player2 : Player.player1)
        setBlocks(newBlocks)
    }

    useEffect(() => {
        const checkWinner = () => {
            const winLines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ]
            for (let i = 0; i < winLines.length; i++) {
                const [a, b, c] = winLines[i]
                if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
                    console.log(blocks[a])
                    console.log(`Winner is ${blocks[a]}`)
                    gainOneScore(blocks[a] as Player)
                }
            }
        }
        checkWinner()
    }, [blocks])

    return (
        <section w='100%' h='100%' grid='~ rows-3 cols-3 gap-5px' bg='gray-700' m='x-auto'>
            {blocks.map((value, i) => (
                <Block key={i} value={value} clickFn={() => handleClick(i)} />
            ))}
        </section>
    )
}

export default GamePlayGround
