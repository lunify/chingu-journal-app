import React, { useState } from 'react'
import { notesAPI } from '../services/api'

export default Note

function Note({ note, user, onNoteSubmit }) {
  // state ********************
  const [title, setTitle] = useState(note.title)
  const [body, setBody] = useState(note.body)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)
  const [editing, setEditing] = useState(false)

  // methods ********************
  async function handleDelete(e) {
    e.preventDefault()
    setLoading(true)

    const { notes } = await notesAPI.deleteNote({
      id: note._id,
      userId: user._id
    })

    onNoteSubmit(notes)
  }

  async function handleEdit(e) {
    e.preventDefault()
    setLoading(true)

    const updates = {}
    if (title !== note.title) {
      updates.title = title
    }
    if (body !== note.body) {
      updates.body = body
    }

    if (!updates.title && !updates.body) {
      setLoading(false)
      return setEditing(false)
    }

    const { errors, notes } = await notesAPI.editNote({
      ...updates,
      id: note._id,
      userId: user._id
    })

    setLoading(false)
    if (errors) {
      return setErrors(errors)
    }

    setEditing(false)
    onNoteSubmit(notes)
  }

  // render ********************
  return (
    <div>
      <div style={{ display: editing && 'none' }}>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={() => setEditing(true)}>edit</button>
        <button disabled={loading} onClick={handleDelete}>
          delete
        </button>
      </div>

      <form onSubmit={handleEdit} style={{ display: !editing && 'none' }}>
        {errors && errors.map(error => <p key={error}>{error}</p>)}
        <input
          onChange={e => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea onChange={e => setBody(e.target.value)} value={body} />
        <button disabled={loading}>confirm</button>
      </form>
    </div>
  )
}
