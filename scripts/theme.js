var icon = document.getElementById("icon");
var logo = document.getElementById("logo");
var bt = document.getElementById("bt");

icon.onclick = changeTheme;
function changeTheme() {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        icon.src = "https://media.giphy.com/media/L08sJsg6tEUyb1E0VW/giphy.gif";
        logo.src = "images/ar.jpg";
        gim.src = "https://media.giphy.com/media/cOJbD5FJCMRbFJdjSe/giphy.gif";
        bt.className = "btn btn-warning btn-lg";
    } else {
        icon.src = "https://media.giphy.com/media/lIeUAWuLK7cv6/giphy.gif";
        logo.src = "images/ar.jpeg";
        gim.src = "https://media.giphy.com/media/VGWI4HVCz0acaIriBU/giphy.gif"; // https://media.giphy.com/media/pXLA2gtoUdPdPeVZu5/giphy.gif
        bt.className = "btn btn-outline-warning btn-lg";
    }    
}