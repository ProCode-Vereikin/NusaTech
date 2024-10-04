// Get menu elements and buttons
const mobileMenuBtn = document.querySelector('.mobile-btn')
const mobileMenu = document.querySelector('.navbar-mobile-list')
const closeBtn = document.querySelector('.navbar-close')
const mobileMenuItems = document.querySelectorAll('.navbar-mobile-item')

// Opening the menu when clicking on the menu icon
mobileMenuBtn.addEventListener('click', () => {
	mobileMenu.classList.add('active')
})

// Closing the menu when clicking on the close icon
closeBtn.addEventListener('click', () => {
	mobileMenu.classList.remove('active')
})

// Closing the menu when clicking on any menu item
mobileMenuItems.forEach(item => {
	item.addEventListener('click', () => {
		mobileMenu.classList.remove('active')
	})
})
