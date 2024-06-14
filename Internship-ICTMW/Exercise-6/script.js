const elevatorMusic = new Audio("elevator.mp3");
const ding = new Audio("ding.mp3");
const timePerFloor = 5000;

let floor = 1;
let moving = false;

function elevator(level){
  if(moving){return}
  moving=true
  //firstly, check if the level is the same as the current level
  if (level===floor){return}
  //Else, check time to floor, and if the floor is higher or lower
  document.getElementById(String(level)).style["border-color"] = "red";
  let floorDif = level - floor;
  let timeToFloor = timePerFloor * Math.abs(floorDif)
  console.log(floorDif)
  //Activate the correcdt side light
  if (floorDif < 0){
    document.getElementById("left").classList.add("active");
  } else {
    document.getElementById("right").classList.add("active");
  }
  //start elevator music
  elevatorMusic.play();
  //Add floor logic
  if (floorDif > 0) { //Going up in the world
    floor--;
    for (let i = 0; i<=floorDif; i++) {
      console.log(floor)
      setTimeout(function() {
        floor++;
        if (floor === 10){
          document.getElementById("d1").innerHTML = "1";
          document.getElementById("d2").innerHTML = "0";
        } else {
          document.getElementById("d1").innerHTML = "";
          document.getElementById("d2").innerHTML = String(floor);
        }
        if (floor===level){
          elevatorMusic.pause();
          elevatorMusic.currentTime = 0;
          ding.play();
          document.getElementById("left").classList.remove("active");
          document.getElementById("right").classList.remove("active");
          document.getElementById(String(level)).style["border-color"] = "black";
          moving=false;
          return;
        }
      }, i * timePerFloor);
    }
  } else { //Going down
    floor++;
    for (let i = 0; i>=floorDif; i--) {
      console.log(floor)
      setTimeout(function() {
        floor--;
        if (floor === 10){
          document.getElementById("d1").innerHTML = "1";
          document.getElementById("d2").innerHTML = "0";
        } else {
          document.getElementById("d1").innerHTML = "";
          document.getElementById("d2").innerHTML = String(floor);
        }
        if (floor===level){
          elevatorMusic.pause();
          elevatorMusic.currentTime = 0;
          ding.play();
          document.getElementById("left").classList.remove("active");
          document.getElementById("right").classList.remove("active");
          document.getElementById(String(level)).style["border-color"] = "black";
          moving=false;
          return;
        }
      }, -i * timePerFloor);
    }
  }
}