import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import { Player } from 'types/player.d'

export interface Mode2State {
    player: Player
}

const initialState: Mode2State = {
    player: Player.player1,
}

export const Mode2Store = createSlice({
    name: 'mode2',
    initialState,
    reducers: {
        changePlayer: (state) => {
            state.player = state.player === Player.player1 ? Player.player2 : Player.player1
        },
    },
})

// Action creators are generated for each case reducer function
export const { changePlayer } = Mode2Store.actions

export default Mode2Store.reducer
