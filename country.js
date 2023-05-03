class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    DisplayColors(){
        document.getElementById("Color1").style.backgroundColor = country.colors[0];
        document.getElementById("Color2").style.backgroundColor = country.colors[1];
        document.getElementById("Color3").style.backgroundColor = country.colors[2];
        document.getElementById("CountryName").innerHTML = country.name;
        document.getElementById("OfficialLanguage").innerHTML = country.lang;
        document.getElementById("HelloWorld").innerHTML = country.greeting;
    }

}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"]);
let canada = new Country("Canada", "English", "Hello world, eh!",["red", "white", "white"]);
let united_Kingdom = new Country("United Kingdom", "English", "Hellow world chaps!", ["red", "white", "blue"]);
let israel = new Country("Israel", "Hebrew", "שלום עולם", ["blue", "white", "white"]);
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "red", "gold"]);
let japan = new Country("Japan", "German", "こんにちは世界", ["red", "white", "white"]);

let country = usa;   
country.DisplayColors();


function SwitchCountry() {

    let input = document.getElementById("CountryList").value;
    //let input = "USA";   
    //console.log(input)

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Canada") {
        country = canada;
    }
    else if (input === "United Kingdom") {
        country = united_Kingdom;
    }
    else if (input === "Israel") {
        country = israel;
    }
    else if (input === "Germany") {
        country = germany;
    }
    else if (input === "Japan") {
        country = japan;
    }

    country.DisplayColors();

}
