const elements = {
	list: document.querySelector(".nav-menu"),
	bars: document.querySelector(".fa-bars"),
	cross: document.querySelector(".fa-times"),
	burger: document.querySelector(".burger"),
	li: document.querySelectorAll(".nav-menu li"),
	scrollTopBtn: document.getElementById("scrollTopBtn"),
	contactInfo: document.querySelectorAll(".contact"),
	galleryBtn: document.querySelector(".move-to-gallery-btn"),
	aboutUsImg: document.querySelector(".about-us-img"),
	swiper: document.querySelector(".swiper"),
};
// Menu toggling if burger icon is clicked
const toggleMenu = () => {
	elements.list.classList.toggle("active");
	elements.burger.classList.toggle("active");
	elements.cross.classList.toggle("hide");
	elements.bars.classList.toggle("hide");

	// Animation for list items
	elements.li.forEach((item, index) => {
		item.style.animation = elements.list.classList.contains("active")
			? `dropdown 0.5s forwards ${index * 0.15}s`
			: "none";
	});
};

// Closing menu
const closeMenu = () => {
	elements.list.classList.remove("active");
	elements.burger.classList.remove("active");
	elements.cross.classList.add("hide");
	elements.bars.classList.remove("hide");

	// Animation reset
	elements.li.forEach(item => (item.style.animation = "none"));
};

// Top button
const handleScroll = () => {
	elements.scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
// Turning on function for image display

const showElement = () => {
	window.scrollY > 400 && window.scrollY < 1100
		? (elements.aboutUsImg.style.animation = "dropdown 1.5s ease forwards")
		: (elements.aboutUsImg.style.opacity = 0);
};

// Changing image depends on reolution

const changeImage = () => {
	if (window.matchMedia("(min-width: 576px").matches) {
		elements.aboutUsImg.src = "./img/kwiaty2.webp";
	} else {
		elements.aboutUsImg.src = "./img/kwiaty1.webp";
	}
};

// Slider
/*
 * Swiper.js - https://swiperjs.com/
 * Autor: @nolimits4web, Licencja: MIT
 */
if(elements.swiper) {
const swiper = new Swiper(".swiper", {
	slidesPerView: 1, // Slides per view
	loop: true, // slide looping
	pagination: { el: ".swiper-pagination", clickable: true },
	navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
	autoplay: { delay: 3000 }, // Auto scrolling
	breakpoints: {
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
			centeredSlides: true,
		},
	},
});
}
const copyMail = () => {
	const mail = "kontakt@bezbezbez.pl"; //Email for copying
	navigator.clipboard
		.writeText(mail)
		.then(() => {
			alert("E-mail skopiowany do schowka: " + mail);
		})
		.catch(err => {
			console.error("Błąd kopiowania: ", err);
		}); // Copying to clipboard
};

const copyPhoneNumber = () => {
	const phone = "+48 123 456 789"; //Phone number for copying
	navigator.clipboard
		.writeText(phone)
		.then(() => {
			alert("Numer telefonu skopiowany do schowka: " + phone);
		})
		.catch(err => {
			console.error("Błąd kopiowania: ", err);
		}); // Copying to clipboard
};

function changeAfterSize(width, height) {
	button.style.setProperty('--after-width', `${width}rem`);
	button.style.setProperty('--after-height', `${height}rem`);
  }

