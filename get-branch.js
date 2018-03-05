const fs = require('fs')
const path = require('path')

const branch = function () {
  const headpath = path.join(process.cwd(), '.git/HEAD')
  if (!fs.existsSync(headpath)) {
    console.warn('No HEAD found, aborting.')
    return null
  }
  const headcontent = fs.readFileSync(headpath, 'utf8')
  const branchname = headcontent.split('/').pop()
  return branchname
}

module.exports = branch
