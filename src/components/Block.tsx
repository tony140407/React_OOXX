import React from 'react'
import { Player } from 'types/player.d'

interface BlockProps {
    value: null | string
    clickFn: () => void
    dataSet: string
}

const Block = ({ value, clickFn, dataSet }: BlockProps) => {
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
            <span text='5xl' font='extrabold' data-testid={dataSet}>
                {value === null ? null : value}
            </span>
        </div>
    )
}
export default Block
