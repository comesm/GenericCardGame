var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter+=val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(1);
    },
    value: function() {
      return privateCounter;
    }
  }
})

var c = counter();
c.increment()
c.increment()
console.log(c.value());