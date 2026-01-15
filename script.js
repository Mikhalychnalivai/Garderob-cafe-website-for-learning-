const data = {
  latte:{title:'Латте',text:'Состав: двойной эспрессо из 100% арабики, горячее молоко, воздушная молочная пена',img:'img/латте.jpg'},
  cappuccino:{title:'Капучино',text:'Состав: эспрессо, горячее молоко и плотная молочная пена в равных пропорциях',img:'img/капучино.jpg'},
  raf:{title:'Раф',text:'Состав: эспрессо, сливки 10%, ванильный сахар, взбитые до кремовой текстуры',img:'img/раф.png'},
  americano:{title:'Американо',text:'Состав: эспрессо и горячая фильтрованная вода, сохраняющая аромат кофе',img:'img/американо.jpg'},
  espresso:{title:'Эспрессо',text:'Состав: молотые зёрна 100% арабики, приготовленные под высоким давлением',img:'img/эспрессо.png'},
  flatwhite:{title:'Флэт уайт',text:'Состав: двойной эспрессо и небольшое количество горячего молока с микропеной',img:'img/флетУайт.jpeg'},
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
