const CONFIG = require('../package.json')
const fs = require('fs-extra')
const packager = require('electron-packager')

const options = {
  icon: CONFIG.icon,
  dir: './build',
  out: './electronBuild',
  arch: 'ia32',
  name: CONFIG.name,
  platform: 'win32',
  appVersion: CONFIG.version,
  overwrite: true,
  prune: true
}

fs.remove('./electronBuild').then(() => {
  fs.copy('./electronScript/main.js', './build/electronScript/main.js').then(() => {
    fs.copy('./package.json', './build/package.json').then(() => {
      packager(options, (err, appPaths) => {
        console.log('Error: ', err)
        console.log('appPaths: ', appPaths)
      })
    })
  })
})
