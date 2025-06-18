import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import TaskInput from './TaskInput';

const TaskList = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const handleClear=()=>{
    setData([])
  }


  const [input, setInput] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(data));
  }, [data]);

  const handleClick = () => {
    if (input.trim() === '') return;
    const newTask = { text: input, priority };
    setData([...data, newTask]);
    setInput('');
    setPriority('Medium');
  };

  const handleDelete = (indexToDelete) => {
    const updatedData = data.filter((_, index) => index !== indexToDelete);
    setData(updatedData);
  };

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };
  const sortedData = [...data].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

  return (
    <div>
      <TaskInput
        input={input}
        setInput={setInput}
        priority={priority}
        setPriority={setPriority}
        handleClick={handleClick}
      />
      {sortedData.map((task, index) => (
        <div className='list-items' key={index}>
          <div className='check'>
            <input type="checkbox" />
            <p className='ele'>
              {task.text} <span style={{ fontSize: '12px', color: '#888' }}>({task.priority})</span>
            </p>
          </div>
          <button className='delete' onClick={() => handleDelete(index)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ))}
      <button className='clear' onClick={handleClear}>Clear List</button>
    </div>
  );
};

export default TaskList;
