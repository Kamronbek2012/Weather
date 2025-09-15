let tem = document.getElementById('tem')
let inp = document.getElementById('inp')
let btn = document.getElementById('btn')
let cities = document.getElementById('cities')
let clouds = document.getElementById('clouds')
let card = document.querySelector('.card')
let lod = document.querySelector('.lod')
let loader = document.querySelector('.loader')



btn.addEventListener('click',()=>{
    let city = inp.value;


let request = new XMLHttpRequest()
request.addEventListener('readystatechange', ()=>{

    lod.classList.remove('hidden')
    loader.classList.remove('hidden')



if(request.readyState ==  4){
    console.log(request.responseText)

    let data = JSON.parse(request.responseText)
    
    let temprature = data.main.temp
    let cityName = data.name;
    let cloud = data.weather[0].despcription

    clouds.textContent = cloud
    cities.textContent = cityName
    tem.textContent = `${Math.floor(temprature)} °C`
    lod.classList.add('hidden')
    loader.classList.add('hidden')


}
card.classList.remove('hidden')


})



request.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8381bde3b01a162ed81d52c0f43bb07d&units=metric`)

request.send()
})

