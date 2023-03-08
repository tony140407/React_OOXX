import React from 'react'
import { Player } from 'types/player.d'

// if value is true, means the block is O
interface BlockProps {
    value: null | string
    clickFn: () => void
}

const Block = ({ value, clickFn }: BlockProps) => {
    return (
        <div
            flex='~'
            justify='center'
            items='center'
            cursor='pointer'
            className={
                value === null
                    ? 'bg-white'
                    : value === Player.player1
                    ? 'bg-red-300'
                    : 'bg-blue-300'
            }
            onClick={clickFn}
        >
            <span text='5xl' font='extrabold'>
                {value === null ? null : value}
            </span>
        </div>
    )
}
export default Block
