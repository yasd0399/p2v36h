// Logs text to console
function log(n, ...m) {
  console.log(`[${n.toUpperCase()}]`, ...m);
}

// Gets url path
function getURLPath(u) {
  return u.split('/').slice(2);
}
