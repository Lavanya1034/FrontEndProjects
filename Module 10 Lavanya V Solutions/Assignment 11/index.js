//details of superheroes

let superHeroes = ['spiderman', 'superman', 'wonder women', 'ironman', 'black widow', 'batman', 'thor'];

let superHeroesDetails = heroes => heroes.map((element)=>
{
 let infoArray = `${element.charAt(0).toUpperCase()}${element.slice(1)} is present at ${heroes.indexOf(element)} index and has a length of ${element.length}`;
return infoArray;
});



//function to check
console.log(superHeroesDetails(superHeroes));