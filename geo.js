
//emperor penguin
let PenguinLat = 40.693306781163635;
let PenguinLong = -73.98756837816525;
let nearby = false;
//1 unit is 365,221 ft
//.0001 is approx 36.5 ft


function openServices() {
    if ( 'geolocation' in navigator) {
        console.log(navigator);
        console.log ( 'geolocation available');
        //console.log(navigator.geolocation.getCurrentPosition);
        //navigator geolocation getcurrentposition takes a callback function as an argument (provides coords when they are available )
        navigator.geolocation.getCurrentPosition(function(e) {

        let latDiff = Math.abs(e.coords.latitude - PenguinLat);
        let lonDiff = Math.abs(e.coords.longitude - PenguinLong);

        let distance = Math.sqrt(
            (latDiff * 111000) ** 2 +
            (lonDiff * 85000) ** 2
        );

            // myLocation.innerHTML = "you're here: " + e.coords.latitude + ", " + e.coords.longitude;
        console.log("location:", e.coords.latitude, e.coords.longitude);
        if (Math.abs(e.coords.latitude - PenguinLat) < 0.0001 && Math.abs(e.coords.longitude - PenguinLong) < 0.0001) {
            myLocation.innerHTML = "The penguin is nearby!! Look around 👀"  ;
            nearby = true;     
            }
        else {
            myLocation.innerHTML = "Keep looking"
            myLocation.innerHTML += ", you are this far away: " + distance +" meters";
            nearby = false;
            }
        });    
        
    }
};

function showPenguin(){
    if (nearby == false){
        myLocation.innerHTML = "You are not close enough! Keep looking for the penguin!";
        return;
    }else if(nearby == true){
    document.getElementById("penguinProfile").style.display = "block";
    document.getElementById("canva").querySelector("h1").style.display = "none";
    document.getElementById("location").style.display = "none";
    document.getElementById("found").style.display = "none";
    let audio = document.getElementById("penguinAudio")
    audio.volume = 0.3;
    audio.play();
    }
}

// function checkLocation () {
//   if ( 'geolocation' in navigator) {
//   console.log(navigator);
//   console.log ( 'geolocation available');
//   console.log(navigator.geolocation.getCurrentPosition);
    
//     //navigator geolocation getcurrentposition takes a callback function as an argument (provides coords when they are available )
//   navigator.geolocation.getCurrentPosition(function(e) {
//     console.log(e);
//     renderLoc(e.coords.latitude, e.coords.longitude);
//   }
                                          
//   );

//   } else {
//   console.log ('geolocation not available');
//   }

//   function renderLoc (lat, lon) {
//     if (Math.abs(lat - tommyLat) < .001 && Math.abs(lon - tommyLong) < .001 ) {
//       console.log('youre there');
//       infoField.innerHTML = "you're there 🌎"
//       soundy.play();
//     }
//     else {
//       console.log('nope not there');
//       infoField.innerHTML = "nope not there 👎🏼"
//     }
    
//     //second site
    
//     if (Math.abs(lat - eltonsLat) < .001 && Math.abs(lon - eltonsLong) < .001 ) {
//       console.log('youre there');
//       infoField.innerHTML = "you're there 🌎"
//       soundy.play();
//     }
//     else if (Math.abs(lat - eltonsLat) < .001 && Math.abs(lon - tommyLong)) {
             
             
//       console.log('nope not there');
//       infoField.innerHTML = "nope not there 👎🏼"
//     }
//   }

// }