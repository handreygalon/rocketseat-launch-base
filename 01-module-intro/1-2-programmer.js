const programmer = {
    name: "Handrey",
    age: 28,
    technology: [
        { name: "JavaScript", specialty: "Desktop" },
        { name: "JavaScript", specialty: "Web/Mobile" },
        { name: "C#", specialty: "Desktop" },
        { name: "Python", specialty: "Desktop" },
        { name: "Java", specialty: "Desktop" },
        { name: "PHP", specialty: "Web" }
    ]
}

console.log(`The user ${programmer.name} has ${programmer.age} years old and uses the technology ${programmer.technology[0].name} with specialty in ${programmer.technology[0].specialty}`);
