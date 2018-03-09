module.exports = `function ghost() {
  console.log(this.boo);
}

ghost(); // undefined

var boo = '👻';

ghost(); // 👻
`;
