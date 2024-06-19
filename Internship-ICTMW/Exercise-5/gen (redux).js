const lwabs = 'abcdefghijklmnopqrstuvwxyz';
const ucabs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbs = "0123456789";
const symbs = "!@#$%^&*(){}[]";
const cyrls = "абвгдеёжзийклмнопрстуфхцчшщ";
let cys = false;
let pass = "";
var generating = false;
function copy(){
  var copyText = document.getElementById("output");
  var copyBtn = document.getElementById("cpbtn");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  copyBtn.innerHTML = "✔️"
  setTimeout(function(){
    copyBtn.innerHTML = "📋"
  }, 1000);
};
function generate(){
  if (generating == false){
    generating = true;
    let len = Number(document.getElementById("length").value);
    let ini = document.getElementById("initText").value;
    let upc = document.getElementById("uppercase").checked;
    let lwc = document.getElementById("lowercase").checked;
    let num = document.getElementById("number").checked;
    let sym = document.getElementById("symbol").checked;
    let gen = "";
    let disp;
    pass == "" ? disp = " ".repeat(len) : disp = pass.slice(0,len);
    if (upc) {gen+=ucabs}
    if (lwc) {gen+=lwabs}
    if (num) {gen+=numbs}
    if (sym) {gen+=symbs}
    if (cys) {gen+=cyrls}
    pass = ini.slice(0,len);
    for(let i=0; i<Math.max(0,len-ini.length);i++){
      pass+=gen[Math.floor(Math.random()*gen.length)]
    }
    for (let i = 0; i < len; i++) {
      setTimeout(function() {
        disp=disp.substring(0,i) + pass[i] + disp.substring(i+1);
        document.getElementById("output").value=disp;
      }, i * (40/len));
    }
    setTimeout(()=>{generating = false;},len*(40/len))
  }
}