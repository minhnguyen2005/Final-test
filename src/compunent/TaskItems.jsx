import { Checkbox, List } from 'antd'
import React from 'react'

const TaskItems = (props) => {
    const{task, onRemove, trigerComplete}=props
    const renderDateTime=(num)=>{
        const date = new Date(num)
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }
  return (
<List.Item key={task.createdAt}>
    <List.Item.Meta
    title={<Checkbox checked={task.isClomleted}>{task.content}</Checkbox>}
    description={renderDateTime(task.createAt)}>
    </List.Item.Meta>
</List.Item>
    )
}

export default TaskItems