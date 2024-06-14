const lwabs = 'abcdefghijklmnopqrstuvwxyz';
const ucabs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbs = "0123456789";
const symbs = "!@#$%^&*(){}[]";

function copy(){
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied text!");
};
function generate(){
  let pass = "";
  let len = Number(document.getElementById("length").value);
  let ini = document.getElementById("initText").value;
  let upc = document.getElementById("uppercase").checked;
  let lwc = document.getElementById("lowercase").checked;
  let num = document.getElementById("number").checked;
  let sym = document.getElementById("symbol").checked;
  let gen = "";
  let disp = "X".repeat(len);
  pass+=ini;
  if (upc) {gen+=ucabs}
  if (lwc) {gen+=lwabs}
  if (num) {gen+=numbs}
  if (sym) {gen+=symbs}
  for(let i=0; i<Math.max(0,len-ini.length);i++){
    pass+=gen[Math.floor(Math.random()*gen.length)]
  }
  for (let i = 0; i < len; i++) {
    setTimeout(function() {
      disp=disp.substring(0,i) + pass[i] + disp.substring(i+1);
      document.getElementById("output").value=disp;
    }, i * 50);
  }
}