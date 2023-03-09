/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import GamePlayground from '../src/components/GamePlayground'

test('loads and displays greeting', async () => {
    // ARRANGE
    render(<GamePlayground gainOneScore={() => {}} isPause={false} />)

    // ACT
    let player = 'O'
    await userEvent.click(screen.getByTestId('block_1'))

    // ASSERT
    expect(screen.getByTestId('block_1')).toHaveTextContent(player)
})
