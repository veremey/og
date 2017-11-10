


function openTab(name) {

    var i, tabcontent, tablinks;
    var moveToId = name.getAttribute('data-tab');
    var moveTo = document.getElementById(moveToId);

    tabcontent = document.getElementsByClassName("navigation__item");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('is-active');
    }
    name.classList.add('is-active');
    // -
    tablinks = document.getElementsByClassName("main__content");

    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('is-active');
    }
    moveTo.classList.add('is-active');

}




//# sourceMappingURL=main.js.map
