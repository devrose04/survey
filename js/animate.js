var divIntro = $("div .intro");
divIntro.html(divIntro.html().replace("Unknown", "Safari"));
let date = new Date("Feb 10 2022 00:00:00");
function counts() {
  if (document.getElementById("timer__till")) {
    let now = new Date();
    let gap = date - now;
    let days = Math.floor(gap / 1000 / 60 / 60 / 24);
    let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    if (gap > 0) {
      document.getElementById("days").innerText = days;
      document.getElementById("hours").innerText = hours;
      document.getElementById("minutes").innerText = minutes;
      document.getElementById("seconds").innerText = seconds;
      if (days < 10) {
        document.getElementById("days").innerText = "0" + days;
      }
      if (hours < 10) {
        document.getElementById("hours").innerText = "0" + hours;
      }
      if (minutes < 10) {
        document.getElementById("minutes").innerText = "0" + minutes;
      }
      if (seconds < 10) {
        document.getElementById("seconds").innerText = "0" + seconds;
      }
    } else {
      document.querySelector(".timer__wrapper").innerText = "Акция завершилась";
    }
  } else {
    clearInterval(intervalId);
  }
}
let intervalId = setInterval(() => {
  counts();
}, 1000);

var page = "page",
  brand = "device_brand";
var conMid,
  mydate = new Date(),
  year = mydate.getFullYear(),
  month = mydate.getMonth(),
  day = mydate.getDate(),
  weekday = mydate.getDay(),
  count = 1,
  headline = document.getElementById("headline"),
  topDate = document.getElementById("topDate"),
  today = document.getElementById("today"),
  con = document.getElementById("container"),
  whCon = document.getElementById("wheelCon"),
  dWheel = document.getElementById("wheel"),
  button = document.getElementById("pressButton"),
  device = document.getElementById("devMockup"),
  first = document.getElementById("firstpage"),
  second = document.getElementById("secondpage");

function setButtonHeight() {
  conMid = (whCon.getBoundingClientRect().bottom - whCon.getBoundingClientRect().top) / 2;
  button.style.top = conMid - button.offsetHeight / 2 - (0.2 * button.offsetHeight) / 2 + "px";
}

function spin() {
  console.log("spin");
  var modal = $modal({
    content:
      '<p style="text-align:center;">You have an extra try!</p><br><p style="text-align:center;">Try again!</p>',
  });
  switch (count) {
    case 1:
      button.disabled = true;
      dWheel.className = "spinAround";
      setTimeout(function () {
        button.disabled = false;
        modal.show();
        $(".modal__btn-close").click(function () {
          autospin2();
        });
      }, 6800);
      break;
    case 2:
      dWheel.className = "spinAround2";
      setTimeout(function () {
        dWheel.className += " transparent";
      }, 6800);
      setTimeout(function () {
        device.style.display = "block";
        device.style.left = whCon.offsetWidth / 2 - device.offsetWidth / 2 + "px";
        device.style.top = conMid - device.offsetHeight / 2 + "px";
      }, 7000);
      setTimeout(function () {
        first.innerHTML = "<img src='images/loading.gif'>";
        first.style.padding = "195px 0px";
        setTimeout(function () {
          first.parentNode.removeChild(first);
          second.style.display = "block";
          con.insertBefore(second, con.firstChild);
          setInterval("countdown()", 1000);
        }, 1500);
      }, 9000);
      var canvasElement = document.getElementById("my-canvas");
      if (canvasElement) {
        canvasElement.remove();
      }
  }
  count++;
}

function autospin2() {
  console.log("autospin2");
  spin();
}

function autospin1() {
  console.log("autopspin1");

  checkIP()
    .then((result) => {
      $("input[name=ip]").val(result.ip);
      $("input[name=country]").val(result.country);
      $("input[name=city]").val(result.city);
      return result;
    })
    .catch(function (err) {
      console.log("Error:", err);
    })
    .finally(function () {
      showModal_1();
    });

  async function checkIP() {
    return fetch("https://get.geojs.io/v1/ip/geo.json").then((response) =>
      response.json()
    );
  }

  function deviceType() {
    return "Smartphone";
  }

  function showModal_1() {
    var modal = $modal({
      content: `<p style="text-align:center;">Congratulations!</p><br>
                <p id="ip_text" style="text-align:center; font-size: 13px;"><b>IP: ${$("input[name=ip]").val()}</b>
                <img id="ip_check" src="images/check_icon.png" width="10" height="10"" alt="check"></p>
                <br><p id="device_text" style="text-align:center; font-size: 13px;"><b>Device: ${deviceType()}</b>
                <img id="device_check" src="images/check_icon.png" width="10" height="10"" alt="check"></p>
                <br><p id="browser_text" style="text-align:center; font-size: 13px;"><b>Location: ${$("input[name=country]").val() + " " + $("input[name=city]").val()}</b>
                <img id="browser_check" src="images/check_icon.png" width="10" height="10"" alt="check"></p>
                <br><p style="text-align:center;">You are one of the 7 people selected to participate in our loyalty program! You can get 1 gift out of 4!</p>
                <br> <p style="text-align:center;">Click "OK" to start!</p>`,
    });
    modal.show();
    $("#ip_text").show("slow");
    setTimeout(function () {
      $("ip_text").hide("slow");
    }, 500);
    $("#device_text").show("slow");
    setTimeout(function () {
      $("device_text").hide("slow");
    }, 1000);
    $("#browser_text").show("slow");
    setTimeout(function () {
      $("browser_text").hide("slow");
    }, 3000);
    $("#loc_text").show("slow");
    setTimeout(function () {
      $("loc_text").hide("slow");
    }, 3500);
    $("#os_text").show("slow");
    setTimeout(function () {
      $("os_text").hide("slow");
    }, 4500);
    setTimeout(function () {
      $("#ip_check").fadeIn(100);
    }, 1500);
    setTimeout(function () {
      $("#device_check").fadeIn(100);
    }, 2000);
    setTimeout(function () {
      $("#browser_check").fadeIn(100);
    }, 4000);
    setTimeout(function () {
      $("#loc_check").fadeIn(100);
    }, 4500);
    setTimeout(function () {
      $("#os_check").fadeIn(100);
    }, 5100);
    $(".modal__btn-close").click(function () {
      document.getElementById("pressButton").click();
    });
  }
}

function countdown() {
  var d = parseInt(document.getElementById("mins").innerHTML),
    c = parseInt(document.getElementById("hsecs").innerHTML),
    b = 0,
    a = 0;
  if (d !== 0 && c === 0) {
    b = d - 1;
    a = 59;
  } else if (d !== 0 || c !== 0) {
    b = d;
    a = c - 1;
  } else if (d === 0 && c === 0) {
    b = d;
    a = c;
  }
  if (a < 10) a = "0" + a;
  document.getElementById("mins").textContent = b;
  document.getElementById("hsecs").textContent = a;
}
