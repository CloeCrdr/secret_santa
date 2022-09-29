// Define names
const names = ['Chris', 'Cloé', 'Randa', 'Mateo'];

// Function to shuffle array
const shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const randomNames = shuffle(names);

// Match each person with the next one, folding over at the end
const matches = randomNames.map((name, index) => {
  return {
    santa: name,
    receiver: randomNames[index + 1] || randomNames[0],
  }
});

console.log(matches)