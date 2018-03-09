module.exports = `function ghost() {
  console.log(this.boo);
}

ghost(); // undefined

let boo = '👻';

ghost(); // undefined

window.boo = '👻';

ghost(); // 👻
`;
