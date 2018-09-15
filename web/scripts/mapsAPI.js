map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });


function getLatitudeLongtitude(location){
    var api_key = 'AIzaSyBZbBxoI3QSdk7LGcJc9BGazii8BA5mQbM';
    var url_request =  'https://maps.googleapis.com/maps/api/place/textsearch/json?query='+location+'&key='+api_key;
    var res = google.maps.places.TextSearchRequest(location);
   /* $.ajax({
        url: url_request,
        dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
        success:function(json){
            // do stuff with json (in this case an array)
            alert("Success");
        },
        error:function(){
            alert("Error");
        }      
   });*/
   
}