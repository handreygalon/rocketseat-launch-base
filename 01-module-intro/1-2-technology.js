const users = [
    { name: "Carlos", technologies: ["HTML", "CSS"] },
    { name: "Jasmine", technologies: ["JavaScript", "CSS"] },
    { name: "Tuane", technologies: ["HTML", "Node.js"] }
];

for (let user of users) {
    console.log(`${user.name} works with ${user.technologies.join(', ')}`);
}

function checkUseOfCSS(user) {
    for (let technology of user.technologies) {
        if (technology == 'CSS') return true;
    }
    return false;
}

for (let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkUseOfCSS(users[i]);
  
    if (userWorksWithCSS) {
        console.log(`The user ${users[i].name} works with CSS`);
    }
  }