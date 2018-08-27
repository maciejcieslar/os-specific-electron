const {
  byOS,
  platforms: { WINDOWS, MAC, LINUX },
} = require('./os');

const getHomePath = byOS({
  [MAC]: (username) => {
    return `/Users/${username}`;
  },
  [WINDOWS]: (username) => {
    return `\\Users\\${username}`;
  },
  [LINUX]: () => {
    return `/home/${username}`;
  },
  default: (username) => {
    return `/Users/${username}`;
  },
});

const homePath = getHomePath('maciejcieslar');

console.log(homePath);
