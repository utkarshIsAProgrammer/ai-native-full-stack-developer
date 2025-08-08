// CLI Main Menu Simulation

const prompt = require('prompt-sync')({ sigint: true });

function showMenu() {
  console.log('Welcome to the CLI Menu App!');
  console.log('----------------------------');
  console.log('1. View Profile');
  console.log('2. Edit Settings');
  console.log('3. Log Out');
  console.log('----------------------------');

  let choice = prompt('Enter your choice (1-3):');

  // The switch statement evaluates the user's choice
  switch (choice) {
    case '1':
      console.log("You have selected 'View Profile'.");
      console.log('Displaying your user profile...');
      break;
    case '2':
      console.log("You have selected 'Edit Settings'.");
      console.log('Opening the settings panel...');
      break;
    case '3':
      console.log("You have selected 'Log Out'.");
      console.log('Logging you out now...');
      break;
    default:
      console.log('Invalid choice. Please enter a number from 1 to 3.');
  }
}

showMenu();
