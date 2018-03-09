module.exports = `function ghost() {
  console.log(this.boo);
}

let myGhost = {
  name: 'Casper',
  boo: '👻 Boo!!',
}

ghost.call(myGhost); // 👻 Boo!!
`;
