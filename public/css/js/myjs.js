	new WOW().init();

	particlesJS("particle-js", {
		  "particles": {
		    "number": {
		      "value": 18,
		      "density": {
		        "enable": true,
		        "value_area": 552.4033491425909
		      }
		    },
		    "color": {
		      "value": "#ffffff"
		    },
		    "shape": {
		      "type": "circle",
		      "stroke": {
		        "width": 0,
		        "color": "#000000"
		      },
		      "polygon": {
		        "nb_sides": 3
		      },
		      "image": {
		        "src": "img/github.svg",
		        "width": 100,
		        "height": 100
		      }
		    },
		    "opacity": {
		      "value": 0.68138006139568634,
		      "random": false,
		      "anim": {
		        "enable": false,
		        "speed": 1,
		        "opacity_min": 0.1,
		        "sync": false
		      }
		    },
		    "size": {
		      "value": 3,
		      "random": true,
		      "anim": {
		        "enable": false,
		        "speed": 40,
		        "size_min": 0.1,
		        "sync": false
		      }
		    },
		    "line_linked": {
		      "enable": true,
		      "distance": 189.39543399174545,
		      "color": "#ffffff",
		      "opacity": 0.3815039575754227,
		      "width": 1.736124811591
		    },
		    "move": {
		      "enable": true,
		      "speed": .8,
		      "direction": "none",
		      "random": false,
		      "straight": false,
		      "out_mode": "out",
		      "bounce": false,
		      "attract": {
		        "enable": false,
		        "rotateX": 600,
		        "rotateY": 1200
		      }
		    }
		  },
		  "interactivity": {
		    "detect_on": "window",
		    "events": {
		      "onhover": {
		        "enable": false,
		        "mode": "repulse"
		      },
		      "onclick": {
		        "enable": true,
		        "mode": "repulse"
		      },
		      "resize": true
		    },
		    "modes": {
		      "grab": {
		        "distance": 400,
		        "line_linked": {
		          "opacity": 1
		        }
		      },
		      "bubble": {
		        "distance": 400,
		        "size": 40,
		        "duration": 2,
		        "opacity": 8,
		        "speed": 3
		      },
		      "repulse": {
		        "distance": 103.89610389610391,
		        "duration": 0.4
		      },
		      "push": {
		        "particles_nb": 4
		      },
		      "remove": {
		        "particles_nb": 2
		      }
		    }
		  },
		  "retina_detect": true
		});

	$("#intro-logo").hide();
	$("#particle-js").hide();
	$("#add-container").hide();
	$("#survey-container").hide();
	// $("#user-created").hide();

	function removeLogo() {
		$("#intro-logo").fadeOut({queue: false, duration: 700});
	}
	function showParticles() {
		$("#particle-js").fadeIn();
	}
	function showCrtAcc() {
		$("#add-container").fadeIn({queue: false, duration: 600}).animate({top:'180px'}, 550);
	}
	function showUserSurvey() {
		$("#survey-container").fadeIn({queue: false, duration: 600}).animate({top:'180px'}, 550);
	}
	function showLogin() {
		$("#login-container").fadeIn();
	}
	// function hideFlag() {
	// 	$("#intro-logo").fadeOut({queue: false, duration: 700});
	// }

	$(document).ready(function(){

		$("#intro-logo").fadeIn({queue: false, duration: 650}).animate({top:'280px'}, 650);

		setTimeout(removeLogo, 1020);
		setTimeout(showParticles, 1500);
		$("#add-user-button").click(function(){
			$("#login-container").removeClass("wow fadeInDown animated");
			$("#login-container").fadeOut({queue: false, duration: 600}).animate({bottom:'150px'}, 550);
			setTimeout(showCrtAcc, 1010);
		});
		$("#confirm-form-btn-1").click(function(){
			$("#add-container").fadeOut({queue: false, duration: 600}).animate({bottom:'150px'}, 550);
			setTimeout(showUserSurvey, 1010);
		});
		$("#confirm-form-btn-2").click(function(){
			// $("#user-created").fadeIn({queue: false, duration: 650}).animate({left:'280px', bottom: '100px'}, 650);
			$("#survey-container").fadeOut({queue: false, duration: 600}).animate({bottom:'150px'}, 550);
			setTimeout(showLogin, 1010);
		});
		$("#rock").on("click", function(){
			console.log("hello");
			$("#rock").css("background-color", "8fb7ff");
		});
	});

		//friend finder 
		//------------------------------------------------------------------------------------
		var rock = false;
		$("#rock").on("click", function() {
			if (rock === false) {
				rock = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				rock=false;
			};
		});

		var dance = false;
		$("#dance").on("click", function() {
			if (dance === false) {
				dance = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				dance=false;
			};
		});

		var jazz = false;
		$("#jazz").on("click", function() {
			if (jazz === false) {
				jazz = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				jazz=false;
			};
		});

		var reggae = false; 
		$("#reggae").on("click", function() {
			if (reggae === false) {
				reggae = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				reggae=false;
			};
		});

		var soul = false;
		$("#soul").on("click", function() {
			if (soul === false) {
				soul = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				soul=false;
			};
		});

		var hiphop = false;
		$("#hiphop").on("click", function() {
			if (hiphop === false) {
				hiphop = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				hiphop=false;
			};
		});

		var punk = false;
		$("#punk").on("click", function() {
			if (punk === false) {
				punk = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				punk=false;
			};
		});

		var rnb = false;
		$("#rnb").on("click", function() {
			if (rnb === false) {
				rnb = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				rnb=false;
			};
		});

		var folk = false;
		$("#folk").on("click", function() {
			if (folk === false) {
				folk = true;
				$(this).css("background", "#81bdff");
			}
			else {
				$(this).css("background", "white");
				folk=false;
			};
		});

		var survey = [rock,dance,jazz,reggae,soul,hiphop,punk,rnb,folk];
		function checkMatches() {
			for (var i = 0; i < survey.length; i++) {

			}	
		}