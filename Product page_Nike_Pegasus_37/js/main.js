// JavaScript Document

(function(){
	"use strict";

	//Hamburger Menu

	(function burgerMenu() {

		let button = document.querySelector("#button");
		let burgerCon = document.querySelector("#burgerCon");
		let closeMenu = document.querySelector("#closeMenu");

		function hamburgerMenu() {
			burgerCon.classList.toggle("slideToggle");
			button.classList.toggle("expanded");
		}

		function closeHamburgerMenu() {
			burgerCon.classList.toggle("slideToggle");
			button.classList.toggle("expanded");
		}

		button.addEventListener("click", hamburgerMenu, false);		
		closeMenu.addEventListener("click", closeHamburgerMenu, false);	
	})();
	
	//Hot Spots for Car

	(function shoeHotSpots() {
		let hotspots = document.querySelectorAll(".Hotspot");
		let model = document.querySelector("#model");

		function loaded() {
			hotspots.forEach(hotspot=>{
				hotspot.style.display = "block";
			});
		}
		function showInfo(e) {
			//console.log(e.currentTarget.slot);
			let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
			gsap.to(selected, 1, {autoAlpha:1});			
		}
		function hideInfo(e) {
			//console.log(e.currentTarget.slot);
			let selected = document.querySelector(`button[slot="${e.currentTarget.slot}"] > div`);
			gsap.to(selected, 1, {autoAlpha:0});
		}
		hotspots.forEach(hotspot => {
			hotspot.addEventListener("mouseover", showInfo);
			hotspot.addEventListener("mouseout", hideInfo);
		});

		model.addEventListener("load", loaded);
	})();
	
	
	//Video Player
	(function video() {
		const placeHolder = document.querySelector("#videoPlaceHolder");
		const videoCon = document.querySelector("#video");
		const player = document.querySelector("#player");

		function hideHolder() {
			placeHolder.style.display="none";
			videoCon.style.height = "auto";
			player.play();
		}

		placeHolder.addEventListener("click", hideHolder);

		const vidPlayer = new Plyr("video", {controls:['rewind','play','fast-forward', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'fullscreen']
		});

	})();

	

	(function gallery() {
		let count = 0;
		let photos = ["image1","image2","image3","image4"];

		const prev = document.querySelector("#prev");
		const next = document.querySelector("#next");
		let shoePic = document.querySelector("#galImage");

		function nextPic()	{
			count++;
				if (count == photos.length) {
					count = 0;
				}		
				TweenMax.to(shoePic, 1, {autoAlpha:0, onComplete:done}); 
			}
		
			function prevPic() {
				count--;
				if (count < 0) {
					count = photos.length - 1;
				}	
				TweenMax.to(shoePic, 1, {autoAlpha:0, onComplete:done});
			}
		
			function done() {	
					let gallSrcset = 
					`images/${photos[count]}_w320.png 320w,
					images/${photos[count]}_w919.png 919w,
					images/${photos[count]}_w1280.png 1280w`
					let gallsSrc = `images/${photos[count]}_w1280.png`;
					shoePic.src = gallsSrc;
					shoePic.srcset = gallSrcset;
					TweenMax.to(shoePic, 1, {autoAlpha:1}); 		
			}

		next.addEventListener("click", nextPic, false); 
		prev.addEventListener("click", prevPic, false);
	})();
})();