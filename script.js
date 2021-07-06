// get entry from user

document.querySelector('#submitButton').addEventListener("click", function(){ // when i click the submit button, do something

    
const chosenPokemon =  document.querySelector ('#pokemonEntry').value; //grab the value of the pokemonentry id from the html and make it the "chosenpokemon" variable/constant
console.log (chosenPokemon);




// call pokeApi to get data
fetch('https://pokeapi.co/api/v2/pokemon/' + chosenPokemon) // fetch the data from the pokemon API and take into account what was typed into the input 

//returns a promise of data
    .then(function(response) {  //tell me what to do with and what to call that data
    
       // console.log (response)
        return response.json(); // return a response in JSON

//returns a promise of more data        
    })
    .then(function(data) { // and with that data, we grab what specific data points we need (in this case name and img)
        
        console.log(data);
        const pokemonName = data.name; //constant (will not change) and let (will change)
        const pokemonImg = data.sprites.front_default;

        //reach into the html and grab elements we want to change
        const pokemonnameEl = document.querySelector('#pokemonName');
        const pokemonimgEl = document.querySelector('#pokemonImage');


        console.log(pokemonnameEl);
        console.dir (pokemonimgEl); //detailed version of console log

       //modify those elements with our new data
       pokemonnameEl.innerHTML= pokemonName; //put the pokemons name in the <h2> section of html
       pokemonimgEl.src = pokemonImg; // put the image of the pokemon in the <img> element of the html

    })    

    .catch(function(){
        alert ('Please try again!') // for mispelled pokemons, post a 404 alert with the text "gimme your blerd card"
    })
})






