//worst case time complexity - O(n^2); space complexity - O(1);
//best case time complexity - O(n);

function insertionSort(array){

    let n = array.length;
    for(let i = 1;i < n;i++){
        let temp = array[i];
        for(let j = 0;j < i;j++){
            if(array[i] < array[j]){
                array.splice(i,1);
                array.splice(j,0,temp);
            }
        }
    }
    return array;
}

const ans = insertionSort([7,5,3,4,2,1,8,6]);
console.log(ans);

///2nd way

function insertionSort2(array){

    let n = array.length;

    for(let i = 1;i < n;i++){
        let key = array[i];
        let j = i-1;

        while(j >=0 && array[j] > key){
            array[j+1] = array[j];
            j = j-1; 
        }
        array[j+1] = key;
    }
    return array;
}

console.log(insertionSort2([7,5,3,4,2,1,8,6]));
