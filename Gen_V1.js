const fs = require('fs');

// Load the dictionary file into an array
const dictionary = fs.readFileSync('dictionary.txt', 'utf8').split('\n');

// Generate a random phrase using 2 to 6 words from the dictionary
function generatePhrase() {
  const numWords = Math.floor(Math.random() * 5) + 2; // Random number of words between 2 and 6
  const phrase = [];

  for (let i = 0; i < numWords; i++) {
    const wordIndex = Math.floor(Math.random() * dictionary.length);
    phrase.push(dictionary[wordIndex]);
  }

  return phrase.join(' ');
}

// Generate and save an unlimited number of phrases to a file
const phrases = [];
const usedWords = new Set();
while (usedWords.size < dictionary.length * 2) {
  const phrase = generatePhrase();
  console.log(phrase); // Log the generated phrase to the console
  phrases.push(phrase);

  // Add the words in the phrase to the set of used words
  phrase.split(' ').forEach((word) => usedWords.add(word));
}
fs.writeFileSync('phrases.txt', phrases.join('\n'));
