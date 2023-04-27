// ------------------------------ level 1 -------------------------
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
];

// 1. Declare an empty array;
    console.log(`1. Declare an empty array;`);
    const newArray = [];
    console.log(newArray);
    console.log(`\n`);

// 2. Declare an array with more than 5 number of elements
    console.log(`2. Declare an array with more than 5 number of elements`);
    const array = ['value1', 'value2', 'value3', 'value4', 'value5', 'value6', 'value7'];
    console.log(array);
    console.log(`\n`)

// 3. Find the length of your array
    console.log(`3. Find the length of your array`);
    console.log(`the length of these array is: ${array.length}`);
    console.log(`\n`);

// 4. Get the first item, the middle item and the last item of the array
    console.log(`4. Get the first item, the middle item and the last item of the array`);
    console.log(`first item: ${array[0]}\nmiddle item: ${array[Math.floor(array.length/2)]}\nlast item: ${array[array.length-1]}`);
    console.log(`\n`);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    console.log(`5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5`);
    const mixedDataTypes = [true, 'hello', 42, null, {name: 'John Doe'}, ['apple', 'banana']];
    console.log(mixedDataTypes);
    console.log(mixedDataTypes.length);
    console.log(`\n`);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    console.log(`6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon`);
    const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
    console.log(`\n`);

// 7. Print the array using console.log()
    console.log(`7. Print the array using console.log()`);
    console.log(itCompanies);
    console.log(`\n`);

// 8. Print the number of companies in the array
    console.log(`8. Print the number of companies in the array`);
    console.log(itCompanies.length);
    console.log(`\n`);

// 9. Print the first company, middle and last company
    console.log(`9. Print the first company, middle and last company`);
    console.log(`first company: ${itCompanies[0]}\nmiddle company: ${itCompanies[Math.floor(itCompanies.length/2)]}\nlast company: ${itCompanies[itCompanies.length-1]}`);
    console.log(`\n`);

// 10. Print out each company
    console.log(`10. Print out each company`);
    itCompanies.forEach(company => {
      console.log(`${company}`);
    });
    console.log(`\n`);

// 11. Change each company name to uppercase one by one and print them out
    console.log(`11. Change each company name to uppercase one by one and print them out`);
    itCompanies.forEach(company => {
      company.toUpperCase();
      console.log(company.toUpperCase());
    });
    console.log(itCompanies);
    console.log(`\n`);

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    console.log(`12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.`);
    console.log(`${itCompanies.join(', ')} are big IT companies`);
    console.log(`\n`);

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    console.log(`13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found`);
    function existedCompany(name){
      if(itCompanies.includes(name)){
        return name;
      }else{
        return `${name} is not found`;
      }
    }
    console.log(existedCompany('Masyhar Inc.'));
    console.log(`\n`);

// 14. Filter out companies which have more than one 'o' without the filter method
    console.log(`14. Filter out companies which have more than one 'o' without the filter method`);
    function filterO(data){
      let company = [];
      for(let i=0; i<data.length;i++){
        let count = 0;
        for(let j=0; j<data[i].length; j++){
          if(data[i][j] === 'o'){
            count +=1;
          }
        }
        if(count > 1){
          company.push(data[i]);
        }
      }
      return company;
    }
    console.log(filterO(itCompanies));
    console.log(`\n`);

// 15. Sort the array using sort() method
    console.log(`15. Sort the array using sort() method`);
    itCompanies.sort();
    console.log(itCompanies);
    console.log(`\n`);

// 16. Reverse the array using reverse() method
    console.log(`16. Reverse the array using reverse() method`);
    itCompanies.reverse();
    console.log(itCompanies);
    console.log(`\n`);

// 17. Slice out the first 3 companies from the array
    console.log(`17. Slice out the first 3 companies from the array`);
    // console.log(itCompanies.slice(0,3));
    console.log(`\n`);

// 18. Slice out the last 3 companies from the array
    console.log(`18. Slice out the last 3 companies from the array`);
    // console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length));
    console.log(`\n`);

// 19. Slice out the middle IT company or companies from the array
    console.log(`19. Slice out the middle IT company or companies from the array`);
    // console.log(itCompanies.slice(Math.floor(itCompanies.length/2-1), Math.floor(itCompanies.length/2+2)));
    console.log(`\n`);

// 20. Remove the first IT company from the array
    console.log(`20. Remove the first IT company from the array`);
    console.log(itCompanies.length);
    // console.log(itCompanies.splice(1,itCompanies.length-1));
    console.log(`\n`);

// 21. Remove the middle IT company or companies from the array
    console.log(`21. Remove the middle IT company or companies from the array`);
    const middleIndex = Math.floor(itCompanies.length/2);
    console.log(itCompanies);
    // console.log(itCompanies.splice(middleIndex-1, 3));
    console.log(itCompanies);

// 22. Remove the last IT company from the array
    console.log(`22. Remove the last IT company from the array`);
    const lastIndex = Math.floor(itCompanies.length -1);
    console.log(itCompanies.splice(lastIndex, 1));
    console.log(itCompanies);
    console.log(`\n`);

// 23. Remove all IT companies
    console.log(`23. Remove all IT companies`);
    console.log(itCompanies.splice());