import tabs from './modules/tabs';
import modal from'./modules/modal';
import timer from'./modules/timer';
import calc from'./modules/calc';
import cards from'./modules/cards';
import forms from'./modules/forms';
import slider from'./modules/slider';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 1000000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-06-11');
    calc();
    cards();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider', 
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: 'total', 
        currentCounter: 'current', 
        wrapper: '.offer__slider-wrapper', 
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });
});
   