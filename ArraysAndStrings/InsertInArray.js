let dailyActivities = [ 'eat', 'sleep', 'play'];

// this will add the new element 'running' at the 4 index
dailyActivities[4] = 'mess';

console.log(dailyActivities); // ["eat", "sleep", "play", undefined, "running"]
console.log(dailyActivities[3]);