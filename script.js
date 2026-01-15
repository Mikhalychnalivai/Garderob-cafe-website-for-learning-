const data = {
  latte:{title:'Латте',text:'Состав: двойной эспрессо из 100% арабики, горячее молоко, воздушная молочная пена',img:'https://images.unsplash.com/photo-1541167760496-1628856ab772'},
  cappuccino:{title:'Капучино',text:'Состав: эспрессо, горячее молоко и плотная молочная пена в равных пропорциях',img:'https://i-coffee.me/wp-content/uploads/2022/02/Coffee_Cappuccino_Cream_Cup_Saucer_525045_2048x1152.jpg'},
  raf:{title:'Раф',text:'Состав: эспрессо, сливки 10%, ванильный сахар, взбитые до кремовой текстуры',img:'https://images.gastronom.ru/R2tO6aTuXyg6Hsqx6rwSMushYvJIv2VvDEzWfxibgI4/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2JkYjE0OWFlLTIzNzMtNDk5Mi05NTY1LWYwNmJlOTExMjI1OC5qcGc.webp'},
  americano:{title:'Американо',text:'Состав: эспрессо и горячая фильтрованная вода, сохраняющая аромат кофе',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmjf5G4uhVhjlUhv2aqziCZ7558Bwxz8hRcQ&s'},
  espresso:{title:'Эспрессо',text:'Состав: молотые зёрна 100% арабики, приготовленные под высоким давлением',img:'https://st8.stblizko.ru/images/product/291/294/024_big.png'},
  flatwhite:{title:'Флэт уайт',text:'Состав: двойной эспрессо и небольшое количество горячего молока с микропеной',img:'https://shop.legend-tea.ru/upload/iblock/7fc/c0xmp2ox7tvkzay851zdppjxl8fa9703/ai-generated-cappuccino-cup-on-saucer-free-photo.jpeg'},
};

const modal = document.getElementById('modal');
document.querySelectorAll('button[data-modal]').forEach(btn=>{
  btn.onclick=()=>{
    const d=data[btn.dataset.modal];
    modal.style.display='flex';
    modal.querySelector('#modal-img').src=d.img;
    modal.querySelector('#modal-title').textContent=d.title;
    modal.querySelector('#modal-text').textContent=d.text;
  }
});

document.querySelector('.close').onclick=()=>modal.style.display='none';
modal.onclick=e=>{ if(e.target===modal) modal.style.display='none'; }