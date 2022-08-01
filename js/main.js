



// console.log(result) 
//   todayDegree

let today = document.getElementById('today'),
todayDate = document.getElementById('today-date'),
country = document.getElementById('country'),
todayDegree = document.getElementById('today-degree'),
todayImage = document.getElementById('todayImage'),
state = document.getElementById('state'),
humidity = document.getElementById('humidity'),
wind = document.getElementById('wind'),
compass = document.getElementById('compass'),
response,
result,
search = document.getElementById('search'),
Country = 'cairo',

// NextDay
nextDay = document.getElementsByClassName('nextDay'),
nextDayDate = document.getElementById('nextDay-date'),
nextDayImage = document.getElementById('nextDayImage'),
minDegree = document.getElementById('minDegree'),
nextDayState = document.getElementById('nextDayState'),

nextDayDate2 = document.getElementById('nextDay-date2'),
nextDayImage2 = document.getElementById('nextDayImage2'),
minDegree2 = document.getElementById('minDegree2'),
nextDayState2 = document.getElementById('nextDayState2')


days=['Sunday' , 'Monday' , 'Thursday' , 'Wensday' , 'Tuesday' , 'Frieday' , 'Saterday'],
mounths=['January' , 'February' , 'March' , 'April' , 'May ' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']


// let myHttp = new XMLHttpRequest();
// myHttp.open('GET' , `http://api.weatherapi.com/v1/forecast.json?key=b558d2ab34c548cabdd232930220407 &q=${Country}&days=3`);
// myHttp.send();


// myHttp.addEventListener('readystatechange' , ()=>{
//     if(myHttp.readyState == 4)
//     {
//         result = JSON.parse(myHttp.response);
//         console.log(result);
//         displayToday() ;
//             displayNextday();
//             displayThirdday();
//     }
// })

async function getWeather()
{
    response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b558d2ab34c548cabdd232930220407 &q=${Country}&days=3`);
    result = await response.json();
    console.log(result);
    displayToday() ;
    displayNextday();
    displayThirdday();
}
getWeather()


function displayToday()
{
    let day = new Date();
    today.innerHTML= days[day.getDay()];
    todayDate.innerHTML =`${day.getDate()}  ${mounths[day.getMonth()]}`
    country.innerHTML = result.location.name;
    todayDegree.innerHTML = result.current.temp_c;
    todayImage.setAttribute('src' , `https:${result.current.condition.icon}`);
    state.innerHTML = result.current.condition.text;
    humidity.innerHTML = result.current.humidity;;
    wind.innerHTML = result.current.wind_kph
    compass.innerHTML = result.current.wind_dir;
}

function displayNextday()
{
        nextDayDate.innerHTML=days[new Date(result.forecast.forecastday[1].date).getDay()];
        minDegree.innerHTML = result.forecast.forecastday[1].day.maxtemp_c;
        nextDayImage.setAttribute('src' , `https:${result.forecast.forecastday[1].day.condition.icon}`);
        minDegree.innerHTML = result.forecast.forecastday[1].day.mintemp_c;
        nextDayState.innerHTML = result.forecast.forecastday[1].day.condition.text   
}
function displayThirdday()
{
    nextDayDate2.innerHTML=days[new Date(result.forecast.forecastday[2].date).getDay()];
    minDegree2.innerHTML = result.forecast.forecastday[2].day.maxtemp_c;
    nextDayImage2.setAttribute('src' , `https:${result.forecast.forecastday[2].day.condition.icon}`);
    minDegree2.innerHTML = result.forecast.forecastday[2].day.mintemp_c;
    nextDayState2.innerHTML = result.forecast.forecastday[2].day.condition.text   
}


search.addEventListener("keyup" , ()=>{
    Country = search.value;
     getWeather();
})


$('ul li').click(function (){
    $(this).siblings().css({'border' :'none ' , 'color' : '#fff'});
    $(this).css({'border' : '3px solid #009AD8' , 'color' : '#009AD8 !important'})
})


{
    //     // for(var i=0 ; i<nextDay.length ; i++)
    //     // {
    //     //     nextDayDate[i].innerHTML = days[new Date(data.forecast.forecastday[i+1].date).getDay()];
    //     //    maxDegree[i].innerHTML = data.forecast.forecastday[i+1].day.maxtemp_c;
    //     //    nextDayImage[i].setAttribute('src' , `https:${data.forecast.forecastday[i+1].day.condition.icon}`);
    //     //    minDegree[i].innerHTML = data.forecast.forecastday[i+1].day.mintemp_c;
    //     //    nextDayState[i].innerHTML = data.forecast.forecastday[i+1].day.condition.text
    //     // }
// function displayNextxToday() {
//       let box='';
// for(let i=0 ; i<nextDay.length ; i++){
//     box +=`
    
//     <div class="col-md-4 ">
// <div class="nextDay ">
//  <div class="next-day text-center"><p id="nextDay-date"></p> monday</div>
//  <div class="nextDayDetails pt-3 d-flex justify-content-center flex-column align-items-center">
//      <div class="image"><img id="nextDayImage" src="" alt=""></div>
//     <div class=" d-flex "> <h3 class="" id="maxDegree">20 </h3><h3><sup>O</sup>C</h3></div>
//     <div><h4 id="minDegree">34</h4><h4><sup>o</sup>C</h4></div>
//     <div><p id="nextDayState">sunny</p></div>
//  </div>
// </div>
// </div>

//     `
// }
// document.getElementById
// }
   //     for(var i=0 ; i<nextDay.length ; i++)
    //     {
    //        nextDay[i].innerHTML = days[new Date(result.forecast.forecastday[i+1].date).getDay()];
    //        maxDegree[i].innerHTML = result.forecast.forecastday[i+1].day.maxtemp_c;
    //        nextDayIcon[i].setAttribute('src' , `https:${result.forecast.forecastday[i+1].day.condition.icon}`);
    //        minDegree[i].innerHTML = result.forecast.forecastday[i+1].day.mintemp_c;
    //        nextDayDescription[i].innerHTML = result.forecast.forecastday[i+1].day.condition.text
    //     }
    //   }
}