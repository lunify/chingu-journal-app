import React from 'react'
import Note from './note'

export default NotesList

function NotesList({ notes, user, onNoteSubmit }) {
  return (
    <section>
      {notes.map(note => (
        <Note
          key={note._id}
          note={note}
          user={user}
          onNoteSubmit={onNoteSubmit}
        />
      ))}
    </section>
  )
}
