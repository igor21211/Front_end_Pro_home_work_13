const removeElement = (array, value) => {
    let index = array.indexOf(value);
    array.splice(index,1);
}
const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 7 );
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]