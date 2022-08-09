import { homePage } from './page-load.js';
import { menuPage } from './menu-load.js';
import { contactPage } from './contact-load.js'



(function() {
  // We should have the content div first
  const content = document.querySelector('#content')

  // Then the buttons:
  const homeBtn = document.querySelectorAll('.content .header .buttons button');

  // The page will open as the homepage
  const home = homePage();
  const menu = menuPage();
  const contact = contactPage();
  content.appendChild(home)

  const removeKid = (first,second) => {
    if (content.children[1].classList.value == first.classList.value) {
      console.log('asasdasd')
      console.log(content.children);
      content.removeChild(first)
    } else if (content.children[1].classList.value == second.classList.value) {
      content.removeChild(second);
      console.log(content.children);
    }
  }

  const openPage = (first,second,appendThis) => {
    removeKid(first,second);
    content.appendChild(appendThis);
  }

  homeBtn.forEach(btn => btn.addEventListener('click', () => {
    switch (btn.textContent) {
      case 'Home':
        console.log('HOME SELECTED');
        openPage(menu,contact,home);
        break;

      case 'Menu':
        console.log('MENU SELECTED');
        openPage(home,contact,menu);
        break;

      case 'Contact':
        console.log('CONTACT SELECTED');
        openPage(home,menu,contact)
        break;
    }
  }))
})()


