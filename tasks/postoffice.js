/*
 * grunt-postoffice
 *
 * Copyright (c) 2014 tunderdomb
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ){


  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('postoffice', 'No description', function (){

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
    })

    // Iterate over all specified file groups.
    this.files.forEach(function ( filePair ){
      var isExpandedPair = filePair.orig.expand || false

      filePair.src.forEach(function ( src ){
      })
    })
  })
}