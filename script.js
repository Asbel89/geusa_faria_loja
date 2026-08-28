const WHATSAPP_NUMBER = "5537991126242";

const looks = [
  {
    id:"GF001", cat:"plus", catLabel:"Plus Size",
    title:"Vestido Longo Floral Laranja e Pink",
    desc:"Vestido halter longo com estampa floral vibrante, tecido fluido e bolsinha caramelo. Tamanho plus.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look01.jpg",
    badge:"PLUS SIZE"
  },
  {
    id:"GF002", cat:"feminino", catLabel:"Feminina",
    title:"Vestido Longo Paisley Azul - Live dos Vestidos",
    desc:"Destaque da Live dos Vestidos na Espaço Geusa Faria - estampa exclusiva paisley em tons de azul.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look02.jpg",
    badge:"LIVE"
  },
  {
    id:"GF003", cat:"feminino", catLabel:"Feminina",
    title:"Conjunto Amarelo Manteiga - Blusa + Short Saia",
    desc:"Conjunto amarelo claro com blusa de manga 3/4 e short saia godê, com bolsinha branca.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look03.jpg",
    badge:"FEMININA"
  },
  {
    id:"GF004", cat:"feminino", catLabel:"Feminina",
    title:"Vestido Curto Azul Bebê Babados",
    desc:"Vestido halter azul bebê com babados na barra, leve e elegante.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look04.jpg",
    badge:"FEMININA"
  },
  {
    id:"GF005", cat:"feminino", catLabel:"Feminina",
    title:"Vestido Curto Verde Lima com Laço",
    desc:"Vestido verde lima acinturado com amarração na cintura, modelagem que valoriza a silhueta.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look05.jpg",
    badge:"FEMININA"
  },
  {
    id:"GF006", cat:"plus", catLabel:"Plus Size",
    title:"Vestido Longo Paisley - Coleção Essencial",
    desc:"Mesmo vestido paisley azul em versão espelho, perfeito para toda ocasião.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look06.jpg",
    badge:"PLUS SIZE"
  },
  {
    id:"GF007", cat:"feminino", catLabel:"Feminina",
    title:"Macaquinho Jeans Botões Frontais",
    desc:"Macaquinho jeans com botões e manga curta, descolado e confortável.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look07.jpg",
    badge:"FEMININA"
  },
  {
    id:"GF008", cat:"feminino", catLabel:"Feminina",
    title:"Vestido Curto Estampa Pássaros Azul",
    desc:"Vestido azul com estampa floral e de pássaros, mangas amplas e bolsinha branca.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look08.jpg",
    badge:"FEMININA"
  },
  {
    id:"GF009", cat:"feminino", catLabel:"Feminina",
    title:"Vestido Curto Verde Menta Duas Camadas",
    desc:"Vestido halter verde menta com saia em babado duplo, hit da estação.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look09.jpg",
    badge:"FEMININA"
  },
  {
    id:"GF010", cat:"feminino", catLabel:"Feminina",
    title:"Macacão Longo Poá Off-White - Desfile",
    desc:"Macacão poá com decote e amarração frontal, desfilado no evento da loja.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look10.jpg",
    badge:"DESFILE"
  },
  {
    id:"GF011", cat:"feminino", catLabel:"Feminina",
    title:"Vestido Midi Tule Azul Noite + Cinto",
    desc:"Vestido mídi em tule estampado com cinto largo de fivela, super sofisticado.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look11.jpg",
    badge:"FEMININA"
  },
  {
    id:"GF012", cat:"feminino", catLabel:"Feminina",
    title:"Vestido Tule Longo Noite - Variação",
    desc:"Vestido em tule com transparência e brilho, ideal para noite.",
    price:"Consulte valor no WhatsApp",
    img:"assets/looks/look12.jpg",
    badge:"FEMININA"
  }
];

