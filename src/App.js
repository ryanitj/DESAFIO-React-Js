import './assets/styles/App.css';
import React, { useState } from 'react';
import ArrayUtil from './utils/arrayUtil';
import { getItems } from './utils/dummyData'
import { Images } from './assets/img';
import BookCaseComponent from './components/bookcase/BookCase'

import {SortShelfBySizes, SortShelfsByLetters, SortShelfsByColors} from './services/store/actions/shelfs'
import {connect} from 'react-redux'


function App({...props}) {
  const [state, setState] = useState([getItems(6), getItems(3, 6)]);
  const [active, setActive] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function sortByAlphabetically() {
    if (!isActive) {
      props.SortShelfsByLetters(ArrayUtil.sortAlphabetically(state, 'letter'))
    }
    else {
      props.SortShelfsByLetters(ArrayUtil.sortAlphabetically(state, 'letter', true))
    }

  }

  function sortBySize() {
    if (!isActive) {
      props.SortShelfBySizes(
        ArrayUtil.sortByNumber(state, 'height')
      )
    } else {
      props.SortShelfBySizes(
        ArrayUtil.sortByNumber(state, 'height', true)
      )
    }

  }

  function sortByColor() {
    if (!isActive) {
      props.SortShelfsByColors(
        ArrayUtil.sortByNumber(state, 'color')
      )
    } else {
      props.SortShelfsByColors(
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


  return (
    <div style={{backgroundImage:`url(${Images.BackGroundStripes})`}}>

      <div className='clock-and-logo-container'>

        <div className='hidden-lg-below ' style={{ marginTop: 60, marginLeft: 150 }}>
          <img height={180} src={Images.ClockBase} />
        </div>

        <div className='clock-container'>
          <img className='clock-height' src={Images.Logo} />
        </div>
      </div>


      <div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 198.8 }}>
          <img className='ground-height' width={window.innerWidth} src={Images.Ground} />
        </div>

        <div className='book-case-lg'>
          <div>
            <img className='book-case-height-lg' src={Images.BookCase}></img>
          </div>

          <div className='shelf-container'>
            <BookCaseComponent
              setShelf={setState}
              setActiveFilterButton={setActive} />
          </div>
        </div>
      </div>


      <div>
        <div className='filter-buttons-container'>
          <div className='text-filter-buttons'>SORT BY</div>

          <img id='1' className='filter-button-height' onClick={selectButton} 
          src={active == 1 
          ? Images.FilterButtonActive 
          : Images.FilterButtonAlphabetic} />

          <img id='2' className='filter-button-height' onClick={selectButton} style={{ marginRight: 15, marginLeft: 15 }} 
            src={active == 2 
            ? Images.FilterButtonActive 
            : Images.FilterButtonColors} />

          <img id='3' className='filter-button-height' onClick={selectButton} 
          src={active == 3 
          ? Images.FilterButtonActive 
          : Images.FilterButtonSizes} />

          <hr className='filter-divider'></hr>
          <img className='filter-button-height' onClick={selectFilterButton} src={Images.Button} />
        </div>
        <img src={Images.LadyAndBoard} className='lady-container' />
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return {
    shelfs: state.shelfs
  }
}

function mapActionCreatorsToProp(dispatch){
  return {
    SortShelfsByLetters(newShelf) {
      const action = SortShelfsByLetters(newShelf)
      dispatch(action)
    },

    SortShelfsByColors(newShelf) {
      const action = SortShelfsByColors(newShelf)
      dispatch(action)
    },

    SortShelfBySizes(newShelf) {
      const action = SortShelfBySizes(newShelf)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapActionCreatorsToProp)(App);
