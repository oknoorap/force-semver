# :rage: force-semver
Force non-semver version to semver

## Install
```bash
#Yarn
yarn add force-semver

#NPM
npm install force-semver --save
```

## Usage
```javascript
const forceSemver = require('forceSemver')

// Output: 1.0.0
forceSemver('1')

// Output: 1.0.0
forceSemver('1.0')

// Output: 1.2.3-alpha.10.beta.0+build.unicorn.rainbow
forceSemver('1.2.3-alpha.10.beta.0+build.unicorn.rainbow')
```

## License
MIT © [oknoorap](https://github.com/oknoorap)
