(function () {
  "use strict";
  //===== Prealoder =====
  var loader = document.querySelector(".loader");
  window.addEventListener("load", vanish);
  function vanish() {
    loader.classList.add("disappear");
  }
})();
const navbarPhone = document.querySelector(".options-phone");
const optionsPhone = document.querySelectorAll('.nav-option2');
/*
function menuOpen() {
  if (navbarPhone.style.display === "flex") {
    navbarPhone.style.display = "none";
  } else {
    navbarPhone.style.display = "flex";
  }
}
*/

var btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
    this.classList.add('not-active');
    navbarPhone.style.display = "none";
  } else {
    this.classList.remove('not-active');
    this.classList.add('active');
    navbarPhone.style.display = "flex";
  }
});

optionsPhone.forEach(option => {
  option.addEventListener('click', function() {
    console.log('atão');
    btn.classList.remove('active');
    btn.classList.add('not-active');
    navbarPhone.style.display = "none";
  });
});


/*
document.body.addEventListener('click', function(event) {
	if (!navbarPhone.contains(event.target) && navbarPhone.style.display === 'block') {
		navbarPhone.style.display = 'none';
	}
});
*/

function desativateOpenResponses(id) {
  var response = document.querySelector(".response-" + id);
  var question = document.querySelector(".question-" + id);
  var seta = document.querySelector(".seta-" + id);

  response.style.maxHeight = "0";
  response.style.padding = "0 35px";
  question.style.backgroundColor = "white";
  seta.style.boxShadow =
    "2px -2px 0 0.5px var(--orange-visualidentityorange) inset";
  seta.style.transform = "rotate(-45deg)";
}

function openResponse(id) {
  var response = document.querySelector(".response-" + id);
  var question = document.querySelector(".question-" + id);
  var seta = document.querySelector(".seta-" + id);

  for (let i = 1; i <= 7; ++i) {
    //fecha as respostas que estão abertas
    if (id != i) {
      desativateOpenResponses(i);
    }
  }

  if (response.style.maxHeight === "300px") {
    // esta aberto
    response.style.maxHeight = "0";
    response.style.padding = "0 35px";
    question.style.backgroundColor = "white";
    seta.style.boxShadow =
      "2px -2px 0 0.5px var(--orange-visualidentityorange) inset";
    seta.style.transform = "rotate(-45deg)";
  } else {
    // esta fechado
    response.style.maxHeight = "300px";
    response.style.padding = "20px 35px";
    question.style.backgroundColor = "var(--orange-visualidentityorange)";
    seta.style.boxShadow = "2px -2px 0 0.5px white inset";
    seta.style.transform = "rotate(135deg)";
  }
}

function openDropdownResponse() {
  var response = document.querySelector(".dropdown");

  if (response.style.display === "flex") {
    response.style.display = "none";
  } else {
    response.style.display = "flex";
  }
}

function pyramidresponse(idp) {
  if (idp == 1) {
    onclick = document.getElementById("text1").style.display = "none";
    document.getElementById("text2").style.display = "block";
    document.getElementById("button1").style.backgroundColor = "black";
    document.getElementById("button2").style.backgroundColor = "white";
    var elt = document.getElementById("imgp1");
    elt.style.setProperty("-webkit-filter", "drop-shadow(0 3px 8px rgb(136, 136, 136))");
    var elt2 = document.getElementById("imgp2");
    elt2.style.setProperty("-webkit-filter", "none");
  } else {
    onclick = document.getElementById("text2").style.display = "none";
    document.getElementById("text1").style.display = "block";
    document.getElementById("button2").style.backgroundColor = "black";
    document.getElementById("button1").style.backgroundColor = "white";
    var elt = document.getElementById("imgp1");
    elt.style.setProperty("-webkit-filter", "none");
    var elt2 = document.getElementById("imgp2");
    elt2.style.setProperty("-webkit-filter", "drop-shadow(0 3px 8px rgb(136, 136, 136))");
  }
}

//botão para o topo
document.getElementById("back-to-top").addEventListener("click", function () {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para outros navegadores
});

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 30) {
    document.getElementById("back-to-top").style.display = "flex";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
};