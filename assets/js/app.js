

$(document).ready(function () {
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRaduis: 10
    });


    const bars = document.querySelectorAll('.progress__bar');
    bars.forEach(function (bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    })


    //counter

    const counters = document.querySelectorAll('.counter');
    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;
            let step = target / 100;


            let countItem = function () {
                let displayCount = +counter.innerText;
                if (displayCount < target) {
                    counter.innerText = Math.ceil(displayCount + step);
                    setTimeout(countItem, 1);
                }
                else {
                    counter.innerText = target;
                }
            }
            countItem();
        })

    }



    let counterSection = document.querySelector('.counter__section');

    let Options = {
        rootMargin: '0px 0px -200px 0px'
    }
    let done = 0;

    const sectionObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();

        }
    }, Option)

    sectionObserver.observe(counterSection);

    //image filter
    var $wrapper = $('.portfolio__wrapper');


    //intialize isotop 
    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationoptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {
        let selector = link.dataset.filter;

        link.addEventListener('click', function (e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationoptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    })


    //magnify pop up

    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enable: true
        },
        zoom: {
            enable: true
        }
    });


    //slider 
    $('.slider').slick({
        arrows: false,
        autoplay: true
    });

    const form = document.querySelector('.contact_form');

    function sendMssg(e) {
        e.preventDefault();
        // contact form
        const name = document.querySelector('.name'),
            email = document.querySelector('.email'),
            msg = document.querySelector('.msg'),
            phone = document.querySelector('.phone');


        Email.send({
            Host: "smtp.gmail.com",
            Username: "AMAL MANSOUR",
            Password: "Aa33510421@",
            To: 'eng.amalmansour1992@gmail.com',
            From: email.value,
            Subject: "Contact Form",
            Body: msg.value
        }).then(
            message => alert(message)
        );
    }

    form.addEventListener('submit', sendMssg)






});