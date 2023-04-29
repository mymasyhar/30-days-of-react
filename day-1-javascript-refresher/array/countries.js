// ------------------------------ level 2 -------------------------
// 1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
    console.log(`1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file`);
    const countries = [
      'Afghanistan',
      'Albania',
      'Algeria',
      'Andorra',
      'Angola',
      'Antigua and Barbuda',
      'Argentina',
      'Armenia',
      'Australia',
      'Austria',
      'Azerbaijan',
      'Bahamas',
      'Bahrain',
      'Bangladesh',
      'Barbados',
      'Belarus',
      'Belgium',
      'Belize',
      'Benin',
      'Bhutan',
      'Bolivia',
      'Bosnia and Herzegovina',
      'Botswana',
      'Brazil',
      'Brunei',
      'Bulgaria',
      'Burkina Faso',
      'Burundi',
      'Cambodia',
      'Cameroon',
      'Canada',
      'Cape Verde',
      'Central African Republic',
      'Chad',
      'Chile',
      'China',
      'Colombi',
      'Comoros',
      'Congo (Brazzaville)',
      'Congo',
      'Costa Rica',
      "Cote d'Ivoire",
      'Croatia',
      'Cuba',
      'Cyprus',
      'Czech Republic',
      'Denmark',
      'Djibouti',
      'Dominica',
      'Dominican Republic',
      'East Timor (Timor Timur)',
      'Ecuador',
      'Egypt',
      'El Salvador',
      'Equatorial Guinea',
      'Eritrea',
      'Estonia',
      'Ethiopia',
      'Fiji',
      'Finland',
      'France',
      'Gabon',
      'Gambia, The',
      'Georgia',
      'Germany',
      'Ghana',
      'Greece',
      'Grenada',
      'Guatemala',
      'Guinea',
      'Guinea-Bissau',
      'Guyana',
      'Haiti',
      'Honduras',
      'Hungary',
      'Iceland',
      'India',
      'Indonesia',
      'Iran',
      'Iraq',
      'Ireland',
      'Israel',
      'Italy',
      'Jamaica',
      'Japan',
      'Jordan',
      'Kazakhstan',
      'Kenya',
      'Kiribati',
      'Korea, North',
      'Korea, South',
      'Kuwait',
      'Kyrgyzstan',
      'Laos',
      'Latvia',
      'Lebanon',
      'Lesotho',
      'Liberia',
      'Libya',
      'Liechtenstein',
      'Lithuania',
      'Luxembourg',
      'Macedonia',
      'Madagascar',
      'Malawi',
      'Malaysia',
      'Maldives',
      'Mali',
      'Malta',
      'Marshall Islands',
      'Mauritania',
      'Mauritius',
      'Mexico',
      'Micronesia',
      'Moldova',
      'Monaco',
      'Mongolia',
      'Morocco',
      'Mozambique',
      'Myanmar',
      'Namibia',
      'Nauru',
      'Nepal',
      'Netherlands',
      'New Zealand',
      'Nicaragua',
      'Niger',
      'Nigeria',
      'Norway',
      'Oman',
      'Pakistan',
      'Palau',
      'Panama',
      'Papua New Guinea',
      'Paraguay',
      'Peru',
      'Philippines',
      'Poland',
      'Portugal',
      'Qatar',
      'Romania',
      'Russia',
      'Rwanda',
      'Saint Kitts and Nevis',
      'Saint Lucia',
      'Saint Vincent',
      'Samoa',
      'San Marino',
      'Sao Tome and Principe',
      'Saudi Arabia',
      'Senegal',
      'Serbia and Montenegro',
      'Seychelles',
      'Sierra Leone',
      'Singapore',
      'Slovakia',
      'Slovenia',
      'Solomon Islands',
      'Somalia',
      'South Africa',
      'Spain',
      'Sri Lanka',
      'Sudan',
      'Suriname',
      'Swaziland',
      'Sweden',
      'Switzerland',
      'Syria',
      'Taiwan',
      'Tajikistan',
      'Tanzania',
      'Thailand',
      'Togo',
      'Tonga',
      'Trinidad and Tobago',
      'Tunisia',
      'Turkey',
      'Turkmenistan',
      'Tuvalu',
      'Uganda',
      'Ukraine',
      'United Arab Emirates',
      'United Kingdom',
      'United States',
      'Uruguay',
      'Uzbekistan',
      'Vanuatu',
      'Vatican City',
      'Venezuela',
      'Vietnam',
      'Yemen',
      'Zambia',
      'Zimbabwe'
    ]
    console.log(`\n`);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
    console.log(`4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.`);
    if(countries.indexOf('Ethiopia') > -1){
      console.log('Ethiopia'.toUpperCase());
    }else{
      countries.push('Ethiopia');
    }

// ------------------------------ end level 2 -------------------------

// ------------------------------ level 3 -------------------------

// 2. Slice the first ten countries from the countries array
    console.log(`2. Slice the first ten countries from the countries array`);
    console.log(countries.sort().slice(0,10));
    console.log(`\n`);

// 3. Find the middle country(ies) in the countries array
    console.log(`3. Find the middle country(ies) in the countries array`);
    console.log(countries.length);
    console.log(countries.sort()[95], countries.sort()[96])
    const middleCountries = countries.sort().slice(countries.length/2-1, countries.length/2+1);
    console.log(middleCountries);
    console.log(`\n`);

// 4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
    console.log(`4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.`);
    let countryGroupA;
    let countryGroupB;
    if(countries.length % 2 === 0){
      countryGroupA = countries.sort().slice(0, countries.length/2-1);
      countryGroupB = countries.sort().slice(countries.length/2+2);
    }else{
      countryGroupA = countries.sort().slice(0, countries.length/2-1);
      countryGroupB = countries.sort().slice(countries.length/2);
    }
    console.log(`countryGroupA : ${countryGroupA}`);
    console.log(`\n`);
    console.log(`countryGroupB : ${countryGroupB}`);

// ------------------------------ end level 3 -------------------------