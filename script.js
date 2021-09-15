var sidebar = document.querySelector(".sidebar");
sidebar.addEventListener("click", sidebarf);
function sidebarf() {
  var toggle = document.querySelector(".toggle");
  toggle.style.display = "flex";
}

var closebar = document.querySelector(".logo svg");

closebar.addEventListener("click", close);
function close() {
  var toggle = document.querySelector(".toggle");
  toggle.style.display = "none";
}

 var blocki = document.querySelector(".blocki");
sidebar.addEventListener("click", closess);
function closess() {
  var toggle = document.querySelector(".toggle");
 
  blocki.classList = "blockage";
  // toggle.style.display = "none";
}

blocki.addEventListener("click", closes);
function closes() {
  var toggle = document.querySelector(".toggle");
  toggle.style.display = "none";
  blocki.classList.remove("blockage");
}



var media = window.matchMedia("(min-width:851px) and (max-width: 1253px)");
media.addEventListener("change", fun);
fun(media);
function fun(event) {
  var footer = document.querySelector(".footerwrapper");
  var bottom = document.querySelector(".bottomlinks");
  var wana = document.querySelector(".copyright");
  var addis = document.querySelector("#newest");
  if (event.matches) {
    if (!addis) {
      var newest = document.createElement("div");
      newest.id = "newest";
      newest.appendChild(bottom);
      footer.append(newest);
    }
  } else {
    if (addis) {
      wana.after(bottom);
      addis.remove();
    }
  }
}

var smallmedia = window.matchMedia(" (min-width: 0px) and (max-width: 850px)");
smallmedia.addEventListener("change", pop);
pop(smallmedia);

function pop(event) {
  var shop = document.querySelector(".c1");
  var gebeya = document.querySelector("#gebeya");
  let list1 = document.querySelector(".c1u");
  var footerr = document.querySelector(".shop");
  if (event.matches) {
    if (!gebeya) {
      var droppy = document.createElement("div");
      droppy.id = "gebeya";
      var iconup = document.createElement("div");
      iconup.id = "iconupp";
      iconup.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;
      var icondown = document.createElement("div");
      icondown.className = "icondownn";
      icondown.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;

      footerr.prepend(droppy);
      droppy.prepend(shop);
      droppy.append(icondown);
      droppy.append(iconup);

      droppy.addEventListener("click", () => {
        let list1 = document.querySelector(".c1u");
        list1.classList.toggle("c1u-open");
        iconup.classList.toggle("iconuppxz");
        icondown.classList.toggle("cyz");
        // droppy.classList.toggle("gemechu");
      });
    }
  } else {
    if (gebeya) {
      footerr.prepend(shop);
      gebeya.remove();
      list1.classList.remove("c1u-open");
    }
  }
}

var smallmediaa = window.matchMedia(" (min-width: 0px) and (max-width: 850px)");
smallmediaa.addEventListener("change", spop);
spop(smallmediaa);
function spop(event) {
  var c2s = document.querySelector(".c2s");
  var huletegna = document.querySelector(".huletegna");
  var c2ul = document.querySelector(".c2ul");
  var serve = document.querySelector(".services");
  if (event.matches) {
    if (!huletegna) {
      var hulet = document.createElement("div");
      hulet.className = "huletegna";
      var icon1 = document.createElement("div");
      icon1.id = "iconupp";
      var icon2 = document.createElement("div");
      icon2.className = "icondownn";
      icon1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;

      icon2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;
      serve.prepend(hulet);
      hulet.prepend(c2s);
      hulet.append(icon1);
      hulet.append(icon2);
      hulet.addEventListener("click", () => {
        var c2ul = document.querySelector(".c2ul");
        c2ul.classList.toggle("c2ul-open");
        icon1.classList.toggle("iconuppxz");
        icon2.classList.toggle("cyz");
        // hulet.classList.toggle("gemechu");
      });
    }
  } else {
    if (huletegna) {
      serve.prepend(c2s);
      huletegna.remove();
      c2ul.classList.remove("c2ul-open");
    }
  }
}

var smallmediaa1 = window.matchMedia(
  " (min-width: 0px) and (max-width: 850px)"
);
smallmediaa1.addEventListener("change", tpop);
tpop(smallmediaa1);
function tpop(eventt) {
  // var c2s = document.querySelector(".c2ac");
  var huletegnaa = document.querySelector(".huletegnaa");
  var c2ul2 = document.querySelector(".c2ul2");

  var servee = document.querySelector(".c2ac");
  var lela = document.querySelector(".services");
  if (eventt.matches) {
    if (!huletegnaa) {
      var hulett = document.createElement("div");
      hulett.className = "huletegnaa";
      var icon11 = document.createElement("div");
      icon11.id = "iconup";
      var icon22 = document.createElement("div");
      icon22.className = "icondownn";
      icon11.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;

      icon22.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;
      lela.append(hulett);
      lela.append(c2ul2);
      hulett.prepend(servee);
      hulett.append(icon11);
      hulett.append(icon22);
      hulett.addEventListener("click", () => {
        var c2ul2 = document.querySelector(".c2ul2");
        c2ul2.classList.toggle("c2ul-open");
        icon11.classList.toggle("iconuppxz");
        icon22.classList.toggle("cyz");
        // hulet.classList.toggle("gemechu");
      });
    }
  } else {
    if (huletegnaa) {
      lela.append(servee);
      lela.append(c2ul2);
      huletegnaa.remove();
      c2ul2.classList.remove("c2ul-open");
    }
  }
}

