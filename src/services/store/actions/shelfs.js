export function changeShelfs(newShelf){
    return{
        type: 'SHELF_CHANGED',
        payload: newShelf
    }
}

export function SortShelfsByLetters(newShelf){
    return{
        type: 'SORT_SHELF_ALPHABETICALLY',
        payload: newShelf
    }
}

export function SortShelfsByColors(newShelf){
    return{
        type: 'SORT_SHELF_SIZES',
        payload: newShelf
    }
}

export function SortShelfBySizes(newShelf){
    return{
        type: 'SORT_SHELF_COLORS',
        payload: newShelf
    }
}