const translations = {
	pl: {
		menuAboutUs: "O nas",
		menuGallery: "Galeria",
		menuContact: "Kontakt",
		aboutUsTitle: "O nas",
		aboutUsContent1:
			"Witamy w BEZBEZBEZ, miejscu, gdzie marzenia zamieniają się w rzeczywistość! Jesteśmy rodzinną firmą z pasją do dekoracji i nieszablonowych rozwiązań.Każdy detal tworzymy z sercem, a nasza wyobraźnia nie zna granic – nie tylko dekorujemy, ale kreujemy atmosferę!",
		aboutUsContent2:
			"Od zachwycających aranżacji ślubnych po oryginalne dekoracje na każdą okazję – specjalizujemy się w przekształcaniu przestrzeni za pomocą ręcznie wykonanych elementów, niestandardowych konstrukcji, bujnej roślinności oraz kwiatów. Jeśli potrafisz to sobie wyobrazić, my potrafimy to zbudować – serio!",
		aboutUsContent3:
			"Jaki jest nasz sekret? To dekoracje BEZ stresu, BEZ nudy i BEZ rujnowania budżetu. Wierzymy, że każda uroczystość powinna być magiczna, wyjątkowa i pełna osobistych akcentów, które czynią ją naprawdę Twoją.",
		aboutUsContent4:
			"Stwórzmy razem coś niezapomnianego, bo każda okazja zasługuje na odrobinę blasku – i solidny bukiet dobrych wspomnień!",
		galleryTitle: "Galeria",
		galleryButton: "Sprawdź",
		contactTitle: "Kontakt",
		contactForm: "Zapytaj o ofertę",
		galleryTitlePageTwo: "Nasza Galeria",
		footerTitle: "© 2025 bezbezbez. Wszelkie prawa zastrzeżone.",
	},
	en: {
		menuAboutUs: "About Us",
		menuGallery: "Gallery",
		menuContact: "Contact",
		aboutUsTitle: "About Us",
		aboutUsContent1:
			"Welcome to BEZBEZBEZ, where we turn your dream events into reality with creativity, craftsmanship, and a whole lot of love! We’re a family-run business with a passion for all things DIY, décor, and design. With years of crafting experience and an endless imagination, we don’t just decorate—we bring visions to life.",
		aboutUsContent2:
			"From breathtaking wedding backdrops to stunning centerpieces and one-of-a-kind event designs, we specialize in transforming spaces with handmade details, custom-built pieces, and lush flowers and greenery. If you can dream it, we can build it—seriously!",
		aboutUsContent3:
			"What’s our secret? It’s décor without the stress, without the ordinary, and without breaking the bank. We believe every event should be magical, unique, and filled with personal touches that make it truly yours.",
		aboutUsContent4:
			"Let’s create something unforgettable together. Because every celebration deserves a little extra sparkle—and maybe a few flowers, too!",
		galleryTitle: "Gallery",
		galleryButton: "Check this out",
		contactTitle: "Contact",
		contactForm: "Request an offer",
		galleryTitlePageTwo: "Our photo gallery",
		footerTitle: "© 2025 bezbezbez. All rights reserved.",
	},
};
function changeLanguage(language) {
	localStorage.setItem('language', language);
	applyLanguage(language);
  }
  
  function applyLanguage(language) {
	document.querySelectorAll('[data-translate]').forEach(element => {
	  const key = element.getAttribute('data-translate');
	  if (translations[language][key]) {
		element.innerText = translations[language][key];
	  }
	});
  }
  
  // When the page is loaded
  document.addEventListener('DOMContentLoaded', () => {
	const savedLanguage = localStorage.getItem('language') || 'pl';
	applyLanguage(savedLanguage);
  
	// Langugage dropdown
	const select = document.getElementById('language-select');
	if (select) {
	  select.value = savedLanguage;
	  select.addEventListener('change', (e) => changeLanguage(e.target.value));
	}
  });
  


// Listeners
elements.burger.addEventListener("click", toggleMenu);
elements.li.forEach(item => item.addEventListener("click", closeMenu));
window.addEventListener("scroll", handleScroll);
if (window.innerWidth > 1024) {
	elements.contactInfo.forEach(item => {
		if (item.classList.contains("mail")) {
			item.addEventListener("click", copyMail);
		}
		if (item.classList.contains("phone")) {
			item.addEventListener("click", copyPhoneNumber);
		}
	});
}
window.addEventListener("DOMContentLoaded", changeImage);
window.addEventListener("resize", changeImage);
if (document.body.classList.contains("main-page")) {
	window.addEventListener("scroll", showElement);
	elements.galleryBtn.addEventListener("click", () => {
		window.open("./pages/gallery.html", "_blank");
	});
}

