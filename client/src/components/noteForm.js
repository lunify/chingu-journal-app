import React, { useState } from 'react'

export default NoteForm

function NoteForm() {
  // state ********************
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // render ********************
  return (
    <form>
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

      <button>Create new note</button>
    </form>
  );
}
