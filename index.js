// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];



// cats.length;
// console.log(cats.length);
// cats.push("Milo", "Otis", "Garfield");


// cats.push("Ralph");
// cats.unshift("Bob");

function destructivelyAppendCat(){
   
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){

    let newCats = cats.slice()
    newCats.push(name)
    return newCats;

}

function prependCat(name){
    let newCats = cats.slice();
    newCats.unshift(name)

    return newCats;
}

function removeLastCat(){
    let newCats = cats.slice()
    newCats.pop()

    return newCats;
}

function removeFirstCat(){
    let newCats= cats.slice();
    newCats.shift();

    return newCats;
}
// function appendCat(){

//     const cats = ["Milo", "Otis", "Garfield"];
//     console.log(cats);
//     const appendCat = [...cats, "Broom"];

//     // cats;
//     // appendCat;

//     console.log(appendCat);

// }

// function removeLastCat(){
//     cats.slice(0,1);
//     console.log(cats.slice(0,1));
// }
// function removeFirstCat(){
//     cats.slice(1,2);
// }