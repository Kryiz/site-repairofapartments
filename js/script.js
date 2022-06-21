'use strict';

//====================== Calc
let form = document.forms.Sum
form.onchange = () => {
    let arr = [...form.querySelectorAll('.js-calc:checked')].map(e => +e.dataset.price),
        total = arr.length ? arr.reduce((acc, e) => acc += e) : 0,
        range = document.getElementById('headerRange').value,
        sum = 0;
    sum += +total + +(range * 200);

    document.getElementById('result').innerHTML = `<span>${sum} р.</span>`
}

//====================== fill and result Range
function fillRange() {
    var fillAtRange = document.getElementById('headerRange');
    var outputRange = document.getElementById('myRange');
    outputRange.innerHTML = fillAtRange.value;
}

//===================== #Exemples Tabs
class ItcTabs {
    constructor(target, config) {
        const defaultConfig = {};
        this._config = Object.assign(defaultConfig, config);
        this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
        this._elButtons = this._elTabs.querySelectorAll('.tabs__btn');
        this._elPanes = this._elTabs.querySelectorAll('.tabs__pane');
        this._eventShow = new Event('tab.itc.change');
        this._init();
        this._events();
    }
    _init() {
        this._elTabs.setAttribute('role', 'tablist');
        this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            this._elPanes[index].setAttribute('role', 'tabpanel');
        });
    }
    show(elLinkTarget) {
        const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
        const elLinkActive = this._elTabs.querySelector('.tabs__btn-active');
        const elPaneShow = this._elTabs.querySelector('.tabs__pane-show');
        if (elLinkTarget === elLinkActive) {
            return;
        }
        elLinkActive ? elLinkActive.classList.remove('tabs__btn-active') : null;
        elPaneShow ? elPaneShow.classList.remove('tabs__pane-show') : null;
        elLinkTarget.classList.add('tabs__btn-active');
        elPaneTarget.classList.add('tabs__pane-show');
        this._elTabs.dispatchEvent(this._eventShow);
        // elLinkTarget.focus();
    }
    showByIndex(index) {
        const elLinkTarget = this._elButtons[index];
        elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
        this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.tabs__btn');
            if (target) {
                e.preventDefault();
                this.show(target);
            }
        });
    }
}
const tabs = document.querySelectorAll('.tabs');
for (let i = 0, length = tabs.length; i < length; i++) {
    new ItcTabs(tabs[i]);
}
const tab = new ItcTabs('.tabs');
// программно переключиться на 2 вкладку (1 – индекс вкладки, на которую нужно перейти)
tab.showByIndex(0);

//================== #Team Tabs

class ItcTabsSecond {
    constructor(target, config) {
        const defaultConfig = {};
        this._config = Object.assign(defaultConfig, config);
        this._elTabs = typeof target === 'string' ? document.querySelector(target) : target;
        this._elButtons = this._elTabs.querySelectorAll('.teams__btn');
        this._elPanes = this._elTabs.querySelectorAll('.teams__pane');
        this._eventShow = new Event('tab.itc.change');
        this._init();
        this._events();
    }
    _init() {
        this._elTabs.setAttribute('role', 'tablist');
        this._elButtons.forEach((el, index) => {
            el.dataset.index = index;
            el.setAttribute('role', 'tab');
            this._elPanes[index].setAttribute('role', 'tabpanel');
        });
    }
    show(elLinkTarget) {
        const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
        const elLinkActive = this._elTabs.querySelector('.teams__btn-active');
        const elPaneShow = this._elTabs.querySelector('.teams__pane-show');
        if (elLinkTarget === elLinkActive) {
            return;
        }
        elLinkActive ? elLinkActive.classList.remove('teams__btn-active') : null;
        elPaneShow ? elPaneShow.classList.remove('teams__pane-show') : null;
        elLinkTarget.classList.add('teams__btn-active');
        elPaneTarget.classList.add('teams__pane-show');
        this._elTabs.dispatchEvent(this._eventShow);
    }
    showByIndex(index) {
        const elLinkTarget = this._elButtons[index];
        elLinkTarget ? this.show(elLinkTarget) : null;
    };
    _events() {
        this._elTabs.addEventListener('click', (e) => {
            const target = e.target.closest('.teams__btn');
            if (target) {
                e.preventDefault();
                this.show(target);
            }
        });
    }

}

const tabsSecond = document.querySelectorAll('.teams');
for (let i = 0, length = tabs.length; i < length; i++) {
    new ItcTabsSecond(tabs[i]);
}
const tabSecond = new ItcTabsSecond('.teams');
// программно переключиться на 2 вкладку (1 – индекс вкладки, на которую нужно перейти)
tab.showByIndex(0);

//================== #Masters Slider

const slider = document.querySelector(".masters__items");
const slides = document.querySelectorAll(".masters__item");
const button = document.querySelectorAll(".masters__button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

//====================== Remove hash
history.replaceState(null, null, ' ');

//====================== Modal data-modal="n"
!function (e) { "function" != typeof e.matches && (e.matches = e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), n = 0; o[n] && o[n] !== t;)++n; return Boolean(o[n]) }), "function" != typeof e.closest && (e.closest = function (e) { for (var t = this; t && 1 === t.nodeType;) { if (t.matches(e)) return t; t = t.parentNode } return null }) }(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function () {

    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');

    modalButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {

            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        });

    });

    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });

    });

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });

});