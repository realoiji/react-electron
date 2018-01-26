const CONFIG = require('../package.json')
const fs = require('fs-extra')
const packager = require('electron-packager')

const options = {
  icon: CONFIG.icns,
  dir: './build',
  out: './electronBuildMac',
  arch: 'x64',
  name: CONFIG.name,
  platform: 'darwin',
  appVersion: CONFIG.version,
  overwrite: true,
  prune: true
}

fs.remove('./electronBuildMac').then(() => {
  fs.copy('./electronScript/main.js', './build/electronScript/main.js').then(() => {
    fs.copy('./package.json', './build/package.json').then(() => {
      packager(options, (err, appPaths) => {
        console.log('Error: ', err)
        console.log('appPaths: ', appPaths)
      })
    })
  })
})