function waLink(look){
  const msg = `Olá Geusa Faria! 💖\n\nVi o look *${look.title}* (${look.id}) no site e gostaria de saber mais!\n\n`+
  `• Categoria: ${look.catLabel}\n`+
  `• Código: ${look.id}\n\n`+
  `Poderia me enviar valores, tamanhos disponíveis e fotos reais? 😍`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const grid = document.getElementById('looksGrid');
function render(filtro){
  grid.innerHTML="";
  const lista = filtro==="todos" ? looks : looks.filter(l=>l.cat===filtro);
  if(lista.length===0){
    grid.innerHTML=`<p style="grid-column:1/-1;text-align:center;color:#999;padding:30px">Nenhum look nesta categoria no momento. Fale no WhatsApp para ver mais! 💬</p>`;
    return;
  }
  lista.forEach(l=>{
    const card=document.createElement('div');
    card.className='look-card';
    card.dataset.cat=l.cat;
    const badgeClass = l.cat==='plus'?'plus': l.cat==='masculino'?'masc': l.cat==='infantil'?'inf':'';
    card.innerHTML=`
      <div class="look-img">
        <img src="${l.img}" alt="${l.title}" loading="lazy">
        <span class="look-badge ${badgeClass}">${l.badge}</span>
      </div>
      <div class="look-info">
        <span class="look-cat">${l.catLabel} • ${l.id}</span>
        <h3>${l.title}</h3>
        <p class="look-desc">${l.desc}</p>
        <div class="look-price">${l.price}</div>
        <button class="btn-look"><i class="fa-brands fa-whatsapp"></i> Quero este look</button>
      </div>
    `;
    card.addEventListener('click', ()=> openModal(l));
    const btn=card.querySelector('.btn-look');
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      window.open(waLink(l), '_blank');
    });
    grid.appendChild(card);
  });
}

// filtros
document.querySelectorAll('.filtro').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelectorAll('.filtro').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    render(b.dataset.filter);
    document.getElementById('colecao').scrollIntoView({behavior:'smooth', block:'start'});
  });
});
// categoria cards -> filtro (ignora Ver Mais)
document.querySelectorAll('.cat-card:not(.cat-vermais)').forEach(c=>{
  c.addEventListener('click', (e)=>{
    e.preventDefault();
    const f=c.dataset.filter;
    document.querySelectorAll('.filtro').forEach(x=>{
      x.classList.toggle('active', x.dataset.filter===f);
    });
    render(f);
    document.getElementById('colecao').scrollIntoView({behavior:'smooth'});
  });
});
document.querySelectorAll('.footer-col a[data-filter]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const f=a.dataset.filter;
    document.querySelectorAll('.filtro').forEach(x=>{
      x.classList.toggle('active', x.dataset.filter===f);
    });
    render(f);
    document.getElementById('colecao').scrollIntoView({behavior:'smooth'});
  });
});

// modal
const modal=document.getElementById('modal');
const modalImg=document.getElementById('modalImg');
const modalCat=document.getElementById('modalCat');
const modalTitle=document.getElementById('modalTitle');
const modalDesc=document.getElementById('modalDesc');
const modalPrice=document.getElementById('modalPrice');
const modalWa=document.getElementById('modalWa');
function openModal(l){
  if(!modal) return window.open(waLink(l), '_blank');
  modalImg.src=l.img;
  modalImg.alt=l.title;
  modalCat.textContent=`${l.catLabel} • ${l.id}`;
  modalTitle.textContent=l.title;
  modalDesc.textContent=l.desc;
  modalPrice.innerHTML=`${l.price} <small>• Atendimento via WhatsApp</small>`;
  modalWa.href=waLink(l);
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  if(!modal) return;
  modal.classList.remove('open');
  document.body.style.overflow='';
}
if(modal){
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });
}

// menu mobile
const toggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
toggle.addEventListener('click', ()=> nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> nav.classList.remove('open')));
document.addEventListener('click', e=>{
  if(!nav.contains(e.target) && !toggle.contains(e.target)) nav.classList.remove('open');
});

// header sombra ao rolar
const header=document.getElementById('header');
window.addEventListener('scroll', ()=>{
  header.style.boxShadow = window.scrollY>10 ? '0 6px 20px rgba(0,0,0,.06)' : 'none';
});

// init
render('todos');
