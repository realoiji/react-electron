const fs = require('fs-extra')

fs.copy('./electronScripts/main.js', './build/electronScripts/main.js').then(() => {
  fs.copy('./electronConfigs/package.json', './build/package.json').then(() => {
    
  })
})
