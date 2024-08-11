let studentsData = [['Sara', 23],['Jack', 24],];

// adding element at index 1
studentsData.splice(0,2,['mark', 24])

console.log(studentsData); // [['Sara', 23], ["Mark", 24], ['Jack', 24]]