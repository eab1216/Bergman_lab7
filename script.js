var groceryItem1={
	name:'steak',
	price: 19.99
};
var groceryItem2= {
	name: 'almond milk',
	price:2.99
};

var groceryItem3={
	name: 'apples',
	price: 1.39
};
var groceryItem4={
	name:'crackers',
	price: 1.69
};
var groceryItem5={
	name:'cookies',
	price:3.75
};
var shoppingList= [groceryItem1, groceryItem2, groceryItem3, groceryItem4];
var shoppingTotal=0; 

shoppingList.push(groceryItem5);

shoppingList.forEach(function(item){
 console.log(item.name +": $ "+ item.price);
 shoppingTotal += item.price;
});
console.log("Your total is : $" + shoppingTotal);





