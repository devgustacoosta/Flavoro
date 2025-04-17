fetch('../informacoes.json')
  .then(res => res.json())
  .then(produtos => {
    const wrapper = document.getElementById('swiper-promocoes-wrapper');
    produtos.forEach((prod) => {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `
        <div class="promocoes__ofertas">
          <img class="imgPrimaria" src="${prod.imagemPrincipal}" alt="${prod.nome}">
          <img class="imgSecundaria" src="${prod.imagemSecundaria}" alt="${prod.nome}">
          <div class="promocoes__ofertas__descricao">
            <p class="promocoes__ofertas__descricao__categoria">${prod.categoria}</p>
            <p class="promocoes__ofertas__descricao__titulo">${prod.nome}</p>
            <p class="promocoes__ofertas__descricao__valor">${prod.precoPromocional} <span>${prod.preco}</span></p>
            <p class="promocoes__ofertas__descricao__tempo"></p>
          </div>
        </div>
      `;
      wrapper.appendChild(slide);
    });

    new Swiper('.swiper-promocoes', {
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next-promocoes',
            prevEl: '.swiper-button-prev-promocoes',
        }
    });
  })
  .catch(err => console.error('Erro ao carregar produtos:', err));
