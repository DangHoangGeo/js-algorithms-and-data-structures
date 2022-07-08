/**
 * You are assigned to put some amount of boxes onto one truck. 
 * You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:
* numberOfBoxesi is the number of boxes of type i.
* numberOfUnitsPerBoxi is the number of units in each box of the type i.
* You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. 
* You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.
* Return the maximum total number of units that can be put on the truck.
*/

function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
    return (a[1] > b[1]) ? -1 : 1;
    }
}

/**
 * maximumUnits
 * @param boxTypes 
 * @param truckSize 
 * @returns 
 */

function maximumUnits(boxTypes: number[][], truckSize: number): number {
let returnNum = 0
let box = boxTypes.sort(compareSecondColumn)
let putOn = 0
let x = 0
while (putOn<truckSize && x<boxTypes.length){
    let put = (box[x][0] < (truckSize-putOn)) ? (box[x][0]) : (truckSize-putOn)
    returnNum += put*box[x][1]
    putOn += put
    x++
}
return returnNum;
};

console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]],35)===76)