import React, { useState } from 'react'
import { notesAPI } from "../services/api"

export default NotesList

function NotesList({ notes, user, onNoteDelete }) {
  return (
    <section>
      {notes.map(note => (
        <Note
          key={note._id}
          note={note}
          user={user}
          onNoteDelete={onNoteDelete}
        />
      ))}
    </section>
  )
}

function Note({ note, user, onNoteDelete }) {
  // state ********************
  const [loading, setLoading] = useState(false)

  // methods ********************
  async function handleDelete(e) {
    e.preventDefault()
    setLoading(true)

    const { notes } = await notesAPI.deleteNote({
      id: note._id,
      userId: user._id
    })

    onNoteDelete(notes)
  }

  // render ********************
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button disabled={loading} onClick={handleDelete}>
        delete
      </button>
    </div>
  )
}
