const name = "Silvana";
const gender = "F";
const age = 48;
const contribution = 23;

const contributionCalc = age + contribution;

const manCanRetire = gender == 'M' && contribution >= 35 && contributionCalc >= 95;
const womanCanRetire = gender == 'F' && contribution >= 30 && contributionCalc >= 85;

if (manCanRetire || womanCanRetire) {
    console.log(`${name} you can retire.`);
} else {
    console.log(`${name} you can not retire.`);
}
