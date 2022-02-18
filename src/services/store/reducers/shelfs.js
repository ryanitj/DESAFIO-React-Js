import { getItems } from "../../../utils/dummyData";

const initialState = [
    getItems(6),
    getItems(3, 6)
]

export default function (state = initialState, action){
    switch (action.type) {
        case 'SHELF_CHANGED':
            return [
                ...action.payload
            ]
        case 'SORT_SHELF_ALPHABETICALLY':
            return [
                ...action.payload
            ]
        case 'SORT_SHELF_SIZES':
            return [
                ...action.payload
            ]
        case 'SORT_SHELF_COLORS':
            return [
                ...action.payload
            ]
        default:
            return state;
    }
}