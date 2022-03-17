// 1. Create an array - with a name that makes sense - that contains the following items: English, History, Science, PE, Math, Computer Science, World Language. Write a second statement that logs this array to the console.
  const schedule = [`Robert`,`English`,`History`,`Science`,`P.E.`,`Math`,`Computer Science`,`World Language`]
    console.log (schedule);
// 2. Using an array method, add an item to the end of the array for Fine Arts. Log the updated array to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
  schedule.push(`Fine Arts`);
    console.log(schedule);
// 3. Using an array sorting method, arrange the array in alphabetical order and log it to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  schedule.sort()
  console.log(schedule);

// 4. Using bracket notation, output a statement to the console that says something like, `My favorite class is ___________!`
  console.log(`My favorite class is ${schedule[0]}!`);
// 5. Using an array method, output a statement to the console that lets a user know what the first three classes are.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const schedule2 = [`Robert`,`English`, `History`, `Science`,`P.E.`,`Math`,`Computer Science`,`World Language`,`Fine Arts`]
  console.log(`The first three classes are ${schedule2.slice(1, 4)}.`);
// 6. Using an array method, remove the last class from the array and set it equal to a new variable. Then, log the updated version to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

 schedule2.pop();
    schedule3 = schedule2;
    console.log(schedule2);

// 7. Using an array method, add the removed class back and print the updated version to the console.
lastschedule = schedule3.push(`Fine Arts`);

  console.log(schedule3);

// 8. Using dot notation, write a statement that outputs a sentence saying how many items are in the array.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
console.log(`Their are ${schedule3.length} classes.`)

var grades = [89, 91, 78, 98, 82, 83, 98, 100]; // Use this array for the remaining questions

// 9. Using bracket notation, construct a statement that is true comparing two values in the array using the `==` operators.
 89 == [0];
 console.log(89 == [89]);





// 10. Using bracket notation, construct a statement that is false comparing two values in the array using the `>=` operators.
89 >= [1];
console.log(89 >= [91]);
