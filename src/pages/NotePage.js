import React, {useState} from 'react'
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