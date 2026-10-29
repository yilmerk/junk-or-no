// A small, transparent food guide. Unknown foods are never guessed.
const groups = [
 {type:'everyday', names:'apple,banana,orange,pear,berries,blueberries,strawberries,grapes,watermelon,carrot,carrots,broccoli,spinach,cucumber,tomato,avocado,lentils,beans,chickpeas,oats,oatmeal,brown rice,quinoa,egg,eggs,boiled egg,grilled chicken,grilled fish,salmon,tofu,plain yogurt,greek yogurt,almonds,walnuts,nuts,water', why:'A minimally processed choice that can provide useful nutrients, fiber, or protein.', tip:'Enjoy it as part of a varied meal. Add a fruit or vegetable for more variety.'},
 {type:'junk',names:'chips,potato chips,crisps,french fries,fries,soda,cola,coke,pepsi,candy,sweets,gummy bears,donut,doughnut,donuts,cake,cupcake,cookies,cookie,ice cream,hot dog,instant noodles,energy drink,milkshake,chocolate bar,fried chicken,chicken nuggets',why:'Typically high in added sugar, salt, or saturated fat, with fewer nutrients for the calories.',tip:'Try fruit with plain yogurt, a handful of unsalted nuts, or a homemade alternative.'},
 {type:'depends',names:'pizza,burger,hamburger,sandwich,pasta,rice,bread,white bread,salad,smoothie,juice,fruit juice,granola,cereal,breakfast cereal,yogurt,popcorn,chocolate,sushi,wrap,peanut butter,potato,coffee,tea',why:'The ingredients, portion, and preparation make a big difference for this food.',tip:'Look for whole ingredients, extra vegetables, and less added sugar or salt.'}
];
export function classifyFood(input){
 const name=input.toLowerCase().trim().replace(/[.!?]+$/,'').replace(/\s+/g,' ');
 if(!name)return null;
 const found=groups.find(g=>g.names.split(',').includes(name));
 return found ? {name,...found} : {name,type:'unknown',why:'This food is not in our small guide yet. We would rather be clear than make a guess.',tip:'Try a simpler name such as “apple”, “pizza”, or “chips”. For packaged foods, check added sugar, sodium, and saturated fat on the label.'};
}
