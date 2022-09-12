import React, { useState } from 'react'
import Column from './Column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

function DragDropContext(props) {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='all-columns' direction='horizontal' type='column'>
                {(provided) => (
                    <Container {...provided.droppableProps} ref={provided.innerRef}>
                        {data.columnOrder.map((id, index) => {
                            const column = data.columns[id]
                            const tasks = column.taskIds.map(taskId => data.tasks[taskId])

                            return <Column key={column.id} column={column} tasks={tasks} index={index} />
                        })}
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
    )
}


export default DragDropContext;