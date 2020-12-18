var expires;

function setCookie(cname, cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + 31 * 24 * 60 * 60 * 1000);
  expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user);
    }
  }
  //post current time
  let el = document.createElement("div");
  var dateObject = new Date();
  dateObjectString = dateObject.toGMTString();
  let elTextNode = document.createTextNode(
    "Current time is " + dateObjectString
  );
  el.appendChild(elTextNode);

  //post current cookie expires date
  document.getElementById("result").appendChild(el);
  let el2 = document.createElement("div");
  var exp = expires.split("=");

  let el2TextNode = document.createTextNode("Cookie expires at " + exp[1]);
  el2.appendChild(el2TextNode);
  document.getElementById("result").appendChild(el2);
}

checkCookie();
