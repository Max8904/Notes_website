import React from 'react'
import {
    useParams
} from 'react-router-dom'
import notes from '../assets/data'

const NotePage = (props) => {
    let noteId = useParams().id

    let note = notes.find(note => note.id === Number(noteId))

    return (
    <div>
        <p>{note?.body}</p>
    </div>
    )
}

export default NotePage