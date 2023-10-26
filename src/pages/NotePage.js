import React, { useState, useEffect } from 'react'
import {
    useParams,
    Link
} from 'react-router-dom'
import notes from '../assets/data'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = (props) => {
    let noteId = useParams().id
    // let note = notes.find(note => note.id === Number(noteId))
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`http://localhost:8000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to="/">
                    <ArrowLeft />
                </Link>
            </h3>
        </div>

        <textarea value={note?.body}>

        </textarea>
    </div>
    )
}

export default NotePage