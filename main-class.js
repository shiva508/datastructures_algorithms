//Referance

//context

//instantiation
console.log([] === []);
console.log([1] === [1]);

var object1 = { value: 408 };
var object2 = object1;
var object3 = { value: 408 };
console.log("object1 === object2", object1 === object2);
console.log("object1 === object3", object1 === object3);

object1.value = 508;
console.log("object1.value=", object1.value);
console.log("object2.value=", object2.value);
console.log("object3.value=", object3.value);
console.log(this);
function init() {
  a = 408;
  console.log(a);
}
init();
const object4 = {
  a: function () {
    console.log(this);
  },
};
console.log("object4=", object4);
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduse() {
    console.log(this.name, this.type);
  }
}

const data = new Player("shiva", "developer");
console.log("Playesr", data);
data.introduse();

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log("let us play");
  }
}

const wiz1 = new Wizard("Shiva", "diaapper");
wiz1.introduse();
wiz1.play();
