$(document).ready(function(){
    var delayInMilliseconds = 2000; //1 second

    setTimeout(function() {
      // create constants
      const heading = document.getElementById("heading")

      heading.style.visibility = "visible";
    }, delayInMilliseconds);
    
    // downloads curriculum vitae
    $("#cv-btn").click(function (e) {
      e.preventDefault();
      window.location.href = "resources/CHRISTIAN_GEALONE_Resume.pdf";
    });
    
    var toggleStatus = 0;

    // show or hide nav links when menu button is clicked
    $('#menu-button').click(function(){

        // create constants
        const menu_icon = document.getElementById("menu-icon")
        const nav_link = document.getElementById("nav-links");

        if (toggleStatus == 0) {
            // change menu icon to close
            menu_icon.src="https://img.icons8.com/ios/35/000000/delete-sign--v1.png";    

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
            $("#nav-links").hide("slow");
            
            // change toggle status to 1
            toggleStatus = 0;
        }
      });  

      // hides 
      $('#home-link, #myCarousel, #about-link, #contact-link').click(function(){
        if (toggleStatus == 1) {
          // create constants
          const menu_icon = document.getElementById("menu-icon")
          
          // change close icon to menu
          menu_icon.src="https://img.icons8.com/ios-glyphs/35/000000/menu--v1.png";
              
          // use toggle to show/hide the div
          $("#nav-links").hide("slow");
          
          // change toggle status to 1
          toggleStatus = 0;
        } 
      });  
      
      // see more or see less function 
      $('#hms-toggle-more, #sg-toggle-more, #jbb-toggle-more').click(function(){
        if ($(this).text() == "See more...") {
          // use toggle to show/hide the div
          $(this).siblings(".toggle-close").toggle("slow");   
          $(this).text("See less...");
        } else {
          // use toggle to show/hide the div
          $(this).siblings(".toggle-close").toggle("slow");  
          $(this).text("See more...");
        }
      });  
});
