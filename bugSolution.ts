function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; // Fixed: "6" changed to 6
const combined = combine(arr1, arr2); 
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//Alternative solution with type checking:
function combineSafe(arr1: (number | string)[], arr2: (number | string)[]): (number | string)[]{
    return [...arr1, ...arr2].map(item => typeof item === 'string' ? parseInt(item) : item);
}
const arr3 = [1,2,3];
const arr4 = [4,5,"6"];
const combinedSafe = combineSafe(arr3, arr4);
console.log(combinedSafe); //Output: [1, 2, 3, 4, 5, 6]