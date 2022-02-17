export default class ArrayUtil{
    static sortByNumber(array, prop, isReverse = false){
        if(isReverse){
            return array.map((item => {
                return item.reverse(function (a, b) { return a[`${prop}`] - b[`${prop}`] })
            }))
        }
        else{
            return array.map((item => {
                return item.sort(function (a, b) { return a[`${prop}`] - b[`${prop}`] })
            }))
        }
    }

    static sortAlphabetically(array, prop, isReverse = false){
        if(isReverse){
            return array.map((item) => {
                return item.reverse(function (a, b) {
                  if (a[`${prop}`] < b.letter) { return -1; }
                  if (a[`${prop}`] > b.letter) { return 1; }
                  return 0;
                })
              })
        }
        else{
            return array.map((item) => {
                return item.sort(function (a, b) {
                  if (a[`${prop}`] < b[`${prop}`]) { return -1; }
                  if (a[`${prop}`] > b[`${prop}`]) { return 1; }
                  return 0;
                })
              })
        }
    }

    

   
}