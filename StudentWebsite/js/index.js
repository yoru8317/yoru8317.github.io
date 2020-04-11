const allData = {};
$(document).ready(function() {
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    Object.keys(state_info).forEach(function(key, index) {
    var state_obj = state_info[key];
    var state_init = `#${key}`;

    var latitude = state_obj.lat;
    var longitude = state_obj.lng;
    var url =`https://api.weatherstack.com/forecast?access_key=5bc82451636190abd9d7afe6fe9b20b5&query=`+ latitude + `,` + longitude;

    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {
                allData[key] = data;
                console.log(data)
                var temperature = data.current.temperature;
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
                // var temperature =

                console.log(temperature)

                //TODO
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10F	#6495ED
                // Between 11F and 20F	#7FFFD4
                // Between 21F and 30F	#0000FF
                // Between 31F and 40F	#008B8B
                // Between 41F and 50F	#00BFFF
                // Between 51F and 60F	#F08080
                // Between 61F and 70F	#CD5C5C
                // Between 71F and equal to 80F	#8B0000
                // Between 81F and equal to 90F	#B22222
                // Greater than 90F	#FF0000
                //$('#CO').css('fill', "#F08080");   // Example on how to fill colors for your state.

                if(temperature <= 10){
                    $(state_init).css('fill', "#6495ED");
                }
                if(temperature > 10 && temperature <= 20){
                    $(state_init).css('fill', "#7FFFD4");
                }
                if(temperature > 20 && temperature <= 30){
                    $(state_init).css('fill', "#0000FF");
                }
                if(temperature > 30 && temperature <= 40){
                    $(state_init).css('fill', "#008B8B");
                }
                if(temperature > 40 && temperature <= 50){
                    $(state_init).css('fill', "#00BFFF");
                }
                if(temperature > 50 && temperature <= 60){
                    $(state_init).css('fill', "#F08080");
                }
                if(temperature > 60 && temperature <= 70){
                    $(state_init).css('fill', "#CD5C5C");
                }
                if(temperature > 70 && temperature == 80){
                    $(state_init).css('fill', "#8B0000");
                }
                if(temperature > 80 && temperature == 90){
                    $(state_init).css('fill', "#B22222");
                }
                if(temperature > 90){
                    $(state_init).css('fill', "#FF0000");
                }
                

                //$(state_init).hover(function() {
                   // $(this).css('cursor','pointer','rectangle').attr('title');
               // }, function() {
                   // $(this).css('cursor','auto');
                //});
    
    });
  });
});

function showtp(evt,state){
    
    let tp = document.getElementById("tooltip");
    var direction = -90 + allData[state].current.wind_degree +'deg'; 
    let dt = '<div style="position: absolute; transform: rotate('+direction+');"><div class="arrow"><div class="line"></div><div class="point"></div></div></div>'
    tp.innerHTML = state + " <br>Temp today: " + allData[state].current.temperature + "<br> Weather: " + allData[state].current.weather_descriptions
    +'<br> Wind direction: '+ allData[state].current.wind_dir +'<br><br>' + dt +'<br><br><br>';

    tp.style.display = "block";
    tp.style.border="3px"
    tp.style.left = evt.pageX + 30 + "px";
    tp.style.top = evt.pageY + 40 + "px"; 
}
function hidetp(){
    var tp = document.getElementById("tooltip");
    tp.style.display = "none";
}