/**
 * @jest-environment jsdom
 */
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Mode2 from '../../src/views/Mode1'

describe('Mode2', () => {
    beforeEach(() => {
        render(<Mode2 />)
    })
    test('點擊區塊後交換玩家')
    test('點擊後開放對應區塊')
    test('比分正常顯示')
    test('出現勝利/平手時，跳出對話框，並顯示勝利/平手訊息')
})
