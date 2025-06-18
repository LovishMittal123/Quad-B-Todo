
import React from 'react';

const TaskInput = ({ input, setInput, priority, setPriority, handleClick }) => {
  return (
    <div className='input-box'>
      <input
        type='text'
        className='text-box'
        placeholder='Add a Task'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <select value={priority} onChange={e => setPriority(e.target.value)} className='priority-select'>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </select>
      <div className='input-bottom'>
        <div className='notification'>
          <p>🔔</p>
          <p>🔁</p>
          <p>📅</p>
        </div>
        <button className='addtask' onClick={handleClick}>ADD TASK</button>
      </div>
    </div>
  );
};

export default TaskInput;
