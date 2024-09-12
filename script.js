const ballons = [
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },
  {
    name: 'фотозоны',
    price: '1.200',
    currency: '₽',
    img: './img/baloon2.png',
  },


  
  
];



const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.onclick = () => {
  menu.classList.toggle('open');
};

const wrapper2 = document.querySelectorAll('.wrapper2');
const wrapper3 = document.querySelector('.wrapper2');

// const cards = ProductsData.map((card) => {
//   return `
//         <div class="card1">
//             <img src="./img/baloon2.png" alt="">
//             <p>Фотозоны</p>
//             <p>1200₽</p>
//             <s>1400₽</s>
//             <button class="btn2">Заказать</button>
//         </div>

//    `;
// }).join('');

// wrapper.innerHTML = ballons;

ballons.forEach((c) => {
  wrapper2[0].innerHTML += `
       <div class="card1">
            <img class="foto" src=${c.img} alt="">
            <p>${c.name}</p>
            <p>${c.price}</p>
            <s>${c.currency}</s>
            <button class="btn2">Заказать</button>
        </div> 
    `;
});

ballons.forEach((c) =>{
  wrapper2[1].innerHTML += `
     <div class="card1">
            <img src=${c.img} alt="">
            <p>${c.name}</p>
            <p>${c.price}</p>
            <s>${c.currency}</s>
            <button class="btn2">Заказать</button>
        </div> 
  `;


})


// <div class="card">
//     <img src=${card.imageUrl} alt="">
//     <h2>${card.name}</h2>
//     <p>${card.reviews}</p>
//     <s>${card.oldPrice}</s>
//     <h3>${card.newPrice}</h3>
// </div>
