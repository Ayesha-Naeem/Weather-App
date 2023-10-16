const apiKey="273f5f981838ae1a09e8cdae2c0ab951";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.weather').style.display='none';
        document.querySelector('.error').style.display='block';
    }
    else{
        var data=await response.json();
 
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C'; 
    document.querySelector('.humidity').innerHTML=data.main.humidity +'%'; 
    document.querySelector('.wind').innerHTML=data.wind.speed+ 'km/h'; 
    if(data.weather[0].main==='Clouds'){
        weathericon.src='../images/clouds.png';
    }
    else if(data.weather[0].main==='Rain'){
        weathericon.src='../images/rain.png';
    }
    else if(data.weather[0].main==='Clear'){
        weathericon.src='../images/clear.png';
    }
    else if(data.weather[0].main==='Drizzle'){
        weathericon.src='../images/drizzle.png';
    }
    else if(data.weather[0].main==='Mist'){
        weathericon.src='../images/mist.png';
    }
    document.querySelector('.error').style.display='none';
    document.querySelector('.weather').style.display='block';
    }
    
    
}

searchBtn.addEventListener("click",()=>{
    const city=searchBox.value;
    checkWeather(city);
    
    
    searchBox.value="";
}
);