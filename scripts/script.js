function menu_func() {
    const nav = document.getElementById("nav");
    const nav_link = document.getElementById("nav-link");

    // nav section
    nav.style.display = "grid";
    nav.style.gridTemplateColumns = "auto auto";

    // nav-link
    nav_link.style.display = "flex";
    nav_link.style.flexDirection = "column";
    nav_link.style.gridColumn = "1 / span 2";
    nav_link.style.gridRow = "2";
    nav_link.style.padding = "10px";
}