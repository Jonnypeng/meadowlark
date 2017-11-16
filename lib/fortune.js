var fortuneCookies = [
  'u are play',
  'u are xbox',
  'u are sony',
  'u are ios',
  'u are hello'
];

exports.getFortune = function (){
  var idx = Math.floor(Math.random()*fortuneCookies.length);
  return fortuneCookies[idx];
};
