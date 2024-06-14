sections = document.getElementsByClassName("section")

function toggleSection(section){
  if (section.getElementsByTagName('ul')[0].classList.contains("active")){
    section.getElementsByTagName('ul')[0].classList.remove("active")
    section.getElementsByTagName('i')[0].classList.remove("fa-caret-down");
    section.getElementsByTagName('i')[0].classList.add("fa-caret-right");
  } else {
    section.getElementsByTagName('ul')[0].classList.add("active")
    section.getElementsByTagName('i')[0].classList.add("fa-caret-down");
    section.getElementsByTagName('i')[0].classList.remove("fa-caret-right");
  }
}