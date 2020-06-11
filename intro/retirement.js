const name = "Silvana";
const gender = "F";
const age = 48;
const contribution = 23;

if (gender == "F") {
    if (age + contribution > 85) {
        console.log(`${name} you can retire`);
    } else {
        console.log(`${name} you can not retire`);
    }
} else {
    if (age + contribution > 95) {
        console.log(`${name} you can retire`);
    } else {
        console.log(`${name} you can not retire`);
    }
}