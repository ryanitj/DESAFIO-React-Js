import React from "react";
import * as Constant from '../../../utils/constants'
import { Sizes } from "../sizes";

const bookSizes = [
  Sizes.BookComponentSizeOne,
  Sizes.BookComponentSizeTwo,
  Sizes.BookComponentSizeThree,
  Sizes.BookComponentSizeFour,
  Sizes.BookComponentSizeFive,
  Sizes.BookComponentSizeSix,
  Sizes.BookComponentSizeSeven,
  Sizes.BookComponentSizeEight,
  Sizes.BookComponentSizeNine,
]

const getVectorFromLetter = (letter) => {
    const chosenLetter = Object.keys(Constant.lettersVectors).filter((array_letter) => {
        return array_letter == letter
    })[0]

    const letterVector = Constant.lettersVectors[`${chosenLetter}`]

    return letterVector
}

const BookComponent = ({ size, letter, color,...props }) => {

  const letterVector = getVectorFromLetter(letter)

  let Book = bookSizes[size]

  return <Book letterVector={letterVector} color={color}></Book>

};

export default BookComponent;
