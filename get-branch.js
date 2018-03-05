const fs = require('fs')
const path = require('path')

/**
 * Gets the current branch.
 *
 * @returns {string} Branch name
 */
function branch () {
  const headpath = path.join(process.cwd(), '.git/HEAD')
  if (!fs.existsSync(headpath)) {
    console.warn('No HEAD found, aborting.')
    return null
  }
  const headcontent = fs.readFileSync(headpath, 'utf8')
  const branchRegex = /ref: refs\/heads\/(\S+)/
  const branchname = branchRegex.exec(headcontent)
  return branchname && branchname[1]
}

module.exports = branch
