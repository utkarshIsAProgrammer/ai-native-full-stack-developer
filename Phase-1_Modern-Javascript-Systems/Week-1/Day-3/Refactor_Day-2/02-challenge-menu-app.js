// CLI Main Menu Simulation

const prompt = require('prompt-sync')({ sigint: true });

// Main function to run the app
function runApp() {
  displayMenu();
  const choice = getUserChoice();
  handleUserChoice(choice);
}

// Function to display the CLI menu
function displayMenu() {
  console.log('Welcome to the CLI Menu App!');
  console.log('----------------------------');
  console.log('1. View Profile');
  console.log('2. Edit Settings');
  console.log('3. Log Out');
  console.log('----------------------------');
}

// Function to get user input
function getUserChoice() {
  return prompt('Enter your choice (1-3): ');
}

// Function to handle user's choice
function handleUserChoice(choice) {
  switch (choice) {
    case '1':
      viewProfile();
      break;
    case '2':
      editSettings();
      break;
    case '3':
      logOut();
      break;
    default:
      console.log('❌ Invalid choice. Please enter a number from 1 to 3.');
  }
}

// Individual actions
function viewProfile() {
  console.log("✅ You have selected 'View Profile'.");
  console.log('Displaying your user profile...');
}

function editSettings() {
  console.log("✅ You have selected 'Edit Settings'.");
  console.log('Opening the settings panel...');
}

function logOut() {
  console.log("✅ You have selected 'Log Out'.");
  console.log('Logging you out now...');
}

// Start the CLI app
runApp();
