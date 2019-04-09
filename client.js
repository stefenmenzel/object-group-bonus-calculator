const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];


function returnCalculatedBonus(employee){
  //should return an object with employee bonus data 

  let bonusPercent= 0;
  
  if (employee.reviewRating<=2){
    //no bonus

  }else if (employee.reviewRating===3){
    bonusPercent = 0.04;
    //bonus is 4% annual salary

  }else if(employee.reviewRating===4){
    bonusPercent = 0.06;
    //bonus is 6%
  }else if(employee.reviewRating===5){
    bonusPercent = 0.10;
    //bonus is 10%

  }
  
  if(employee.employeeNumber.length ===4){
    bonusPercent += 0.05;
  }

  if(employee.annualSalary>=65000){
    bonusPercent -= 0.01;
  }


}//end returnCalculatedBonus

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
