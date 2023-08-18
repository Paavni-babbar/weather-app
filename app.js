let api_key= "b5e9cb6d97609d4740f306ca4fc39912"

let api_url=  "https://api.openweathermap.org/data/2.5/weather?units=metric"


let searchbox=document.querySelector('.search input')
let searchbtn=document.querySelector('.search button')
let images=document.querySelector('.weather-icon')

async function weatherapp(city){
    let response = await fetch(api_url + `&q=${city}` + `&appid=${api_key}`)
    var data = await response.json();

    if(response.status==404){
        document.querySelector('.error').style.display="block"
        document.querySelector('.weather').style.display="none"
    }
    // console.log(data)
else{
document.querySelector('.city').innerHTML = data.name;
document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
document.querySelector('.Wind').innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main == "Clouds"){
  images.src = "cloudy.jpeg";
}
else if(data.weather[0].main == "Sun"){
images.src = "sun.jpeg"
}
else if(data.weather[0].main == "Drizzle"){
images.src = "drrizle.png"
}
else if(data.weather[0].main == "Mist"){
images.src = "mist.jpeg"
}
else if(data.weather.main == "Rain"){
images.src = "rainy.png"
}

document.querySelector('.weather').style.display = "block"
document.querySelector('.error').style.display = "none"
}
}
searchbtn.addEventListener('click',()=>{
    weatherapp(searchbox.value)
})
