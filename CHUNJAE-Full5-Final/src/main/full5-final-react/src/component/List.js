import React, { useState } from 'react';
import './list.css';

const List = () => {
    const [items, setItems] = useState(['A', 'B', 'C', 'D', 'E', 'F']);
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragStart = (e, index) => {
        setDraggedItem(items[index]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        const updatedItems = [...items];
        const draggedItemIndex = updatedItems.indexOf(draggedItem);
        updatedItems.splice(draggedItemIndex, 1);
        updatedItems.splice(index, 0, draggedItem);
        setItems(updatedItems);
        setDraggedItem(null);
    };

    return (
        <ul className="list">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`item ${item === draggedItem ? 'dragging' : ''}`}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDrop(e, index)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default List;
