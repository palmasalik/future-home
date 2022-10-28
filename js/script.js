class SLIDER {
    constructor(options) {
        this.slider = document.querySelector(options.slider)
        this.sliderLine = this.slider.querySelector('.sborimg')
        this.slides = this.sliderLine.children



        this.next = this.slider.querySelector('.slider_next')
        this.prev = this.slider.querySelector('.slider_prev')

        this.dir = options.direction.toUpperCase() == 'X' ? 'X' : 'Y'

        this.timeMove = options.time != undefined ? options.time : 1000

        this.width = this.slider.clientWidth
        this.height = this.slider.clientHeight

        this.moveSize = this.dir === 'X' ? this.width : this.height
        this.interval = isNaN(options.interval) === true ? this.timeMove + 1000 : options.interval
        this.activeSlide = 0

        this.sliderLine.style = `position: relative;
                                height: ${this.height}px;
                                overflow: hidden;`

        for (let i = 0; i < this.slides.length; i++) {
            const sl = this.slides[i]
            sl.style = `position: absolute;
                                                width: ${this.width + 1}px;
                                                height: ${this.height}px;`

            if (i != this.activeSlide) {
                sl.style.transform = `translate${this.dir}(${this.moveSize}px)`
            }
            if (i === this.slides.length - 1) {
                sl.style.transform = `translate${this.dir}(${-this.moveSize}px)`
            }
        }
        if (options.autoplay == true) {
            let interval = setInterval(() => {
                this.move(this.next)
            }, this.interval);
            this.slider.addEventListener('mouseenter', () => {
                clearInterval(interval)
            })
            this.slider.addEventListener('mouseleave', () => {
                interval = setInterval(() => {
                    this.move(this.next)
                }, this.interval);
            })
        }
        this.next.addEventListener('click', () => this.move(this.next))
        this.prev.addEventListener('click', () => this.move(this.prev))
    }
    move(btn) {

        this.next.disabled = true
        this.prev.disabled = true

        setTimeout(() => {
            this.next.disabled = false
            this.prev.disabled = false
        }, this.timeMove);

        let btnLeftOrRight = btn == this.next ? this.moveSize * -1 : this.moveSize

        for (let i = 0; i < this.slides.length; i++) {
            const slide = this.slides[i]
            slide.style.transition = '0ms'
            if (i != this.activeSlide) {
                slide.style.transform = `translate${this.dir}(${btnLeftOrRight * -1}px)`
            }
        }
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(${btnLeftOrRight}px)`
        this.slides[this.activeSlide].style.transition = this.timeMove + 'ms'
        if (btn == this.next) {
            this.activeSlide++
            if (this.activeSlide >= this.slides.length) {
                this.activeSlide = 0
            }
        } else if (btn == this.prev) {
            this.activeSlide--
        }
        if (this.activeSlide < 0) {
            this.activeSlide = this.slides.length - 1
        }
        this.slides[this.activeSlide].style.transform = `translate${this.dir}(0px)`
        this.slides[this.activeSlide].style.transition = this.timeMove + 'ms'
    }
}

const slider = new SLIDER({
    slider: '.sborimgstart',
    direction: 'x',
    time: 1000,
    autoplay: true,
    interval: 5000
})



window.onload = function () {
    let pre = document.getElementById('preload');
   setTimeout(() => {
    pre.style.display = 'none'
   },5000);
  }
































const neponatno = document.querySelectorAll(".asdfefef"),
    popupsam = document.querySelectorAll(".diffpopup"),
    butSeting = document.querySelectorAll(".butsent"),
    closeOpen = document.querySelector(".closeopen");


for (let i = 0; i < neponatno.length; i++) {
    neponatno[i].addEventListener('click', () => {
        popupsam[i].classList.add('active')
        closeOpen.classList.add('active')
    })
    closeOpen.addEventListener('click', () => {
        popupsam[i].classList.remove('active')
        closeOpen.classList.remove('active')
    })
}
for (let i = 0; i < butSeting.length; i++) {

    butSeting[i].addEventListener('click', () => {
        popupsam[i].classList.remove('active')
        closeOpen.classList.remove('active')
    })

}




const newTelegramm = document.querySelector('.nomertelef');
const newOpTelegrmm = document.querySelector('.telegram');
newTelegramm.addEventListener('mouseover', () => {
    newTelegramm.style.opacity = '0'
    newTelegramm.style.transition = '.5s'
    newOpTelegrmm.style.opacity = '1'
    newOpTelegrmm.style.transition = '.5s'
})


newTelegramm.addEventListener('mouseout', () => {
    newTelegramm.style.opacity = '1'
    newTelegramm.style.transition = '1s'
    newOpTelegrmm.style.opacity = '0'
    newOpTelegrmm.style.transition = '.5s'
})


const newWata = document.querySelector('.nomerteleff');
const newWhatsapp = document.querySelector('.whatsapp');
newWata.addEventListener('mouseover', () => {
    newWata.style.opacity = '0'
    newWata.style.transition = '.5s'
    newWhatsapp.style.opacity = '1'
    newWhatsapp.style.transition = '.5s'
})

newWata.addEventListener('mouseout', () => {
    newWata.style.opacity = '1'
    newWata.style.transition = '1s'
    newWhatsapp.style.opacity = '0'
    newWhatsapp.style.transition = '.5s'
})


const newViber = document.querySelector('.nomertelefff');
const newOpViber = document.querySelector('.viber');
newViber.addEventListener('mouseover', () => {
    newViber.style.opacity = '0'
    newViber.style.transition = '.5s'
    newOpViber.style.opacity = '1'
    newOpViber.style.transition = '.5s'
})

newViber.addEventListener('mouseout', () => {
    newViber.style.opacity = '1'
    newViber.style.transition = '1s'
    newOpViber.style.opacity = '0'
    newOpViber.style.transition = '.5s'
})