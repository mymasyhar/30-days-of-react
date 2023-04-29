// ------------------------------ level 2 -------------------------
// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
    console.log(`1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file`);
    const webTechs = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
    ];
    console.log(`\n`);

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
    console.log(`5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.`);
    if(webTechs.indexOf('Sass') > -1){
      console.log('Sass is a CSS preprocessor');
    }else{
      webTechs.push('Sass');
      console.log(webTechs);
    }