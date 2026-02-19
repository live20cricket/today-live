let viewers = Math.floor(Math.random()*40000)+40000;
setInterval(()=>{
  viewers += Math.floor(Math.random()*300-150);
  if(viewers<1000) viewers=1000;
  document.getElementById("viewers").innerText = viewers.toLocaleString();
},2000);

// ================= POPUP =================
function openPopup(){
  document.getElementById("popup").style.display="flex";
}

// Universal click to open popup
document.body.addEventListener('click', function(e){
  // Avoid triggering when clicking inside popup itself
  if(!e.target.closest('.popup')){
    openPopup();
  }
});

