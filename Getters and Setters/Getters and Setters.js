class Person {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(nameString) {
    let nameSplit = nameString.split(' ').reverse();
    this.firstName = nameSplit.pop();
    this.lastName = nameSplit.reverse().join(' ');
  }
}

function run() {
  
  let friend = new Person('Daniel','Collier');

  console.log(`First name: ${friend.firstName}`)
  console.log(`Last name: ${friend.lastName}`)
  console.log(`Full name: ${friend.fullName}`)

  friend.fullName = 'Daniel Augusto Figueiredo Collier';
  
  console.log(`First name: ${friend.firstName}`)
  console.log(`Last name: ${friend.lastName}`)
  console.log(`Full name: ${friend.fullName}`)

}
