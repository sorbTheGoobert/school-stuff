import { fifaData } from "./fifa.js";

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

const TeamName = fifaData.find((data) => {
    if (data.Year === 2014 && data.Stage === 'Final') {
        return data
    }
})

console.log(TeamName["Home Team Name"]);
console.log(TeamName["Away Team Name"]);
console.log(TeamName["Home Team Goals"]);
console.log(TeamName["Away Team Goals"]);
console.log(TeamName["Home Team Name"]);

function getFinals(data) {
    return data.filter(function (element) {
        if (element.Stage === 'Final') {
            return element;
        }
    })
}

const finalsData = getFinals(fifaData);
console.log(finalsData);

function getYears(data) {
    return data.map(function (element) { return element.Year });
}

const years = getYears(finalsData);
console.log(years);

function getWinners(data) {
    return data.map(function (element) { return element["Home Team Name"] });
}
const winner = getWinners(finalsData);
console.log(winner);

function getWinnersByYear(data) {
    return data.map(function (element) { return `In ${element.Year}, ${element["Home Team Name"]} won the world cup!` });
}

const winnerStrings = getWinnersByYear(finalsData);
console.log(winnerStrings);

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    return data.reduce(function (total, value) { total += value["Home Team Goals"]; total += value["Away Team Goals"]; return total; }, 0) / data.length;
}

const avarage = getAverageGoals(fifaData);
console.log(avarage);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitial) {
    return data.filter(function (element) { return element.Stage === "Final" && element["Home Team Initials"] === teamInitial }).length;
}

console.log(getCountryWins(fifaData, "BRA"));

/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    const teams = data.filter(function (element) { return element.Stage === "Final" }).sort(function (a, b) {
        let x = a["Home Team Name"].toLowerCase();
        let y = b["Home Team Name"].toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
    });
    return teams;
}

console.log(getGoals(fifaData));

/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
    /* code here */
}

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

const array = [
    { name: "Uruguay", goal: 4 },
    { name: "Italy", goal: 2 },
    { name: "Italy", goal: 4 },
    { name: "Germany FR", goal: 3 },
    { name: "Brazil", goal: 5 },
    { name: "Brazil", goal: 3 },
    { name: "England", goal: 4 },
    { name: "Brazil", goal: 4 },
    { name: "Netherlands", goal: 1 },
    { name: "Argentina", goal: 3 },
    { name: "Italy", goal: 3 },
    { name: "Argentina", goal: 3 },
    { name: "Germany FR", goal: 1 },
    { name: "Brazil", goal: 0 },
    { name: "Brazil", goal: 0 },
    { name: "Germany", goal: 0 },
    { name: "Italy", goal: 1 },
    { name: "Netherlands", goal: 0 },
    { name: "Germany", goal: 1 },
    { name: "Argentina", goal: 2 },
    { name: "Czechoslovakia", goal: 1 },
    { name: "Hungary", goal: 2 },
    { name: "Hungary", goal: 2 },
    { name: "Sweden", goal: 2 },
    { name: "Czechoslovakia", goal: 1 },
    { name: "Germany FR", goal: 2 },
    { name: "Italy", goal: 1 },
    { name: "Germany FR", goal: 2 },
    { name: "Netherlands", goal: 1 },
    { name: "Germany FR", goal: 1 },
    { name: "Germany FR", goal: 2 },
    { name: "Argentina", goal: 0 },
    { name: "Italy", goal: 0 },
    { name: "France", goal: 3 },
    { name: "Brazil", goal: 2 },
    { name: "France", goal: 1 },
    { name: "Spain", goal: 1 },
    { name: "Argentina", goal: 0 },
];

const names = array.map((data) => {
    return Object.values(data.name);
});