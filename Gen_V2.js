const fs = require('fs');

// Load the dictionaries into arrays
const nouns = fs.readFileSync('nouns.txt', 'utf8').split('\n');
const verbs = fs.readFileSync('verbs.txt', 'utf8').split('\n');
const adjectives = fs.readFileSync('adjectives.txt', 'utf8').split('\n');

// Generate a random phrase using 2 to 6 words from the dictionaries
function generatePhrase() {
  const numWords = Math.floor(Math.random() * 5) + 2; // Random number of words between 2 and 6
  const phrase = [];

  for (let i = 0; i < numWords; i++) {
    // Select a random word from one of the dictionaries
    const wordType = Math.floor(Math.random() * 3); // Random number between 0 and 2
    let word;
    if (wordType === 0) {
      word = nouns[Math.floor(Math.random() * nouns.length)];
    } else if (wordType === 1) {
      word = verbs[Math.floor(Math.random() * verbs.length)];
    } else {
      word = adjectives[Math.floor(Math.random() * adjectives.length)];
    }

    phrase.push(word);
  }

  return phrase.join(' ');
}

// Generate and save an unlimited number of phrases to a file
const phrases = [];
while (true) {
  const phrase = generatePhrase();
  console.log(phrase); // Log the generated phrase to the console
  phrases.push(phrase);

  // Check if all words have been used at least twice
  if (phrases.filter((p) => p === phrase).length >= 2) {
    break;
  }
}
fs.writeFileSync('phrases.txt', phrases.join('\n'));
