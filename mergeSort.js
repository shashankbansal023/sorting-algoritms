// mergeSort
// time complexity -> O(n*log(n)) & space complexity -> O(n);

function mergeSort(array){

    if(array.length == 1){
        return array;
    }

    let length = array.length;
    let mid = Math.floor(length/2);
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));

    return mergeSortedArrays(left,right);
}

function mergeSortedArrays(left,right){

    let arr = [];
    let leftLength = left.length;
    let rightLength = right.length;
    let leftArrayPointer = 0;
    let rightArrayPointer = 0;
    
    while((leftArrayPointer < leftLength) && (rightArrayPointer < rightLength)){
        if(left[leftArrayPointer] < right[rightArrayPointer]){
            arr.push(left[leftArrayPointer]);
            leftArrayPointer++;
        }
        else{
            arr.push(right[rightArrayPointer]);
            rightArrayPointer++;
        }
    }

    while(leftArrayPointer < left.length){
        arr.push(left[leftArrayPointer]);
        leftArrayPointer++;
    }

    while(rightArrayPointer < right.length){
        arr.push(right[rightArrayPointer]);
        rightArrayPointer++;
    }
    return arr;

}

console.log(mergeSort([8,7,3,4,5,1]));