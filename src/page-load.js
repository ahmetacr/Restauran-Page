// Here we are going to create the home page and export it!
export function homePage() {
  const homePage = document.createElement('div');
  const infoContainer = document.createElement('div');
  const header = document.createElement('h2');
  const para1 = document.createElement('p');
  const img = document.createElement('img');
  const para2 = document.createElement('p');

  homePage.classList.add('home-page')
  infoContainer.classList.add('info-container')

  header.textContent = 'What is Cag Kebap'
  para1.textContent = ' is a horizontally stacked marinated rotating lamb kebab variety, originating in Erzurum Province, Turkey.'
  para2.textContent = ' Would you like to try our awesome Cag Kebap?'

  img.src = './img/cag.jpg'
  img.alt = 'cag';

  infoContainer.appendChild(header)
  infoContainer.appendChild(para1)
  infoContainer.appendChild(img)
  infoContainer.appendChild(para2)
  
  homePage.appendChild(infoContainer)

  return homePage
}