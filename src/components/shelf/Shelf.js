import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import Book from "../books/Book/Book";

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: 1 * 2,
  margin: `0 ${0}px 0 0`,

  // change background colour if dragging
  background: isDragging ? '' : '',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'white' : '',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});


const getBottomListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'white' : '',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
  marginTop: 32,
});

const grid = 8;

const ShelfComponent = ({ books, indexShelf,...props }) => {
  return (
    <Droppable direction='horizontal' key={indexShelf} droppableId={`${indexShelf}`}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        className={indexShelf == 0 
          ? 'single-shelf-container top-shelf-container dragable-zone-width'
          : 'single-shelf-container dragable-zone-width'}
        style={indexShelf == 1 ? getBottomListStyle(snapshot.isDraggingOver) : getListStyle(snapshot.isDraggingOver)}
        {...provided.droppableProps}
      >
        {books.map((item, index) => (

          <Draggable
            key={item.id}
            draggableId={item.id}
            index={index}
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getItemStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
              >
                <div
                  style={{
                    zIndex: 12,
                    display: "flex",
                    justifyContent: "space-around",
                    
                  }}
                  className='book-height'
                >
                  <Book className="book-height" letter={item.letter} color={item.bookColor} size={item.height - 1}></Book>
                </div>
              </div>
            )}
          </Draggable>
        ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
  )
};

export default ShelfComponent;
