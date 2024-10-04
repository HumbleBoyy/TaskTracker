import React, { useState } from 'react'
import { toast } from 'react-toastify'

const AddForm = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    
    const addTasks = (e) => {
        e.preventDefault();
        if(!text || !day){
            toast.warning("Please fill the all the fields!")
            return
        }

        onAdd({
            text, 
            day, 
            reminder
        })
        toast.success("Successfully added")

        setText('')
        setDay('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit={addTasks}>
       <div className='form-control'>
          <label className='addFormLabel'>Task</label>
          <input type="text" placeholder='Add Task'
            value={text}
            onChange={(e)=> setText(e.target.value)}
          />
       </div>
       <div className='form-control'>
          <label className='addFormLabel'>Time & Day</label>
          <input type="tex" placeholder='Day And Time'
            value={day}
            onChange={(e)=> setDay(e.target.value)}
          />
       </div>
       <div className='form-control form-control-check'>
          <label className='addFormLabel'>Set Reminder</label>
          <input type="checkbox"
           checked={reminder}
           onChange={(e)=> setReminder(e.currentTarget.checked)}
          />
       </div>
       <input type="submit" value="Save Task" className='btn btn-block'/>
    </form>
  )
}

export default AddForm