var smallmedia2 = window.matchMedia(" (min-width: 0px) and (max-width: 850px)");
smallmedia2.addEventListener("change", fpop);
fpop(smallmedia2);
function fpop(event3) {
  // var c2s = document.querySelector(".c2ac");
  var huletegna2 = document.querySelector(".huletegna2");
  var pomul = document.querySelector(".pomul");

  var pom = document.querySelector(".pom");
  var apple = document.querySelector(".Applestore");
  if (event3.matches) {
    if (!huletegna2) {
      var hulet2 = document.createElement("div");
      hulet2.className = "huletegna2";
      var icon11 = document.createElement("div");
      icon11.id = "iconup1";
      var icon22 = document.createElement("div");
      icon22.className = "icondownn";
      icon11.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;

      icon22.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;
      apple.prepend(hulet2);
      hulet2.prepend(pom);
      hulet2.append(icon11);
      hulet2.append(icon22);
      hulet2.addEventListener("click", () => {
        var pomul = document.querySelector(".pomul");
        pomul.classList.toggle("c2ul-open");
        icon11.classList.toggle("iconuppxz");
        icon22.classList.toggle("cyz");
      });
    }
  } else {
    if (huletegna2) {
      apple.prepend(pom);
      huletegna2.remove();
      pomul.classList.remove("c2ul-open");
    }
  }
}

// var smallmedia3 = window.matchMedia(" (min-width: 0px) and (max-width: 850px)");
// smallmedia3.addEventListener("change", fipop);
// fipop(smallmedia3);
// function fipop(event4) {
//   var onebu = document.querySelectorAll(".onebu");
//   var onebu0 = onebu[0];

//   var business = document.querySelector(".business");
//   var icon11 = document.querySelector(".iconupB");
//   var icon22 = document.querySelector(".icondB");

//   if (event4.matches) {
//     var icon11 = document.createElement("div");
//     icon11.className = "iconupB";
//     var icon22 = document.createElement("div");
//     icon22.className = "icondB";
//     icon11.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;

//     icon22.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;

//     onebu0.append(icon22);
//     onebu0.append(icon11);
//     onebu0.style.display = "flex";

//     onebu0.addEventListener("click", () => {
//       var uone = document.querySelectorAll(".uone");
//       var uone0 = uone[0];
//       uone0.classList.toggle("c2ul-open");
//       icon11.classList.toggle("iconuppxz");
//       icon22.classList.toggle("cyz");
//     });
//   } else {
//     if (icon11 || icon22) {
//       icon11.remove();
//       icon22.remove();
//     }
//   }
// }

// var smallmedia4 = window.matchMedia(" (min-width: 0px) and (max-width: 850px)");
// smallmedia4.addEventListener("change", sepop);
// sepop(smallmedia4);
// function sepop(event5) {
//   var onebu = document.querySelectorAll(".onebu");
//   var onebu1 = onebu[1];

//   var icon11 = document.querySelector(".iconupB");
//   var icon22 = document.querySelector(".icondB");

//   if (event5.matches) {
//     var icon11 = document.createElement("div");
//     icon11.className = "iconupB";
//     var icon22 = document.createElement("div");
//     icon22.className = "icondB";
//     icon11.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;

//     icon22.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;

//     onebu1.append(icon22);
//     onebu1.append(icon11);
//     onebu1.style.display = "flex";

//     onebu1.addEventListener("click", () => {
//       var uone = document.querySelectorAll(".uone");
//       var uone1 = uone[1];
//       uone1.classList.toggle("c2ul-open");
//       icon11.classList.toggle("iconuppxz");
//       icon22.classList.toggle("cyz");
//     });
//   } else {
//     if (icon11 || icon22) {
//       icon11.remove();
//       icon22.remove();
//     }
//   }
// }

// var smallmedia5 = window.matchMedia(" (min-width: 0px) and (max-width: 850px)");
// smallmedia5.addEventListener("change", sevpop);
// sevpop(smallmedia5);
// function sevpop(event6) {
//   var onebu = document.querySelectorAll(".onebu");
//   var onebu2 = onebu[2];

//   var icon11 = document.querySelector(".iconupB");
//   var icon22 = document.querySelector(".icondB");

//   if (event6.matches) {
//     var icon11 = document.createElement("div");
//     icon11.className = "iconupB";
//     var icon22 = document.createElement("div");
//     icon22.className = "icondB";
//     icon11.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;

//     icon22.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;

//     onebu2.append(icon22);
//     onebu2.append(icon11);
//     onebu2.style.display = "flex";

