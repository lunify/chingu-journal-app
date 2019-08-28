import React from 'react'
import NoteForm from './noteForm'
import NotesList from './notesList'

export default Home

function Home({ user, updateNotes }) {
  return (
    <div>
      <NoteForm user={user} onNoteSubmit={updateNotes} />
      {user.notes.length > 0 && (
        <NotesList user={user} notes={user.notes} onNoteDelete={updateNotes} />
      )}
    </div>
  )
}
