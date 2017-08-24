import test from 'ava'
import forceSemver from './index'

test('convert non-semver with only major version to semver', t => {
  t.is(forceSemver('1'), '1.0.0')
})

test('convert non-semver with minor version to semver', t => {
  t.is(forceSemver('1.0'), '1.0.0')
})

test('keep semver version', t => {
  t.is(forceSemver('1.2.3-alpha.10.beta.0+build.unicorn.rainbow'), '1.2.3-alpha.10.beta.0+build.unicorn.rainbow')
})
