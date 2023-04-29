// ------------------------------ level 1 -------------------------
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
    console.log(`\n`);

// ------------------------------ end level 1 -------------------------

// ------------------------------ level 2 -------------------------

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
    console.log(`2. First remove all the punctuations and change the string to array and count the number of words in the array`);
    let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
    const result = (text.replace(/[.,$]/gm , '')).split(' ');
    console.log(result);
    console.log(`total words: ${result.length}`);
    console.log(`\n`);

// 3. In the following shopping cart add, remove, edit items
    console.log(`In the following shopping cart add, remove, edit items`);
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

    console.log(`i. add 'Meat' in the beginning of your shopping cart if it has not been already added`);
    if(shoppingCart.indexOf('Meat') == -1){
      shoppingCart.unshift('Meat');
      console.log(shoppingCart);
    }else{
      console.log(shoppingCart)
    }
    console.log(`\n`);

    //ii. add Sugar at the end of you shopping cart if it has not been already added
    console.log(`ii. add Sugar at the end of you shopping cart if it has not been already added`);
    if(shoppingCart.indexOf('Sugar') == -1){
      shoppingCart.push('Sugar');
      console.log(shoppingCart);
    }else{
      console.log(shoppingCart);
    }
    console.log(`\n`);

    //iii. remove 'Honey' if you are allergic to honey
    console.log(`iii. remove 'Honey' if you are allergic to honey`);
    if(shoppingCart.indexOf('Honey') > -1){
      shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
      console.log(shoppingCart);
    }else{
      console.log(shoppingCart);
    }
    console.log(`\n`);

    //iv. modify Tea to 'Green Tea'
    console.log(`iv. modify Tea to 'Green Tea'`);
    if(shoppingCart.indexOf('Tea') > -1){
      shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
    };
    console.log(shoppingCart);
    console.log(`\n`);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
    console.log(`answer is on countries.js script`);
    console.log(`\n`);

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
    console.log(`answer is on webTechs.js script`);
    console.log(`\n`);

// 6. Concatenate the following two variables and store it in a fullStack variable.
    console.log(`6. Concatenate the following two variables and store it in a fullStack variable.`);
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node', 'Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd)
    console.log(fullStack);
    console.log(`\n`);

// ------------------------------ end level 2 -------------------------

// ------------------------------ level 3 -------------------------
// 1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]  - Sort the array and find the min and max age - Find the median age(one middle item or two middle items divided by two) - Find the average age(all items divided by number of items) - Find the range of the ages(max minus min) - Compare the value of (min - average) and (max - average), use abs() method
    console.log(`1. The following is an array of 10 students ages: js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]`);
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    console.log(`\n`);

    // - Sort the array and find the min and max age
    console.log(`- Sort the array and find the min and max age`);
    console.log(`min age: ${ages.sort()[0]}\nmax age: ${ages.sort()[ages.length-1]}`);
    console.log(`\n`);

    // - Find the median age(one middle item or two middle items divided by two) 
    console.log(`- Find the median age(one middle item or two middle items divided by two) `);
    console.log(ages.sort());
    console.log(`median: ${ages.sort().slice(ages.length/2-1, ages.length/2+1)}`);
    console.log(`\n`);

    // - Find the average age(all items divided by number of items) 
    console.log(`- Find the average age(all items divided by number of items)`);
    const average = ages.reduce((a,b) => (a + b), 0)/ages.length;
    console.log(`average: ${average}`);
    console.log(`\n`);

    // - Find the range of the ages(max minus min)
    console.log(`- Find the range of the ages(max minus min)`);
    const max = ages.sort()[ages.length-1];
    const min = ages.sort()[0]
    console.log(`range: ${max - min}`);
    console.log(`\n`);

    // - Compare the value of (min - average) and (max - average), use abs() method
    console.log(`- Compare the value of (min - average) and (max - average), use abs() method`);
    console.log(`min - average: ${Math.abs(min-average).toFixed(2)}\nmax - average: ${Math.abs(max-average).toFixed(2)}`);
    console.log(`\n`);


// ------------------------------ end level 3 -------------------------

