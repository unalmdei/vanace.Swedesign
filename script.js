"use strict";

var orgFontSizePt = 11.5;
var previousWidthPx = 1024;
function resize() {
  var newWidthPx = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (newWidthPx != previousWidthPx) {
    var newFontSizePt = (Math.round(orgFontSizePt * 10 * newWidthPx / 1024) / 10) + 'pt';
    document.getElementsByTagName("body")[0].style.fontSize = newFontSizePt;
    previousWidthPx = newWidthPx;
  }
}

function showHide(showId, hideId) {
  document.getElementById(showId).style.display = "block";
  document.getElementById(hideId).style.display = "none";
}

if (window.addEventListener) {
  window.addEventListener('load', resize, true);
  window.addEventListener('resize', resize, true);
} else if (window.attachEvent) {
  window.attachEvent('onload', resize);
  window.attachEvent('onresize', resize);
}
