import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Index from './views/Index'
import Rooms from './views/Rooms'
import Room from './components/Room'
import NoMatch from './views/NoMatch'
import Mode1 from './views/Mode1'

function App() {
    return (
        <div font='mono light'>
            <Routes>
                <Route path='/' element={<Index />}>
                    <Route path='mode1' element={<Mode1 />} />
                    <Route path='room' element={<Rooms />}>
                        <Route path=':roomID' element={<Room />} />
                    </Route>
                    <Route path='*' element={<NoMatch />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
