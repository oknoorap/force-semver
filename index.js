const semverRegx = require('semver-regex')

module.exports = (version = '1.0.0') => {
  if (version === '') {
    throw new Error('No version defined')
  }

  if (semverRegx().test(version) === false) {
    const splitVersion = version.split('.')
    for (let i = 0; i < 3; i++) {
      if (splitVersion[i] === undefined) {
        splitVersion.push(0)
      }
    }

    version = splitVersion.join('.')
  }

  return version
}
