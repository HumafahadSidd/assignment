"use strict";
//Q:41
let mag_name = ['Mystique Marlowe', 'Zephyr Zoltan', 'Celestia Crystal', 'Merlin Moonshadow', 'Seraphina Starlight'];
function make_great(mag_nameArray) {
    for (let i = 0; i < mag_nameArray.length; i++) {
        mag_name[i] = "The Great " + mag_nameArray[i];
    }
}
function show_mag(mag_name) {
    mag_name.forEach(items => {
        console.log(items);
    });
}
make_great(mag_name);
show_mag(mag_name);
