import logo from './logo.svg';
import bg_stripes from './components/bg_stripes.svg';
import board from './components/board.svg';
import ladyBoard from './components/ladyBoard.svg';
import book_0 from './components/book_a.svg';
import book_1 from './components/book_b.svg';
import book_2 from './components/book_c.svg';
import book_3 from './components/book_d.svg';
import book_4 from './components/book_e.svg';
import book_5 from './components/book_f.svg';
import book_6 from './components/book_g.svg';
import book_7 from './components/book_h.svg';
import book_8 from './components/book_i.svg';
import bookcase from './components/bookcase.svg';
import button from './components/button.svg';
import clock_base from './components/clock_base.svg';
import filter_alphabetic from './components/filter_alphabetic.svg';
import filter_button_active from './components/filter_button_active.svg';
import filter_button from './components/filter_button.svg';
import filter_colors from './components/filter_colors.svg';
import filter_sizes from './components/filter_sizes.svg';
import ground from './components/ground.svg';
import lady from './components/lady.svg';
import logo2 from './components/logo.svg';
import filter_button_alphabetic from './components/filter_button_alphabetic.svg';
import filter_button_colors from './components/filter_button_colors.svg';
import filter_button_sizes from './components/filter_button_sizes.svg';
import './App.css';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ArrayUtil from './utils/arrayUtil';


const colorsTypes = {
  RED: 0,
  ORANGE: 1,
  YELLOW: 2,
  GREEN: 3,
  lBLUE: 4,
  dBLUE: 5,
  VIOLET: 6,
  PINK: 7,
}

// fake data generator
const books = [
  {
    book: book_0,
    color: colorsTypes.YELLOW,
    letter: 'A',
    height: 6
  },
  {
    book: book_1,
    color: colorsTypes.RED,
    letter: 'B',
    height: 4
  },
  {
    book: book_2,
    color: colorsTypes.ORANGE,
    letter: 'C',
    height: 8
  },
  {
    book: book_3,
    color: colorsTypes.lBLUE,
    letter: 'D',
    height: 9
  },
  {
    book: book_4,
    color: colorsTypes.lBLUE,
    letter: 'E',
    height: 1
  },
  {
    book: book_5,
    color: colorsTypes.VIOLET,
    letter: 'F',
    height: 3
  },
  {
    book: book_6,
    color: colorsTypes.GREEN,
    letter: 'G',
    height: 2
  },
  {
    book: book_7,
    color: colorsTypes.dBLUE,
    letter: 'H',
    height: 7
  },
  {
    book: book_8,
    color: colorsTypes.PINK,
    letter: 'I',
    height: 5
  },
]


const getItems = (count, indexFrom = 0) => {
  return Array.from({ length: count }, (v, k) => k).map((k, ind) => ({
    id: `item-${k + Math.random().toString(16).slice(2)}`,
    book: books[ind + indexFrom].book,
    height: books[ind + indexFrom].height,
    color: books[ind + indexFrom].color,
    letter: books[ind + indexFrom].letter,
  }));
}


const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  
  const destClone = Array.from(destination);

  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);
 
  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;
const filterButtonSize = 38

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


function App() {
  const [state, setState] = useState([getItems(6), getItems(3, 6)]);
  const [active, setActive] = useState(0);
  const [isActive, setIsActive] = useState(false);


  function sortByAlphabetically() {
    if (!isActive) {
      setState(
        ArrayUtil.sortAlphabetically(state, 'letter')
      )
    }
    else {
      setState(
        ArrayUtil.sortAlphabetically(state, 'letter', true)
      )
    }

  }

  function sortBySize() {
    if (!isActive) {
      setState(
        ArrayUtil.sortByNumber(state, 'height')
      )
    } else {
      setState(
        ArrayUtil.sortByNumber(state, 'height', true)
      )
    }

  }

  function sortByColor() {
    if (!isActive) {
      setState(
        ArrayUtil.sortByNumber(state, 'color')
      )
    } else {
      setState(
        ArrayUtil.sortByNumber(state, 'color', true)
      )
    }

  }
  function selectButton(event) {
    setActive(event.target.id)
  }

  React.useEffect(() => {
    setIsActive(false)
  }, [active]);


  function selectFilterButton() {
    switch (active) {
      case '1':
        sortByAlphabetically()
        break;

      case '2':
        sortByColor()

        break;

      case '3':
        sortBySize()

        break;

      default:
        break;
    }
    setIsActive(true)
  }

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;


    if (sInd === dInd) {
      console.log('entrou')
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);

      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

    

      setState(newState);
    }

    setActive(0)

  }

  return (
    <div style={{ backgroundImage: `url(${bg_stripes})` }}>

      <div className='clock-and-logo-container'>

        <div className='hidden-lg-below' style={{ marginTop: 60, marginLeft: 150 }}>
          <img height={190} src={clock_base} />
        </div>
        <div className='clock-container'>
          <img className='clock-height' src={logo2} />
        </div>
      </div>


      <div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 198.8 }}>
          <img className='ground-height' width={window.innerWidth} src={ground} />
        </div>


       


        <div className='book-case-lg'>
          <div>
            <img className='book-case-height-lg' src={bookcase}></img>
          </div>

          <div className='shelf-container'>
          <DragDropContext onDragEnd={onDragEnd}>
            {state.map((el, ind) => (

              <div >


                <Droppable direction='horizontal' key={ind} droppableId={`${ind}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      className={ind == 0 
                        ? 'single-shelf-container top-shelf-container dragable-zone-width'
                        : 'single-shelf-container dragable-zone-width'}
                      style={ind == 1 ? getBottomListStyle(snapshot.isDraggingOver) : getListStyle(snapshot.isDraggingOver)}
                      {...provided.droppableProps}
                    >
                      {el.map((item, index) => (

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
                                  justifyContent: "space-around"
                                }}
                              >
                                <img className='book-height' src={item.book}></img>

                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))}
          </DragDropContext>
        </div>

        </div>
      </div>


      <div >
        <div className='filter-buttons-container'>

          <div style={{ textAlign: 'center', marginBottom: 2, fontSize: 14, color: '#a9a9a9' }}>SORT BY</div>

          <img id='1' className='filter-button-height' onClick={selectButton} src={active == 1 ? filter_button_active : filter_button_alphabetic} />
          <img id='2' className='filter-button-height' onClick={selectButton} style={{ marginRight: 15, marginLeft: 15 }} src={active == 2 ? filter_button_active : filter_button_colors} />
          <img id='3' className='filter-button-height' onClick={selectButton} src={active == 3 ? filter_button_active : filter_button_sizes} />

          <hr style={{ borderTop: '4px solid gray', opacity: 0.3, marginRight: 15, marginLeft: 15 }}></hr>

          <img className='filter-button-height' onClick={selectFilterButton} src={button} />

        </div>

        <img src={ladyBoard} className='lady-container' />

      </div>


    </div>
  );
}

export default App;
