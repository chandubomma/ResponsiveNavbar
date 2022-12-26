function showmenu(){
   let navcon = document.getElementById("nc");
   navcon.style.top="70px";
   document.getElementById("menu").style.display="none";
   let close = document.getElementById("close");
   close.style.display="block";
}

function hidemenu(){
    let navcon = document.getElementById("nc");
    navcon.style.top="-1000px";
    document.getElementById("menu").style.display="block";
    let close = document.getElementById("close");
    close.style.display="none";
}

