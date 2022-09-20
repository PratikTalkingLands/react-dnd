import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React from 'react';

const UserComponent = ({
    id,
    name,
    img
}) => {
    const {
        setNodeRef,
        attributes,
        listeners,
        transition,
        transform,
        isDragging,
    } = useSortable({ id: id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        border: '2px solid black',
        marginBottom: 5,
        marginTop: 5,
        backgroundColor: 'red',
        height: '60px',
        width: '100px',
        borderRadius: '10px',
        margin: '10px',
        opacity: isDragging ? 0.5 : 1,
        touchAction: 'auto'
    }

    return (
        <div className='drag'>
            <div
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                style={style}
            >
                {name}
                <img src={img}/>
            </div>
            </div>
        
    )
}

export default UserComponent;
