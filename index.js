const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck ]=farmAnimals.split(" ");
const [bessie,, dolly, babe, little ]=farmAnimals.split(" ");
const [blackAndWhite, ,black,pink,,]=farmAnimals.split(" ");

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet]=colors;
const [r, o, y, g, b, , v]=colors;
const [,,,,,indg,,]=colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const {muppetName,color,song,job,partner}=muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const {nestedName, nestedColor,album,nestedJob,nestedPartner}=nestedMuppet;
const {song1,song2,song3,song4}= nestedMuppet.album.theMuppetMovie;

// Strings

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.


// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
