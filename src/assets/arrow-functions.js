module.exports = `function Ghost(boo) {
  this.boo = boo;
  this.booUpperCase = () => {
    return this.boo.toUpperCase();
  }
}

const myGhost = new Ghost('boo!!');

console.log(myGhost.boo); // boo!!

console.log(myGhost.booUpperCase()); // BOO!!
`;
