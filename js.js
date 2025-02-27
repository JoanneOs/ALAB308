console.log("hi");

let radius = 5;
const pi = 3.1415;
const area = pi * radius;
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
let week=2;
plantGrowth=plantGrowth*2*week;
/*if (week>0){plantGrowth=plantGrowth*2; week--;
}
console.log("plantGrowth after " + week + " weeks = "+ plantGrowth);
}*/

if (plantGrowth>=80) {console.log("plantGrowth after " + week + "  weeks = "+ plantGrowth +" Pruned, to stop them from exceeding the capacity of the garden.");
    
} else if (plantGrowth>=50) {console.log("plantGrowth after " + week + " weeks = "+ plantGrowth+ " Monitored, if they are growing at an acceptable rate. ");
    
} else {console.log("plantGrowth after " + week + " weeks = "+ plantGrowth+ " Planted, if there is room to plant more plants. ");
    
}

// while(plantGrowth>2)plantGrowth=plantGrowth;