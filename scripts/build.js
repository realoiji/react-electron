const fs = require('fs-extra')

fs.copy('./electronScripts/main.js', './build/electronScripts/main.js').then(() => {
  fs.copy('./electronScripts/package.json', './build/package.json').then(() => {
    
  })
})
