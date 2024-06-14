function update(){
  let upc = document.getElementById("uppercase").checked;
  let lwc = document.getElementById("lowercase").checked;
  let num = document.getElementById("number").checked;
  let sym = document.getElementById("symbol").checked;

  if(upc || lwc || num || sym){
    document.getElementById("generator").disabled = false;
  } else {
    document.getElementById("generator").disabled = true;
  }
}