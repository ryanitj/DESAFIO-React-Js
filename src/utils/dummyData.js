import * as Constants from './constants'


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

const books = [
    {
      // book: book_0,
      color: colorsTypes.YELLOW,
      bookColor: Constants.bookColors.YELLOW_GREEN,
      letter: 'A',
      height: 6
    },
    {
      // book: book_1,
      color: colorsTypes.RED,
      bookColor: Constants.bookColors.RED,
      letter: 'B',
      height: 4
    },
    {
      // book: book_2,
      color: colorsTypes.ORANGE,
      bookColor: Constants.bookColors.ORANGE,
      letter: 'C',
      height: 8
    },
    {
      // book: book_3,
      color: colorsTypes.lBLUE,
      bookColor: Constants.bookColors.BLUE_MAGENTA,
      letter: 'D',
      height: 9
    },
    {
      // book: book_4,
      color: colorsTypes.lBLUE,
      bookColor: Constants.bookColors.BLUE_MAGENTA,
      letter: 'E',
      height: 5
    },
    {
      // book: book_5,
      color: colorsTypes.VIOLET,
      bookColor: Constants.bookColors.MAGENTA_PINK,
      letter: 'F',
      height: 3
    },
    {
      // book: book_6,
      color: colorsTypes.GREEN,
      bookColor: Constants.bookColors.GREEN,
      letter: 'G',
      height: 2
    },
    {
      // book: book_7,
      color: colorsTypes.dBLUE,
      bookColor: Constants.bookColors.BLUE,
      letter: 'H',
      height: 7
    },
    {
      // book: book_8,
      color: colorsTypes.PINK,
      bookColor: Constants.bookColors.LIGHT_BLUE_MAGENTA,
      letter: 'I',
      height: 1
    },
  ]

export const getItems = (count, indexFrom = 0) => {
return Array.from({ length: count }, (v, k) => k).map((k, ind) => ({
    id: `item-${k + Math.random().toString(16).slice(2)}`,
    //book: books[ind + indexFrom].book,
    height: books[ind + indexFrom].height,
    color: books[ind + indexFrom].color,
    letter: books[ind + indexFrom].letter,
    bookColor: books[ind + indexFrom].bookColor,
}));
}