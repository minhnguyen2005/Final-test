import React from 'react'
import { useEffect, useRef, useState } from 'react'
import {Input,List} from 'antd'
import TaskItems from '../compunent/TaskItems'
const All = () => {
  const [content, setContent] = useState('')
  const [tasks,setTasks]=useState([])

  const inpRef=useRef(null)
  const localname='tasks'
  useEffect(()=>{
    inpRef.current.focus();
    getTaskFromLocal()
  }, [])

  const handleAddNewTask=()=>{
    const items = [...tasks];
    const data={
      content,
      createAt: Date.now(),
      updateAt: Date.now(),
      isCompleted: false,
    }
    items.push(data);
    setContent('renderDateTime')
    localStorage.setItem(localname,JSON.stringify(items));
    getTaskFromLocal()
  }

  const getTaskFromLocal =()=>{
    const res=localStorage.getItem(localname)
    if(res){
      setTasks(JSON.parse(res))
    }
  }
  const updateTask= (item)=>{
    const index = tasks.findIndex((element)=>element.createAt===item.createAt);

    if(index !== -1){
      tasks[index]=item;
      localStorage.setItem(localname, JSON.stringify(tasks))
    }
    getTaskFromLocal();
  }
  return (
    <div>    
    <div className='main'>
    <Input 
    ref={inpRef}
    value={content}
    size='midium' 
    placeholder='add details' 
    allowClear
    onChange={(val)=>setContent(val.target.value)}>
    </Input>
    <button onClick={handleAddNewTask}>add</button>
  </div>
  <div className='list'> <List dataSource={tasks} renderItem={(task)=><TaskItems task={task} onRemove={()=>console.log(task)} trigerComplete={()=>updateTask(task)} />}></List></div>
 
</div>
  )
}

export default All