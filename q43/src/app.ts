import { log } from "console";

//Q:43
let mag_name: string[] = ['Mystique Marlowe','Zephyr Zoltan','Celestia Crystal','Merlin Moonshadow','Seraphina Starlight'];

//copyarray
function copyArray(arr: string[]){
    return[...arr]
}

//original array
function make_great(mag_nameArray:string[] ){
    for(let i=0;i<mag_nameArray.length;i++){
        mag_nameArray[i]="The Great " + mag_nameArray[i];
    }

}

function show_mag(mag_name: string[]) {
    mag_name.forEach(items =>{
        console.log(items);
    
    });
}
const copyMag_nameArray = copyArray(mag_name);

make_great(copyMag_nameArray); 

console.log('\n\nthis is my original array');
show_mag(mag_name);

console.log('\n\nthis is my modified copy of array:')
show_mag(copyMag_nameArray);