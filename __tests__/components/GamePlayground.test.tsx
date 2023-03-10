/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import GamePlayground from '../../src/components/GamePlayground'
import { Player } from '../../types/player'

describe('GamePlayground', () => {
    const player1 = Player.player1
    const player2 = Player.player2
    // 建立一個 jest mock 函數
    const mockGainOneScore = jest.fn()

    beforeEach(() => {
        render(<GamePlayground gainOneScore={mockGainOneScore} isPause={false} />)
    })

    test('Player 點擊後會交換攻擊方', async () => {
        // ACT
        await userEvent.click(screen.getByTestId('block_0'))
        await userEvent.click(screen.getByTestId('block_1'))

        // ASSERT
        expect(screen.getByTestId('block_0')).toHaveTextContent(player1)
        expect(screen.getByTestId('block_1')).toHaveTextContent(player2)
    })
    test('Player 無法點擊重複位置', async () => {
        // ACT
        await userEvent.click(screen.getByTestId('block_0'))
        await userEvent.click(screen.getByTestId('block_0'))
        await userEvent.click(screen.getByTestId('block_1'))

        // ASSERT
        expect(screen.getByTestId('block_0')).toHaveTextContent(player1)
        expect(screen.getByTestId('block_1')).toHaveTextContent(player2)
    })
    test('未達成條件時 gainOneScore 不應被觸發', async () => {
        // 觸發事件，測試 gainOneScore 是否被正確呼叫
        await userEvent.click(screen.getByTestId('block_1'))
        expect(mockGainOneScore).not.toHaveBeenCalled()
    })
    test('達成條件時 gainOneScore 應被觸發', async () => {
        // [
        //     O, X, null,
        //     null, O, X,
        //     null, null, O
        // ]
        // 觸發事件，測試 gainOneScore 是否被正確呼叫
        await userEvent.click(screen.getByTestId('block_0'))
        await userEvent.click(screen.getByTestId('block_1'))
        await userEvent.click(screen.getByTestId('block_4'))
        await userEvent.click(screen.getByTestId('block_5'))
        await userEvent.click(screen.getByTestId('block_8'))
        expect(mockGainOneScore).toHaveBeenCalled()
    })
})
