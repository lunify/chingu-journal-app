import React, { useState } from 'react'
import { notesAPI } from '../services/api'

export default NoteForm

function NoteForm({ user, onNoteSubmit }) {
  // state ********************
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  // state ********************
  async function handleSubmit(e) {
    e.preventDefault()
    setErrors([])
    setLoading(true)

    const { errors, notes } = await notesAPI.createNote({
      title,
      body,
      userId: user._id
    })
    setLoading(false)

    if (errors) {
      return setErrors(errors)
    }

    setTitle('')
    setBody('')
    onNoteSubmit(notes)
  }

  // render ********************
  return (
    <form onSubmit={handleSubmit}>
      {errors && errors.map(error => <p key={error}>{error}</p>)}

      <label htmlFor="title">Title</label>
      <input
        onChange={e => setTitle(e.target.value)}
        value={title}
        type="text"
        name="title"
        id="title"
        required
      />

      <label htmlFor="body">Body</label>
      <textarea
        onChange={e => setBody(e.target.value)}
        value={body}
        name="body"
        id="body"
        required
      />

      <button disabled={loading}>Create new note</button>
    </form>
  );
}
