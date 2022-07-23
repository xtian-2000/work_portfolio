/*
var toggleStatus = 0;

function menu_func() {
    if (toggleStatus == 0) {
        // constants
        const nav = document.getElementById("nav");
        const nav_link = document.getElementById("nav-link");

        // change menu icon from hamburger menu to close
        document.getElementById("menu-icon").src="https://img.icons8.com/ios/35/000000/delete-sign--v1.png";

        // change display of nav from flex to grid
        nav.style.display = "grid";
        nav.style.gridTemplateColumns = "auto auto";

        // show nav-link
        nav_link.style.display = "grid";
        nav_link.style.gridColumn = "1 / span 2";
        nav_link.style.gridRow = "2";
        nav_link.style.padding = "10px";

        // Change toggleStatus
        toggleStatus = 1;

    } else if (toggleStatus == 1) {
        // change display of nav from grid to flex
        //nav.style.display = "flex";

        // hide nav-link
        document.getElementById("nav-link").style.display = "flex";

        // change menu icon from hamburger menu to close
        document.getElementById("menu-icon").src="https://img.icons8.com/ios-glyphs/35/000000/menu--v1.png";

        // Change toggleStatus
        toggleStatus = 0;
    }
}*/


$(document).ready(function(){

    var toggleStatus = 0;

    $('#menu-button').click(function(){

        // create constants
        const menu_icon = document.getElementById("menu-icon")
        const nav_link = document.getElementById("nav-link");

        if (toggleStatus == 0) {
            // change menu icon to close
            menu_icon.src="https://img.icons8.com/ios/35/000000/delete-sign--v1.png";

            // use toggle to show/hide the div
            //$("#nav-link").toggle();
            // show nav-link

            nav_link.style.display = "grid";
            nav_link.style.gridColumn = "1 / span 2";
            nav_link.style.gridRow = "2";
            nav_link.style.padding = "10px";


            // change toggle status to 1
            toggleStatus = 1;

        } else if (toggleStatus == 1) {
            // change close icon to menu
            menu_icon.src="https://img.icons8.com/ios-glyphs/35/000000/menu--v1.png";
            
            // use toggle to show/hide the div
            $("#nav-link").hide();
            
            // change toggle status to 1
            toggleStatus = 0;
        }
      });  

      $('#home-link, #about-link, #contact-link').click(function(){

        // create constants
        const menu_icon = document.getElementById("menu-icon")
        
        // change close icon to menu
        menu_icon.src="https://img.icons8.com/ios-glyphs/35/000000/menu--v1.png";
            
        // use toggle to show/hide the div
        $("#nav-link").hide();
        
        // change toggle status to 1
        toggleStatus = 0;
      });  
});
