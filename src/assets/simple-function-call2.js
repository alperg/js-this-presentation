module.exports = `'use strict';

function ghost() {
  console.log(this.boo);
}

ghost(); // TypeError: this is undefined

// the rest is not executed
var boo = '👻';

ghost();
`;
