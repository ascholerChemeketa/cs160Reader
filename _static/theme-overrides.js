document.addEventListener('DOMContentLoaded', function() {
    let logo;
    let logos = document.getElementsByClassName("brand-logo");
    if(logos)
        logo = logos[0];

    let brands = document.getElementsByClassName("navbar-brand");
    if(brands) {
        let brand = brands[0];
        brand.setAttribute('title', brand.innerHTML);
        brand.innerHTML = "Contents";

        if(logo !== undefined) {
            logo.href = brand.href;
        }
    }

    
    let warning = document.querySelector("#browser_warning");
    if(warning)
        warning.classList.add("red");
});