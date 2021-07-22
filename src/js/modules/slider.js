function slider() {
    //slider

    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          current = document.getElementById('current'),
          total = document.getElementById('total'),
          numTotal = slides.length,
          slidesWrapper = document.querySelector('.offer__slider-wrapper'),
          slidesField = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1,
        offset = 0;
    
    total.innerHTML = `0${numTotal}`;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
          dots = [];

    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function dotsOpacity () {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex-1].style.opacity = 1;
    }

    function editCurrentNumber() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function getNumberFromWidth (str) {
        return +str.replace(/\D/g, '');      
    }

    next.addEventListener('click', () => {
        if (offset == getNumberFromWidth(width) * (slides.length - 1)) {
            
            offset = 0;
        } else {
            offset += getNumberFromWidth(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        editCurrentNumber();
        dotsOpacity();
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = getNumberFromWidth(width) * (slides.length - 1);
        } else {
            offset -= getNumberFromWidth(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        editCurrentNumber();
        dotsOpacity();
    });

    dots.forEach (dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = getNumberFromWidth(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;
            
            editCurrentNumber();
            dotsOpacity();
        });
    });

    /* if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides() {
        slides.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        slides[slideIndex-1].classList.remove('hide');
        slides[slideIndex-1].classList.add('show', 'fade');

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    showSlides();

    next.addEventListener('click', () => {
        if (slideIndex >= numTotal) {
            slideIndex = 0;
        }
        slideIndex++;
        showSlides(slideIndex);       
    });

    prev.addEventListener('click', () => {
        if (slideIndex <= 1) {
            slideIndex = numTotal + 1;
        }
        slideIndex--;
        showSlides(slideIndex);       
    }); */
}

module.exports = slider;