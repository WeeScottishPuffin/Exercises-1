let editm = false;
const alarms=[]

function add(){
  editm ? edit() : 0;
  let hour = prompt("Hour?", "0");
  if (hour == null || hour == "" || isNaN(Number(hour))) {return}
  let min = prompt("Minute?", "0");
  if (min == null || min == "" || isNaN(Number(min))) {return}
  let name = prompt("Name?", "Alarm");
  if (name == null || name == "" ) {return}
  console.log(hour)
  addAlarm([Number(hour),Number(min)],name)
}

function addAlarm(time,name){
  alarm = document.createElement("div");
  alarm.time = time;
  alarm.ftime=time[0] + ":" + ("0"+time[1]).slice(-2);
  alarm.name = name;
  alarms.push(alarm);
  alarm.classList.add("alarm");
  alarm.atime=document.createElement("h1");
  alarm.atime.innerHTML=alarm.ftime;
  aname=document.createElement("p");
  aname.innerHTML=alarm.name;
  del=document.createElement("p");
  del.innerHTML="DELETE";
  del.classList.add("del")
  document.getElementById("container").appendChild(alarm);
  sw=document.createElement("label");
  sw.classList.add("switch");
  inp=document.createElement("input");
  inp.type="checkbox"
  inp.checked = true;
  sp=document.createElement("span");
  sp.classList.add("slider");
  alarm.appendChild(alarm.atime);
  alarm.appendChild(aname);
  alarm.appendChild(del);
  alarm.appendChild(sw);
  sw.appendChild(inp);
  sw.appendChild(sp);
  alarm.addEventListener("click", clickFunc);
}

function edit(){
  editm = !editm;
  editm ? document.getElementById("edit").innerHTML = "Cancel" : document.getElementById("edit").innerHTML = "Edit";
  editm ? document.getElementById("container").classList.add("e") : document.getElementById("container").classList.remove("e");
}

function clickFunc(evt){
  console.log(evt)
  if (editm) {
    if (evt.target.classList.contains("del")){
      evt.target.parentElement.remove();
      return
    }
    edit()
    let hour = prompt("Hour?", "0");
    if (hour == null || hour == "") {return}
    let min = prompt("Minute?", "0");
    if (min == null || min == "") {return}
    evt.target.parentElement.time=[Number(hour),Number(min)]
    evt.target.parentElement.atime.innerHTML=Number(hour) + ":" + ("0"+Number(min)).slice(-2);
  }
}
function updateTime(){
  alarms.forEach((alarm)=>{
    let date = new Date();
    if (date.getHours() === alarm.time[0] && date.getMinutes() === alarm.time[1] && alarm.children[3].firstChild.checked){
      alarm.children[3].firstChild.checked = false;
      alert("Beep boop")
    }
  })
}
setInterval(updateTime, 500);