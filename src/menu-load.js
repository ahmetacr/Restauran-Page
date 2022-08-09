// We are going to create the menu section
export function menuPage() {
  const menuPage = document.createElement('div');
  const cards = document.createElement('div');
  const header = document.createElement('h2');

  menuPage.classList.add('menu-page');
  cards.classList.add('cards');

  header.textContent = 'Greatest Foods from Erzurum'

  for (let i = 0; i < 6; i++) {
    const card = document.createElement('div');
    const para = document.createElement('p');
    const img  = document.createElement('img');

    card.classList.add('card');

    switch (i) {
      case 0:
        para.textContent = 'Cag Kebap';
        img.src = 'img/one-cag.jpg';
        img.alt = 'cag-kebap';
        break;
      
      case 1:
        para.textContent = 'Coban Salad';
        img.src = 'img/coban-salad.jpg';
        img.alt = 'coban-salad';
        break;
      
      case 2: 
        para.textContent = 'Manda Yogurt'
        img.src = 'img/manda-yogurt.jpg';
        img.alt = 'manda-yogurt'
        break;

      case 3: 
        para.textContent = 'Cemen Salad'
        img.src = 'img/cemen.jpg';
        img.alt = 'cemen'
        break
        
      case 4: 
        para.textContent = 'Kadayif Dolmasi'
        img.src = 'img/kadayif-dolmasi.jpg';
        img.alt = 'kadayif-dolmasi'
        break  

      case 5: 
        para.textContent = 'Erzurum Cheese'
        img.src = 'img/cheese.jpg';
        img.alt = 'erzurum-cheese'
        break
    }
    card.appendChild(para);
    card.appendChild(img);
    cards.appendChild(card);
    menuPage.appendChild(header);
    menuPage.appendChild(cards);
  }

  return menuPage;
}