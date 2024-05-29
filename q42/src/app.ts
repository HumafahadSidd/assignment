//Q:41
let mag_name: string[] = ['Mystique Marlowe','Zephyr Zoltan','Celestia Crystal','Merlin Moonshadow','Seraphina Starlight'];

function make_great(mag_nameArray:string[] ){
    for(let i=0;i<mag_nameArray.length;i++){
       mag_name[i]="The Great " + mag_nameArray[i];
    }

}

function show_mag(mag_name: string[]) {
    mag_name.forEach(items =>{
        console.log(items);
    
    });
}
 make_great(mag_name);

show_mag(mag_name);