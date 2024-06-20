let editm = false;
const alarms=[]
const popup = document.getElementById("popup");
const textin = document.getElementById("textin");
const timein = document.getElementById("timein");
let confirmed = false;
function openPopup(name="alarm",time="00:00"){
  editm ? edit() : 0;
  confirmed = false;
  timein.value = time;
  textin.value = name;
  popup.style.display = "block";
}

function add(){
  let hour = timein.value.slice(0,2);
  if (hour == null || hour == "" || isNaN(Number(hour))) {return}
  let min = timein.value.slice(3);
  if (min == null || min == "" || isNaN(Number(min))) {return}
  let name = textin.value;
  if (name == null || name == "" ) {return}
  addAlarm([Number(hour),Number(min)],name)
  popup.style.display = "none";
}

function addAlarm(time,name){
  alarm = document.createElement("div");
  alarm.time = time;
  hour = String(time[0]);
  min = String(time[1]);
  alarm.ftime=`${"0".repeat(2 - hour.length)}${hour}:${"0".repeat(2 - min.length)}${min}`
  alarm.name = name;
  alarms.push(alarm);
  alarm.classList.add("alarm");
  alarm.atime=document.createElement("h1");
  alarm.atime.innerHTML=alarm.ftime;
  aname=document.createElement("p");
  aname.innerHTML=alarm.name;
  del=document.createElement("p");
  del.innerHTML="<span id='delete'>DELETE</span>&nbsp;·&nbsp;<span id='edit'>EDIT</span>";
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
  if (alarms.length == 1){
    document.getElementById("placeholder").style.display = "None";
  }
}

function edit(){
  editm = !editm;
  editm ? document.getElementById("edit").innerHTML = "Cancel" : document.getElementById("edit").innerHTML = "Edit";
  editm ? document.getElementById("container").classList.add("e") : document.getElementById("container").classList.remove("e");
}

function clickFunc(evt){
  console.log(evt)
  if (editm) {
    if (evt.target.id == "delete"){
      index = alarms.indexOf(evt.target.parentElement.parentElement);
      if (index > -1) {
        alarms.splice(index, 1);
      }
      evt.target.parentElement.parentElement.remove();
      if (alarms.length == 0){
        document.getElementById("placeholder").style.display = "Block";
      }
      return
    } else if(evt.target.id == "edit"){
      edit();
      openPopup(evt.target.parentElement.parentElement.name,evt.target.parentElement.parentElement.ftime);
      index = alarms.indexOf(evt.target.parentElement.parentElement);
      if (index > -1) {
        alarms.splice(index, 1);
      }
      evt.target.parentElement.parentElement.remove();
      if (alarms.length == 0){
        document.getElementById("placeholder").style.display = "Block";
      }
    }
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