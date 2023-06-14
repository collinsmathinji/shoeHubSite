    const search = function () {
    const searchbox = document.getElementById("input").value.toUpperCase();
    const storeitems = document.getElementById("product");
    const product = document.querySelectorAll("#all");
    const pname = storeitems.getElementsByTagName("h2");
  
    for (var i = 0; i < pname.length; i++) {
      let match = product[i].getElementsByTagName("h2")[0];
  
      if (match) {
        let textvalue = match.textContent || match.innerHTML;
  
        if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
          product[i].style.display = "";
        } else {
          product[i].style.display = "none";
        }
      }
    }
  };

let contacts=document.querySelector(".contacts1")
let anchors=document.querySelector(".anchors")
contacts.addEventListener("click",function(){
  if(anchors.style.display==="none"){
    anchors.style.display="block";}
  else{
    anchors.style.display="none";
  }
})
let ham=document.querySelector(".hamburger")
let menu=document.querySelector(".menu")
ham.addEventListener("click",function(){
  if(menu.style.display==="none"){
    menu.style.display=""
  }else{
    menu.style.display="block"
  }
})
  