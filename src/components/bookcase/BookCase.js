import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import ShelfComponent from "../shelf/Shelf";
import {changeShelfs} from '../../services/store/actions/shelfs'
import {connect} from 'react-redux'

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


const BookCaseComponent = ({ setShelf, setActiveFilterButton,...props }) => {
  const { shelfs } = props
  



  function onDragEnd(result) {
    const { source, destination } = result;
  
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;
  
  
    if (sInd === dInd) {
      const items = reorder(shelfs[sInd], source.index, destination.index);
      const newState = [...shelfs];
      newState[sInd] = items;
      
      props.changeShelf(newState)

    } else {
      const result = move(shelfs[sInd], shelfs[dInd], source, destination);
  
      const newState = [...shelfs];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
  
    
      props.changeShelf(newState)
  
    }

    setActiveFilterButton(false)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    {shelfs.map((el, ind) => (
        <ShelfComponent books={el} indexShelf={ind}></ShelfComponent>
    ))}
    </DragDropContext>
  )
};

function mapStateToProps(state){
  return {
    shelfs: state.shelfs
  }
}

function mapActionCreatorsToProp(dispatch){
  return {
    changeShelf(newShelf) {
      const action = changeShelfs(newShelf)
      dispatch(action)
    }
  }
}

export default connect(
  mapStateToProps,
  mapActionCreatorsToProp
  )(BookCaseComponent);
