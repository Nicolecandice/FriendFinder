// DATA
// Below data will hold all of the friends tables.
// Initially we just set it equal to "dummy" customers.

// ===============================================================================

var user1= [{
    name: "Charles Smith",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}];

var user2 = [{
    name: "Sam Thomas",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}];

var user3 = [{
    name: "Mark Wells",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}];

var user4 = [{
    name: "Jake Sleepy",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
}];

var user5 = [{
    name: "Candy",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [3, 1, 4, 3, 5, 1, 4, 5, 4, 2]
}];



// Note how we export the array. This makes it accessible to other files using require.
module.exports = user1, user2, user3, user4, user5;