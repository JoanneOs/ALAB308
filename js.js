console.log("hi");

let radius = 5;
const pi = 3.1415;
const area = pi * radius*radius;//calcualtin the area of gared, circle
//output givings
console.log("radius= " + radius);
console.log("pi= " + pi);
console.log("area= " + area);
//Each plant requires a minimum space of 0.8 square meters.
let plantSpace=0.8;
console.log("plantSpace = " + plantSpace);

//The area is starting with 20 plants.
let areaStart=20;
console.log("areaStart = " + areaStart);
//The plants double in number every week.
let plantGrowth= areaStart;
console.log("plantGrowth = " + plantGrowth);
//Predict the plant growth after a specific number of weeks.
let week=3;//can be changed
// plantGrowth=plantGrowth*2*week;//not right
/*if (week>0){plantGrowth=plantGrowth*2; week--;
}
console.log("plantGrowth after " + week + " weeks = "+ plantGrowth);
}*/

// if (plantGrowth>=80) {console.log("plantGrowth after " + week + "  weeks = "+ plantGrowth +" Pruned, to stop them from exceeding the capacity of the garden.");
    
// } else if (plantGrowth>=50) {console.log("plantGrowth after " + week + " weeks = "+ plantGrowth+ " Monitored, if they are growing at an acceptable rate. ");
    
// } else {console.log("plantGrowth after " + week + " weeks = "+ plantGrowth+ " Planted, if there is room to plant more plants. ");
    
// }

// while(plantGrowth>2)plantGrowth=plantGrowth;

if (week==1){plantGrowth=plantGrowth*2;}//Double the plant count week 1
else if(week==2){plantGrowth*2*2;}//Double the plant count week 2
else if(week===3){plantGrowth=plantGrowth*2*2*2;}//Double the plant count week 3

// the output 
console.log("plantGrowth after  "+week+" weeks = "+plantGrowth)

//sugessting when >80%,50% pruned, monitored and when planted
let max=area/plantSpace;
let max80=0.8*max;
let max50=0.5*max;
if(plantGrowth>max80){console.log("Pruned, to stop them from exceeding the capacity of the garden.This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.");}
else if (plantGrowth>max50){console.log("Monitored, if they are growing at an acceptable rate.This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.")}
