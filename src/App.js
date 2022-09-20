import { closestCenter, DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import React, { useState } from 'react';
import UserComponent from './UserComponent';
import './App.css'

function App() {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Manoj"
    },
    {
      id: "2",
      name: "John"
    },
    {
      id: "3",
      name: "Ronaldo"
    },
    {
      id: "4",
      name: "Harry"
    },
    {
      id: "5",
      name: "Jamie"
    }
  ])
  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = ({active, over}) => {
    console.log("Before Drag", items);
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(item => item.id === active.id)
        const newIndex = items.findIndex(item => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
      console.log("After Drag: ", items)
    }
  }

  return (
    <>
    
    <div className='drag'
      style={{
        margin: 'auto',
        width: 'auto',
        textAlign: 'center',
        backgroundColor: '#5db0f0'
      }}
    >
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map(item => item.id)}

        >
          {
            items.map(
              item => <UserComponent {...item} key={item.id} />
            )
          }
        </SortableContext>
      </DndContext>

      

      
    </div>
    </>
  );
}

export default App;
