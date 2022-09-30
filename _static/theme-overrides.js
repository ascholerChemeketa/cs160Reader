document.addEventListener('DOMContentLoaded', function() {
    let logos = document.getElementsByClassName("brand-logo");
    let logo = logos[0];

    let brands = document.getElementsByClassName("navbar-brand");
    let brand = brands[0];

    brand.setAttribute('title', brand.innerHTML);
    brand.innerHTML = "Contents";

    logo.href = brand.href;
});