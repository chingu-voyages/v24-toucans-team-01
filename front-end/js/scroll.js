export default () => {

	/**********************PARALLAX SCROLL EFFECT**************** */


	const parallax = document.querySelectorAll('.parallax');

	window.addEventListener("scroll", function () {
		let offset = window.pageYOffset;
		parallax.forEach(function (prllx, i) {
			if (offset > prllx.offsetTop) {
				prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.6 + "px"
			}
			else {
				prllx.style.backgroundPositionY = "0px";
			};
		});
	});
	
	/***************SMOOTH SCROLL EFFECT**************************** */

	function smoothScroll(target, duration) {
		var target = document.querySelector(target);

		var navbarHeight = 100;

		var targetPosition = target.getBoundingClientRect().top - navbarHeight;  //vertical distance to the target section minus header height
		var startPosition = window.pageYOffset;
		var startTime = null;



		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			var timeElapsed = currentTime - startTime;
			var run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		}

		function ease(t, b, c, d) {
			t /= d;
			return c * t * t + b;
		}



		requestAnimationFrame(animation);

	}

	const links = document.querySelectorAll('[id^="link"]'); //selecting all elements with IDs  which incl. link

	var clicked = false;

	//looping through every link to add click event listener for associating target
	Array.prototype.forEach.call(links, function (el, i) {
		// "el" is your element


		document.getElementById(el.id).addEventListener('click', function (event) {
			event.preventDefault();
			document.querySelector(".navigation__link--active").classList.remove("navigation__link--active");
			document.getElementById(el.id).classList.add("navigation__link--active");
			clicked = true;
			smoothScroll('#target-0' + String(i + 1), 1000);
			//prevent clicked state change during animation scroll
			setTimeout(function () {
				clicked = false;
			}, 1001);
		});
	});

	/**********************SCROLL SPY******************************* */

	document.addEventListener('DOMContentLoaded', function () {

		// grab the sections (targets) and menu_links (triggers)
		// for menu items to apply active link styles to
		/* const sections = document.querySelectorAll(".template__section");
		const menu_links = document.querySelectorAll(".template__nav-item a");
		 */

		const sections = document.querySelectorAll('[id^="target"]');





		// functions to add and remove the active class from links as appropriate
		const makeActive = (link) => links[link].classList.add("navigation__link--active");
		const removeActive = (link) => links[link].classList.remove("navigation__link--active");
		const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));

		// change the active link a bit above the actual section
		// this way it will change as you're approaching the section rather
		// than waiting until the section has passed the top of the screen
		const sectionMargin = 200;

		// keep track of the currently active link
		// use this so as not to change the active link over and over
		// as the user scrolls but rather only change when it becomes
		// necessary because the user is in a new section of the page
		let currentActive = 0;

		// listen for scroll events
		window.addEventListener("scroll", () => {

			// check in reverse order so we find the last section
			// that's present - checking in non-reverse order would
			// report true for all sections up to and including
			// the section currently in view
			//
			// Data in play:
			// window.scrollY    - is the current vertical position of the window
			// sections          - is a list of the dom nodes of the sections of the page
			//                     [...sections] turns this into an array so we can
			//                     use array options like reverse() and findIndex()
			// section.offsetTop - is the vertical offset of the section from the top of the page
			// 
			// basically this lets us compare each section (by offsetTop) against the
			// viewport's current position (by window.scrollY) to figure out what section
			// the user is currently viewing
			const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin) - 1;

			// only if the section has changed
			// remove active class from all menu links
			// and then apply it to the link for the current section
			if (current !== currentActive && !clicked) {
				removeAllActive();
				currentActive = current;
				makeActive(current);
			}
		});
	}, false);

};