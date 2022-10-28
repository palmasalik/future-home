const receipt = document.querySelector(".receipt"),
  receiptWindow = document.querySelector(".receipt__window"),
  receiptOut = document.querySelector(".receipt__window-out"),
  btnReceipt = document.querySelector(".receipt__window-btn"),
  addCart = document.querySelector(".addCart");

addCart.addEventListener("click", () => {
  receipt.style.display = "flex";
  setTimeout(() => {
    receipt.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    receiptWindow.style = `top: 50px;
                                height:100px; 
                                overflow-y: scroll;`;
  }, 200);
  document.body.style.overflow = "hidden";
});
btnReceipt.addEventListener("click", () => {
  location.reload();
});

const newOpa = document.querySelector(".bbww");
const newType = document.querySelector(".geodara");
newOpa.addEventListener("mouseover", () => {
  newType.style.opacity = "1";
  newType.style.transition = ".5s";
});
newOpa.addEventListener("mouseout", () => {
  newType.style.opacity = "0";
  newType.style.transition = ".5s";
});





const newTelegramm = document.querySelector(".nomertelef");
const newOpTelegrmm = document.querySelector(".telegram");
newTelegramm.addEventListener("mouseover", () => {
  newTelegramm.style.opacity = "0";
  newTelegramm.style.transition = ".5s";
  newOpTelegrmm.style.opacity = "1";
  newOpTelegrmm.style.transition = ".5s";
});

newTelegramm.addEventListener("mouseout", () => {
  newTelegramm.style.opacity = "1";
  newTelegramm.style.transition = "1s";
  newOpTelegrmm.style.opacity = "0";
  newOpTelegrmm.style.transition = ".5s";
});

const newWata = document.querySelector(".nomerteleff");
const newWhatsapp = document.querySelector(".whatsapp");
newWata.addEventListener("mouseover", () => {
  newWata.style.opacity = "0";
  newWata.style.transition = ".5s";
  newWhatsapp.style.opacity = "1";
  newWhatsapp.style.transition = ".5s";
});

newWata.addEventListener("mouseout", () => {
  newWata.style.opacity = "1";
  newWata.style.transition = "1s";
  newWhatsapp.style.opacity = "0";
  newWhatsapp.style.transition = ".5s";
});

const newViber = document.querySelector(".nomertelefff");
const newOpViber = document.querySelector(".viber");
newViber.addEventListener("mouseover", () => {
  newViber.style.opacity = "0";
  newViber.style.transition = ".5s";
  newOpViber.style.opacity = "1";
  newOpViber.style.transition = ".5s";
});

newViber.addEventListener("mouseout", () => {
  newViber.style.opacity = "1";
  newViber.style.transition = "1s";
  newOpViber.style.opacity = "0";
  newOpViber.style.transition = ".5s";
});

const sliderId = document.querySelectorAll(".carousel-item"),
  sliderName = document.querySelectorAll(".herova");

function slider() {
  for (let i = 0; i < sliderId.length; i++) {
    if (sliderId[i].classList.contains("active")) {
      for (let p = 0; p < sliderName.length; p++) {
        sliderName[p].classList.remove("active");
      }
      sliderName[i].classList.add("active");
    }
  }
  setTimeout(slider, 0);
}

slider();







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




















const fiveClik = document.querySelector(".five_clik"),
  theLastPopup = document.querySelector(".popap_last"),
  poiskNazad = document.querySelector(".search"),
  closewindow = document.querySelector(".close");

fiveClik.addEventListener("click", () => {
  theLastPopup.style.display = "flex";
  theLastPopup.style.flexDirection = "column";
  theLastPopup.style.opacity = "1";
  closewindow.style.display = "block";
  closewindow.style.zIndex = "3";
});
poiskNazad.addEventListener("click", () => {
  location.reload();
});
closewindow.addEventListener("click", () => {
  theLastPopup.style.display = "none";
  closewindow.style.display = "none";
});



const menuBurget = document.querySelector('.burger-btn')
const menu = document.querySelector('.menu')

menuBurget.addEventListener('click', () => {
  menuBurget.classList.toggle('active')
  menu.classList.toggle('menu_active')
})




const ratingItemsList = document.querySelectorAll('.rating__item')
const line = document.querySelector('.line')
const rating = document.querySelector('.rating')
const trap = document.querySelector('.innerLine')
const lineWidth = line.offsetWidth;
const screenWidth = window.screen.width

ratingItemsList.forEach(item =>
  item.addEventListener('mouseover', function () {
    let width = item.offsetLeft;
    trap.style.width = `${width}px`;
    trap.style.backgroundColor = '#314C51';
  })
)
ratingItemsList.forEach(item =>
  item.addEventListener('mouseout', function () {
    let width = item.offsetLeft;
    trap.style.width = `${width}px`;
    trap.style.backgroundColor = '#c4c4c4';
  })
)
ratingItemsList.forEach(item =>
  item.addEventListener('mouseover', function () {
    let height = item.offsetTop;
    if (screenWidth <= 767) {
      trap.style.width = 2 + 'px';
      trap.style.height = `${height}px`;
      trap.style.backgroundColor = '#314C51';
    }
  })
)
ratingItemsList.forEach(item =>
  item.addEventListener('mouseout', function () {
    let height = item.offsetTop;
    if (screenWidth <= 767) {
      trap.style.width = 2 + 'px';
      trap.style.height = `${height}px`;
      trap.style.backgroundColor = '#c4c4c4';
    }
  })
)


window.onload = function () {
  let pre = document.getElementById('preload');
 setTimeout(() => {
  pre.style.display = 'none'
 }, 5000);
}