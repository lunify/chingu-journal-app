import React from 'react'
import NoteForm from './noteForm'

export default Home

function Home({ user, updateNotes }) {
  return (
    <div>
      <NoteForm user={user} onNoteSubmit={updateNotes} />
      { user.notes.length > 0 && <NotesList notes={user.notes} /> }
    </div>
  )
}

function NotesList({ notes }) {
  return (
    <section>
      { notes.map(note => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
        </div>
      ))}
    </section>
  )
}
