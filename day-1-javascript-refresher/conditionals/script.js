// ------------------------------ level 1 -------------------------

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
    console.log(`1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.`);
    // const age = prompt('Entery your age:');
    // age >= 18 ? console.log(`you are old enough to drive`) : console.log(`you are left ${18-age} years to drive`);
    console.log(`\n`);

// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    console.log(`2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.`);
    /*
    const myAge = prompt('My age:')
    const yourAge = 30;
    if(myAge > yourAge){
      console.log(`you are ${myAge - yourAge} years older than me`);
    }else{
      console.log(`you are ${yourAge - myAge} years younger than me`);
    }
    */
    console.log(`\n`);

// 3. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
    console.log(`3. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.`);
    /*
    const a = prompt('enter a:')
    const b = prompt('enter b:')
    if(a > b){
      console.log(`${a} is greater than ${b}`)
    }else{
      console.log(`${b} is greater than ${a}`);
    }
    */
    console.log(`\n`);

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
    console.log(`4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?`);
    /*
    const number = prompt('enter number:');
    if(number % 2 == 0){
      console.log(`${number} is an even number`);
    }else{
      console.log(`${number} is an odd number`);
    }
    */
    console.log(`\n`);

// ------------------------------ end level 1 -------------------------

// ------------------------------ level 2 -------------------------

// 1. Write a code which can give grades to students according to theirs scores:
    /*
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
    */
    console.log(`1. Write a code which can give grades to students according to theirs scores:
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F`);
    /*
    let scores = prompt('enter score');
    scores > 90 ?
      console.log('A')
      : scores > 70 ?
      console.log('B')
      : scores > 60 ?
      console.log('C')
      : scores > 50 ?
      console.log('D') : console.log('F');
    */
    console.log(`\n`);

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
      /*
      September, October or November, the season is Autumn.
      December, January or February, the season is Winter.
      March, April or May, the season is Spring
      June, July or August, the season is Summer
      */
    console.log(`Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer`);
    /*
    let season = prompt('enter month:');
    switch(season.toLowerCase()){
      case 'september':
      case 'october':
      case 'november':
        console.log('the season is Autumn');
        break;
      case 'december':
      case 'january':
      case 'february':
        console.log('the season is Winter')
        break;
      case 'march':
      case 'april':
      case 'may':
        console.log('the season is Spring');
        break;
      case 'june':
      case 'july':
      case 'august':
        console.log('the season is Summer');
        break;
      default:
        console.log('you are not at the earth');
        break;
    }
    */
    console.log(`\n`);

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
    console.log(`3. Check if a day is weekend day or a working day. Your script will take day as an input.`);
    /*
    const day = prompt('enter day');
    switch(day.toLowerCase()){
      case 'monday':
      case 'tuesday':
      case 'wednesday':
      case 'thursday':
      case 'friday':
        console.log(`${day.split(' ').map(([first, ...rest]) => first.toUpperCase()+rest.join('')).join(' ')} is a working day`);
        break;
      case 'saturday':
      case 'sunday':
        console.log(`${day.split(' ').map(([first, ...rest]) => first.toUpperCase()+rest.join('')).join(' ')} is a weekend`);
        break;
      default:
        console.log(`i'm so sure you are on at the earth right now!`);
        break;
    }
    */
    console.log(`\n`);

// ------------------------------ end level 2 -------------------------

// ------------------------------ level 3 -------------------------

// 1. Write a program which tells the number of days in a month. (include year leap)
    console.log(`1. Write a program which tells the number of days in a month.`);
    const month = prompt('enter month:');
    const year = prompt('enter year:');
    switch(month.toLowerCase()){
      case 'january':
      case 'march':
      case 'may':
      case 'july':
      case 'august':
      case 'october':
      case 'december':
        console.log(`${month.split(' ').map(([first, ...rest]) => first.toUpperCase()+rest.join('')).join(' ')} have 31 days`);
        break;
      case 'february':
        console.log(`${month.split(' ').map(([first, ...rest]) => first.toUpperCase() + rest.join('')).join(' ')} have 2${year%4 == 0 ? '9' : '8'} days`);
        break;
      case 'april':
      case 'june':
      case 'september':
      case 'november':
        console.log(`${month.split(' ').map(([first, ...rest]) => first.toUpperCase() + rest.join('')).join(' ')} have 30 days`);
        break;
      default:
        console.log('you are not at the earth sir');
        break;
    }
    console.log(`\n`);

// ------------------------------ end level 3 -------------------------