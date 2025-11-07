// Logs text to console
function log(n, ...m) {
  console.log(`[${n.toUpperCase()}]`, ...m);
}

console.log('Utils loaded: log function defined');

// Gets url path
function getURLPath(u) {
  console.log('getURLPath called with:', u); // ← добавим логирование
  return !u.startsWith('https') ? u.split('http://')[1].split('/') : u.startsWith('https') ? u.split('https://')[1].split('/') : null;
}

console.log('Utils loaded: getURLPath function defined');
