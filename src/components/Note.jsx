import React from 'react'

const Note = ({ note, toggleimportance }) => {
  const label = note.important
    ? 'make not important' : 'make importanr'

  return (
    <div>
      <button onClick={toggleimportance} >{label}</button>
      <li className='note' >
        {note.content}
      </li>
    </div>
  )
}

export default Note