const {
  byOS,
  platforms: { WINDOWS, MAC, LINUX },
  byRelease,
  releases: { WIN7, WIN8, WIN10 },
} = require('./os');

const whatIsHeUsing = byOS({
  [MAC]: username => `Hi ${username}! You are using Mac.`,
  [WINDOWS]: username => `Hi ${username}! You are using Windows.`,
  [LINUX]: username => `Hi ${username}! You are using Linux.`,
  default: username => `Hi ${username}! You are using something different.`,
});

console.log(whatIsHeUsing('Maciej Cieslar')); // => Hi Maciej Cieslar! You are using Mac.

const whatWindowsIsHeUsing = byOS({
  [WINDOWS]: byRelease({
    [WIN7]: username => `Hi ${username}! You are using Windows 7.`,
    [WIN8]: username => `Hi ${username}! You are using Windows 8.`,
    [WIN10]: username => `Hi ${username}! You are using Windows 10.`,
  }),
});

console.log(whatWindowsIsHeUsing('Maciej Cieslar')); // => Hi Maciej Cieslar! You are using Windows 7.
