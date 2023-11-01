const food = require('./food.json'); 


//list all the food items

food.map((foods)=>{
    console.log(foods.foodname);
});

//list all the food items with category vegetables
function items1(vegetables) {
         food.map((foods)=>{
            if(foods==vegetables)
            console.log(vegetables)
         })
}
//list all the food items with category vegetables
list1("Vegetable");
//list all the food items with category fruit
list1("fruits");
//list all the food items with category protien
list1("protien");
//list all the food items with category nuts
list1("nuts");
//list all the food items with category grains
list1("grains");
//list all the food items with category dairy
list1("dairy");

//list all the food items with calorie above 100
food.map((foods)=>{
    if(foods.calorie>100){
        console.log(foods.foodname);
    }
})
// list all the food items with calorie below 100
food.map((foods)=>{
    if(foods.calorie<100){
        console.log(foods.foodname);
    }
})
// list all the food items with highest protien content to lowest
function foodcompare(a,b){
    if(a.protiens < b.protiens && a.protiens > b.protiens){
        return 1;
        elseif
        return -1;
    }
    food.sort(foodcompare)
food.forEach((foods)=>{
    console.log(foods.foodname);
})
​}

// list all the food items with lowest cab content to highest

function compare(a, b){
    if(a.cab < b.cab){
        return 1;
    }else if(a.cab==b.cab){
        return 0;
    }else{
        return -1;
    }
}
food.sort(compare)
food.forEach((foods)=>{
    console.log(foods.foodname);
})


