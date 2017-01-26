function hello (name: string) {
  console.log(`This is the new Hello to ${name}`);
}

hello("Lord Nemesis");


class ObjectHello {
  message: string;
  constructor(message: string) {
    this.message = message;
  }
  say () {
    console.log("Hello to " + this.message);
  }
}

const myObject = new ObjectHello ("Sauron");
myObject.say();
