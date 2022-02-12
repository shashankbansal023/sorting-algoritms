//O(n^2) time complexity and O(1) space complexity

function selectionSort(array){

    let length = array.length;

    for(let i = 0;i < length;i++){
        let min = array[i];
        let index = i;
        for(let j = i+1;j < length;j++){
            if(array[j] < min){
                min = array[j];
                index = j;
            }
        }
        array[index] = array[i];
        array[i] = min; 
    }
    return array;
}

console.log(selectionSort([8,9,1,0,3,2]))