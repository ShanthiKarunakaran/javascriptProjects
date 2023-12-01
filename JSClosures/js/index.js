/*var totalClicks = (function counter() {
 
  var counter = 0;
  return function() {
    counter++;
    document.getElementById("displaycount").innerHTML = counter;
  }

  
})();*/




var totalClicks = function counter() {
  var counter = 0;
  return function() {
    counter++;
    document.getElementById("displaycount").innerHTML = `You have clicked ${counter} times`;
  }
}();