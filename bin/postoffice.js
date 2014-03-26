
var cwd = process.cwd()
var argv = require('minimist')(process.argv.slice(2))
var task = require(argv._[0])

switch( task ){
  case "make":
    break
}