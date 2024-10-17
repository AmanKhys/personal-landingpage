
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function() {
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
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// form validation

function validateForm() {
    isValid = true;
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const name = document.getElementById("name").value.trim();

    let validEmail = /^[a-zA-Z]{1,}[a-zA-Z0-9]*@[a-zA-Z]{1,}\.[a-zA-Z]{1,}$/;
    let validName = /^[a-zA-Z]{1,0}$/;

    if (!validEmail.test(email)) {
        document.getElementById('emailError').textContent = 'enter a valid mail';
        isValid = false;
    }
    if (number < 1000000000 && number >= 10000000000) {
        document.getElementById('numberError').textContent = 'enter a 10 digit number';
        isValid = false;
    }
    if (!validName.test(name)) {
        document.getElementById("nameError").textContent = 'enter a valid name';
        isValid = false;
    }

    return isValid;
}
