// Gets url path
var getURLPath=function(u){
  return u.startsWith('http')&&u.split('/').slice(2);
}

// Logs text to console
var log=function(n, ...m){
  console.log(`[${n.toUpperCase()}]`,...m);
}
