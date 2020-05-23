
function rotateLeft(array, rotations) {
    const arr = array.map(i => i);

    // rotations-- decrements number of rotations
    while (rotations--){
        let temp = arr.shift()
        arr.push(temp)
    }

    return arr;
}

rotateLeft([1,2,3,4,5], 3)