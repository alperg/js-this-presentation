module.exports = `let myGhost = {
  name: 'Casper',
  boo: '👻 Boo!!',
  ghost: function () {
    console.log(this.boo);
  }
}

myGhost.ghost(); // 👻 Boo!!
`;
