// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

//   console.log(arrayPrint(drivers));

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
    // console.log(drivers.filter(array => array.toLowerCase().indexOf(name.toLowerCase()) === 0))
    return drivers.filter(array => array.toLowerCase().indexOf(name.toLowerCase()) === 0)
}


function matchName(drivers, name) {
    return drivers.filter((drivers) => drivers.name.toLowerCase() === name.toLowerCase())
}