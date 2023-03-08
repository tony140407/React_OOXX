import { Link, Outlet } from 'react-router-dom'

export default function Rooms() {
    return (
        <div>
            <h1 bg='green-100 hover:lime-300/10'>Vite + React</h1>
            <Link to='/room'>room</Link> | <Link to='/mode1'>mode1</Link>|{' '}
            <Link to='/mode2'>mode2</Link>
            <Outlet />
        </div>
    )
}
