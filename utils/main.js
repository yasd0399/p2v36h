// Logs text to console
function log(n, ...m) {
  console.log(`[${n.toUpperCase()}]`, ...m);
}

// Gets url path
function getURLPath(u) {
  return !u.startsWith('https') ? u.split('http://')[1].split('/') : u.startsWith('https') ? u.split('https://')[1].split('/') : null;
}
