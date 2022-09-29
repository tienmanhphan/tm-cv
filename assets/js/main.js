// menu button mobile
var menuBtnMobile = document.querySelector('.mobile-nav button')
var menuNavMobile = document.querySelector('.mobile-nav')
var menuItemMobile = document.querySelectorAll('.mobile-nav .mobile-nav-item')
menuBtnMobile.onclick = function () {
    menuNavMobile.classList.toggle('active')
}
menuItemMobile.forEach(li => {
    li.onclick = function () {
        menuNavMobile.classList.remove('active')
    }
});
// button submit CSS
var SubmitBtn = document.querySelector('#submit-btn')
SubmitBtn.onclick = function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    // ripples.style.left = x + "px";
    // ripples.style.top = y + "px";
    SubmitBtn.appendChild(ripples);
    setTimeout(() => {
        ripples.remove()
    }, 1000)
}

// sidebar active menu handle
$(document).ready(function () {
    var navElement = $('.nav a')

    $(window).scroll(function (event) {


        var positionScroll = $('html,body').scrollTop();
        for (let i = 0; i < navElement.length; i++) {
            navElement[i].classList.remove('active');
        }
        if (positionScroll >= 0 && positionScroll < 722) {

            navElement[0].classList.add("active");

        }

        if (positionScroll > 722 && positionScroll < 1300) {

            navElement[1].classList.add("active");

        }

        if (positionScroll > 1300 && positionScroll < 1807) {

            navElement[2].classList.add("active");

        }

        if (positionScroll > 1807 && positionScroll < 2400) {
            navElement[3].classList.add("active");


        }
        if (positionScroll > 2400) {
            navElement[4].classList.add("active");


        }

    })


})

