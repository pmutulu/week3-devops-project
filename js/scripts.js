/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Portifolio Editor
$(document).ready(function () {
    $("button#designContent").click(function () {
        $("#showParagraph").prepend("<p>Throughout your project, our designers create and implement visual design and workflows, solicit user feedback and work with you to make sure what gets built is what isneeded.</p>");
        $("#showParagraph").prepend("<p>Our design practise offers a full range of services including brand strategy, interaction and visual design and user experience testing.</p>");
    });
    $("button#devContent").click(function () {
        $("#showDevParagraph").prepend("<p>They collaborate with your team to write, and improve code on a daily basis,using proven practices such as test-driven development and pair programming.</p>");
        $("#showDevParagraph").prepend("<p>All engineers are fluent in the latest enterprise, mobile and web development technologies.</p>");
    });
    $("button#prodContent").click(function () {
        $("#showProdParagraph").prepend("<p>This iterative process allows for changes as business requirement evolve.</p>");
        $("#showProdParagraph").prepend("<p>Planning and development is iterative. Because we are constantly coding and testing, the products we build are always ready to go live..</p>");
    });
});
