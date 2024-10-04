import React from 'react'

const AddForm = () => {
  return (
    <form className='add-form'>
       <div className='form-control'>
          <label className='addFormLabel'>Task</label>
          <input type="text" placeholder='Add Task'/>
       </div>
       <div className='form-control'>
          <label className='addFormLabel'>Day</label>
          <input type="tex" placeholder='Day And Time'/>
       </div>
       <div className='form-control form-control-check'>
          <label className='addFormLabel'>Set Reminder</label>
          <input type="checkbox"/>
       </div>
       <input type="submit" value="Save Task" className='btn btn-block'/>
    </form>
  )
}

export default AddForm
