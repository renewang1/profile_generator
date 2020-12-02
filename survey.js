const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? ', (superpower) => {
              console.log(`Here is your profile:`);
              console.log(`${name} loves listening to ${music} while doing ${activity}, ` +
              `devouring ${food} for ${meal}, prefers ${sport} over any sport, and is amazing at ${superpower}`)
              rl.close();
            });
          });
        });
      });
    });
  });
});
