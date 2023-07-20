'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoiZDM3IiwiYSI6ImNsanp5YTMwcTBndG0zaG1tdWE4dzIwcmgifQ.vXCITN3Pc7IBl9ONr4nTkQ',
  CSV: './CBOd37.csv',
  center: [-73.903, 40.684], // [lng, lat]
  zoom: 13, // zoom extent
  title: 'District 37 Community Based Organizations',
  description:
    'This is a growing list of organizations serving District 37. Use the Show Filters button to filter by age and type. If you would like to help expand our list, feel free to click "Improve This Map," located at the bottom right.',
  sideBarInfo: ['Location_Name', 'Address', 'Description', 'Phone', 'URL'],
  popupInfo: ['Location_Name'],
  filters: [
    {
      type: 'dropdown',
      title: 'Demographic: ',
      columnHeader: 'Demographics', // Case sensitive - must match spreadsheet entry
      listItems: ['Youths', 'Adults', 'Seniors', 'Family','Latinx/Hispanic'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Type: ',
      columnHeader: 'Type',
      listItems: [
        'Adoption/Foster Services',
        'Art',
        'Community Center',
        'Education',
        'Employment',
        'Family Support',
        'Finances',
        'Food',
        'Health',
        'Housing',
        'Immigrant Resources',
        'Latinx/Hispanic Resources',
        'Legal Services',
        'Mental Health',
        'Senior Center',
        'Small Business Support',
        'Transportation',
        'Religious',
      ],
    },
  ],
};
