const cityname=document.getElementById("cityName");
const submitbtn= document.getElementById("submitbtn");
const city_name= document.getElementById("city_name");
const temp_real= document.getElementById("temp_real");
const temp_status= document.getElementById("temp_status");
const dataHide= document.querySelector(".middle_layer");
const getInfo= async(event)=> {
    event.preventDefault();
    alert('hi');
    let cityval= cityname.value;
    if(cityval=== ""){
        city_name.innerText ="PLZ write the name before search";
        dataHide.classList.add("data_hide");
    }
    else
    {
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=3d2b1a60441faa67f4161ecb5207c7d0`;
            const response = await fetch(url);
            const data= await response.json();
            const arrData= [data];
            city_name.innerText=`${arrData[0].name} , ${arrData[0].sys.country}`;
            // console.log(arrData[0].main.temp);
            temp_real.innerText=arrData[0].main.temp;
            temp_status.innerText=arrData[0].weather[0].main;
            const tempMood= arrData[0].weather[0].main;
            if(tempMood =="Clear")
            {
                temp_status.innerHTML =
                "<i class= 'fas fa-sun' style= 'color: #eccc68;'></i>";
            }
                else if(tempMood== "Clouds")
                {
                    temp_status.innerHTML =
                "<i class= 'fas fa-cloud' style= 'color: #f1f2f6;'></i>";
                }
                else if(tempMood== "Rain")
                {
                    temp_status.innerHTML =
                "<i class= 'fas fa-rain' style= 'color: #a4v0be;'></i>";
                }
                else 
                {
                    temp_status.innerHTML =
                    "<i class= 'fas fa-sun' style= 'color: #eccc68;'></i>";
                }
                dataHide.classList.remove("data_hide");
        }
        catch{
            city_name.innerText=`Plz enter the city name properly`;
            dataHide.classList.add("data_hide");
        }

    }
}

submitbtn.addEventListener('click', getInfo);