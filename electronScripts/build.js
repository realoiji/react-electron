const CONFIG = require('./package.json')
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
  fs.copy('./electronScripts/main.js', './build/electronScripts/main.js').then(() => {
    fs.copy('./electronScripts/package.json', './build/electronScripts/package.json').then(() => {
      packager(options, (err, appPaths) => {
        console.log('Error: ', err)
        console.log('appPaths: ', appPaths)
      })
    })
  })
})
