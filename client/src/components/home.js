import React from 'react'
import NoteForm from './noteForm'

export default Home

function Home({ user, updateNotes }) {
  return (
    <NoteForm user={user} onNoteSubmit={updateNotes} />
  )
}
