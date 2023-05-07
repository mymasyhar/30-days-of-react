// ------------------------------ level 1 -------------------------

// 1. Create an empty object called dog
    console.log(`1. Create an empty object called dog`);
    const dog = {};
    console.log(`\n`);

// 2. Print the the dog object on the console
    console.log(`2. Print the the dog object on the console`);
    console.log(dog);
    console.log(`\n`);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
    console.log(`3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof`);
    dog.name = "Rowl";
    dog.legs = 4;
    dog.color = "green sage";
    dog.age = 3;
    dog.bark = function () {
      return `woof woof`;
    };
    console.log(`\n`);

// 4. Get name, legs, color, age and bark value from the dog object
    console.log(`Get name, legs, color, age and bark value from the dog object`);
    console.log(dog.name);
    console.log(dog.legs);
    console.log(dog.color);
    console.log(dog.age);
    console.log(dog.bark());
    console.log(`\n`);

// 5. Set new properties the dog object: breed, getDogInfo
    console.log(`5. Set new properties the dog object: breed, getDogInfo`);
    dog.breed = ["Malamute", "Husky"];
    dog.getDogInfo = function () {
      return `Hi, my dog name is ${this.name}. He's ${
        this.age
      } years old from breed ${this.breed.slice(0, 1)} and ${this.breed.slice(
        1
      )}. `;
    };
    console.log(dog.getDogInfo());
    console.log(`\n`);

// ------------------------------ level 2 -------------------------

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// 1. Find the person who has many skills in the users object.
    console.log(`1. Find the person who has many skills in the users object.`);
    let skillSet = 0;
    let username = null;
    Object.keys(users).forEach(name => {
      const user = users[name];
      if(user.skills.length > skillSet){
        skillSet = user.skills.length;
        username = name;
      }
    });
    console.log(`the most skilled person is: ${username} with skills: ${users[username].skills.join(', ')}`);
    console.log(`\n`);

// 2. Count logged in users,count users having greater than equal to 50 points from the following object.
    console.log(`2. Count logged in users,count users having greater than equal to 50 points from the following object.`);
    const userList = [];
    const loggedUser = Object.keys(users).forEach(name => {
      const user = users[name];
      if(user.isLoggedIn == true && user.points >= 50){
        userList.push(user);
      }
    });
    console.log(userList.length);
    console.log(`\n`);

// 3. Find people who are MERN stack developer from the users object
    console.log(`3. Find people who are MERN stack developer from the users object`);
    const updatedUsers = [];
    Object.keys(users).forEach(name => {
      const skills = users[name].skills;
      updatedUsers.push({name, skills});
    });
    console.log(updatedUsers.filter(user => user.skills.includes('MongoDB') && user.skills.includes('Express') && user.skills.includes('React') && user.skills.includes('Node')));
    console.log(`\n`);

// 4. Set your name in the users object without modifying the original users object
    console.log(`4. Set your name in the users object without modifying the original users object`);
    const newUser = {
      email: "example@example.com",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
        'Redis',
        'Docker'
      ],
      age: 20,
      isLoggedIn: true,
      points: 120,
    }
    const newUserList = Object.assign({newUser}, users);
    console.log(newUserList);
    console.log(`\n`);

// 5. Get all keys or properties of users object
    console.log(`5. Get all keys or properties of users object`);
    const userKeys = Object.keys(newUserList);
    console.log(userKeys);
    console.log(`\n`);

// 6. Get all the values of users object
    console.log(`6. Get all the values of users object`);
    const userValues = Object.values(newUserList);
    console.log(userValues);
    console.log(`\n`);

// 7. Use the countries object to print a country name, capital, populations and languages. // answer is on countries.js script
    console.log(`7. Use the countries object to print a country name, capital, populations and languages.`);
    console.log(`\n`);

// ------------------------------ end level 2 -------------------------

// ------------------------------ level 3 -------------------------

// 1. 