// Contact page create

export function contactPage() {
  const contactPage = document.createElement('div')
  const para1 = document.createElement('p')
  const para2 = document.createElement('p')
  const img = document.createElement('img')

  contactPage.classList.add('contact-page')
  img.src = 'img/contact.png'
  img.alt = 'contact'

  para1.textContent = 'Phone: 252-252-2525'
  para2.textContent = 'Email: acar-cag@erzurum.com'

  contactPage.appendChild(para1)
  contactPage.appendChild(para2)
  contactPage.appendChild(img)

  return contactPage
}