//     onebu2.addEventListener("click", () => {
//       var uone = document.querySelectorAll(".uone");
//       var uone2 = uone[2];
//       uone2.classList.toggle("c2ul-open");
//       icon11.classList.toggle("iconuppxz");
//       icon22.classList.toggle("cyz");
//     });
//   } else {
//     if (icon11 || icon22) {
//       icon11.remove();
//       icon22.remove();
//     }
//   }
// }

// var smallmedia6 = window.matchMedia(" (min-width: 0px) and (max-width: 850px)");
// smallmedia6.addEventListener("change", eigpop);
// eigpop(smallmedia6);
// function eigpop(event7) {
//   var onebu = document.querySelectorAll(".onebu");
//   var onebu3 = onebu[3];

//   var icon11 = document.querySelector(".iconupB");
//   var icon22 = document.querySelector(".icondB");

//   if (event7.matches) {
//     var icon11 = document.createElement("div");
//     icon11.className = "iconupB";
//     var icon22 = document.createElement("div");
//     icon22.className = "icondB";
//     icon11.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;

//     icon22.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;

//     onebu3.append(icon22);
//     onebu3.append(icon11);
//     onebu3.style.display = "flex";

//     onebu3.addEventListener("click", () => {
//       var uone = document.querySelectorAll(".uone");
//       var uone3 = uone[3];
//       uone3.classList.toggle("c2ul-open");
//       icon11.classList.toggle("iconuppxz");
//       icon22.classList.toggle("cyz");
//     });
//   } else {
//     if (icon11 || icon22) {
//       icon11.remove();
//       icon22.remove();
//     }
//   }
// }
var g = 8;
var smallmedia8 = window.matchMedia("(min-width: 0px) and (max-width: 850px)");
smallmedia8.addEventListener("change", ninpop);
ninpop(smallmedia8);

function ninpop(event8) {
  let onebu = document.querySelectorAll(".onebu");
  let uone = document.querySelectorAll(".uone");

  for (let i = 0; i < onebu.length; i++) {
    if (event8.matches) {
      // Create and append new icons
      let icon11 = document.createElement("div");
      icon11.className = "iconupB";
      let icon22 = document.createElement("div");
      icon22.className = "icondB";

      icon11.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;
      icon22.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;

      onebu[i].append(icon22);
      onebu[i].append(icon11);
      onebu[i].style.display = "flex";

      // Add click event listener to toggle the dropdown and icons
      onebu[i].addEventListener("click", function () {
        uone[i].classList.toggle("c2ul-open");
        icon11.classList.toggle("iconuppxz");
        icon22.classList.toggle("cyz");
      });
    } else {
      // Reset state: remove icons, reset class and event listener
      let icon11 = onebu[i].querySelector(".iconupB");
      let icon22 = onebu[i].querySelector(".icondB");

      if (icon11) {
        icon11.remove();
      }
      if (icon22) {
        icon22.remove();
      }
      uone[i].classList.remove("c2ul-open");
      onebu[i].style.display = "";
      // Remove any previously attached event listener by cloning and replacing the element
      let newOnebu = onebu[i].cloneNode(true);
      onebu[i].replaceWith(newOnebu);
      onebu[i] = newOnebu;
    }
  }
}

var smallmedia9 = window.matchMedia("(min-width: 0px) and (max-width: 850px)");
smallmedia9.addEventListener("change", tenpop);
tenpop(smallmedia9);

function tenpop(event10) {
  let classhead = document.querySelectorAll(".abouthead");
  let classul = document.querySelectorAll(".aboutul");

  for (let i = 0; i < classhead.length; i++) {
    // Remove previous event listener
    let oldElementt = classhead[i].cloneNode(true);
    classhead[i].parentNode.replaceChild(oldElementt, classhead[i]);
    if (event10.matches) {
      // Add icons
      let icon11 = document.createElement("div");
      icon11.className = "iconupB";
      let icon22 = document.createElement("div");
      icon22.className = "icondB";
      icon11.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M480-344 240-584l47.33-47.33L480-438.67l192.67-192.66L720-584 480-344Z"/></svg>`;
      icon22.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24.5px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M246.67-433.33 200-480l280-280 280 280-46.67 46.67L480-665.67 246.67-433.33Z"/></svg>`;

      oldElementt.append(icon22);
      oldElementt.append(icon11);
      oldElementt.style.display = "flex";

      oldElementt.addEventListener("click", () => {
        let uone4 = classul[i];
        uone4.classList.toggle("c2ul-open");
        icon11.classList.toggle("iconuppxz");
        icon22.classList.toggle("cyz");
      });
    } else {
      // Remove icons and reset classes
      let icon11 = oldElementt.querySelector(".iconupB");
      let icon22 = oldElementt.querySelector(".icondB");

      if (icon11) {
        icon11.remove();
      }
      if (icon22) {
        icon22.remove();
      }

      let uone4 = classul[i];
      uone4.classList.remove("c2ul-open");
      oldElementt.style.display = "";
    }
  }
}

