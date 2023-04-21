allReadyPlayed = false
let about = document.querySelector("#about")

function delay(time) {

    setTimeout(() => {
        allReadyPlayed = true
        document.body.style = 'overflow:auto';
    }, time);
}

const hero = document.querySelector(".heroBackground");

window.addEventListener("scroll", function () {
    let positionYabout = document
        .querySelector("#about")
        .getBoundingClientRect();

    let positionYfooter = document
        .querySelector("#footer")
        .getBoundingClientRect();




    let offset = window.pageYOffset;
    let viewport_height = window.innerHeight;
    hero.style.backgroundPositionY = offset * 0.7 + "px";

    if (positionYabout.y <= viewport_height / 2) {
        document.querySelector('#aboutTitle').classList.add("show")
        document.querySelector('.col-left p').classList.add("show")
    }

    if ((positionYabout.y + positionYabout.height) <= 0) {
        document.querySelector('#productionTitle').style.display = "block"
        about.style = 'top:0'


        if (allReadyPlayed == false) {
            document.body.style = 'overflow:hidden';
            delay(2000)
        } else {
            document.body.style = 'overflow:auto; overflow-x: hidden;';
        }

    }

    if (positionYfooter.y <= viewport_height) {
        document.querySelector('#footerTitle').classList.add("show")
        document.querySelector('#footer .col-left p').classList.add("show")
    }



});

(function () {
    init();

    var g_containerInViewport;

    function init() {
        setStickyContainersSize();
        bindEvents();
    }

    function bindEvents() {
        window.addEventListener("wheel", wheelHandler);
    }

    function setStickyContainersSize() {
        document.querySelectorAll('.sticky-container').forEach(function (container) {
            const stikyContainerHeight = container.querySelector('main').scrollWidth;
            container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
    }

    function wheelHandler(evt) {

        const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
            return isElementInViewport(container);
        })[0];

        if (!containerInViewPort) {
            return;
        }

        var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
        var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
        let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

        if (g_canScrollHorizontally) {
            containerInViewPort.querySelector('main').scrollLeft += evt.deltaY;
        }
    }
})();


/***********
 * SWIPPER *
 ***********/
