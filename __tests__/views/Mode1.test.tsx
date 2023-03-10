/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Mode1 from '../../src/views/Mode1'

describe('Mode1', () => {
    beforeEach(() => {
        render(<Mode1 />)
    })

    test('比分為1:0，達成勝利條件時，mask出現阻擋遊戲繼續進行 & ', async () => {
        // [
        //     O, X, null,
        //     null, O, X,
        //     null, null, O
        // ]
        await userEvent.click(screen.getByTestId('block_0'))
        await userEvent.click(screen.getByTestId('block_1'))
        await userEvent.click(screen.getByTestId('block_4'))
        await userEvent.click(screen.getByTestId('block_5'))
        expect(screen.getByTestId('mask')).toHaveStyle('display: none')
        await userEvent.click(screen.getByTestId('block_8'))
        expect(screen.getByTestId('playerScore')).toHaveTextContent('1 : 0')
        expect(screen.getByTestId('mask')).toHaveStyle('display: block')
    })
    test('比分為0:1，達成勝利條件時，mask出現阻擋遊戲繼續進行 & ', async () => {
        // [
        //     X, O, O,
        //     null, X, O,
        //     null, null, X
        // ]
        await userEvent.click(screen.getByTestId('block_2'))
        await userEvent.click(screen.getByTestId('block_0'))
        await userEvent.click(screen.getByTestId('block_1'))
        await userEvent.click(screen.getByTestId('block_4'))
        await userEvent.click(screen.getByTestId('block_5'))
        expect(screen.getByTestId('mask')).toHaveStyle('display: none')
        await userEvent.click(screen.getByTestId('block_8'))
        expect(screen.getByTestId('playerScore')).toHaveTextContent('0 : 1')
        expect(screen.getByTestId('mask')).toHaveStyle('display: block')
    })
})
