export function src(url) {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = url;
  document.getElementsByTagName("head")[0].appendChild(s);
}
