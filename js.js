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
let week=3;

if (week>0){plantGrowth=plantGrowth*2; week--;
}
console.log("plantGrowth after " + week + " weeks = "+ plantGrowth);

if (plantGrowth>=0.08) {console.log("plantGrowth after " + week + " weeks = "+ plantGrowth);
    
} else if (plantGrowth>=0.05) {console.log("plantGrowth after " + week + " weeks = "+ plantGrowth);
    
} else {console.log("plantGrowth after " + week + " weeks = "+ plantGrowth);
    
}{
    
}