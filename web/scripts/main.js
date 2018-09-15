function insert_meetup(name, lat, lon, location, startdate, starttime, endtime){
    var j = {
        'name':name,
        'latitude':lat,
        'longitude':lon,
        'location':location,
        'start_date': startdate,
        'start_time': starttime,
        'end_time' : endtime
    }
    return firebase.database().ref('/meetup/').push(j).catch(function(error) {
        console.error('Error writing new meetup to Firebase Database', error);
      });
}