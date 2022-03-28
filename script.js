
 function searchShow(pincode) {




    const url = "http://api.openweathermap.org/data/2.5/weather?zip=" + pincode + ",in&unit=metric&appid=ba4c9707c4a371424964aff04871ef28";

    fetch(url)


        .then(response => response.json())
        .then((data) => {

            document.getElementById("dt_cloudy").innerHTML = data.clouds.all + "%";
            document.getElementById("dt_humidity").innerHTML = data.main.humidity + "%";
            document.getElementById("dt_wind").innerHTML = data.wind.speed + "km/h";
            document.getElementById("dt_temp").innerHTML = data.main.temp_max + "K";
            document.getElementById("dt_timezone").innerHTML = data.timezone + "🕒";
            document.getElementById("dt_name").innerHTML = data.name;
            document.getElementById("dt_country").innerHTML = data.sys.country;

            document.getElementById("submit-btn").addEventListener("click", function(event){
                event.preventDefault()
              });


        });



}






window.onclick = () => {

    const searchFieldElement = document.getElementById("searchField");
    searchFieldElement.onkeyup = () => {
        searchShow(searchFieldElement.value);
    };
    
}








