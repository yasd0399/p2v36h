// Gets url path
var getURLPath = function(u) {
  if (!u.startsWith('http')) return null;
  return u.split('/').slice(2);
}

// Logs text to console
var log = function(n, ...m) {
  console.log(`[${n.toUpperCase()}]`, ...m);
}
