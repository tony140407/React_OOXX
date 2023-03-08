import { useParams } from 'react-router-dom'

export default function Room() {
    let params = useParams()
    return <h2>room: {params.roomID}</h2>
}
