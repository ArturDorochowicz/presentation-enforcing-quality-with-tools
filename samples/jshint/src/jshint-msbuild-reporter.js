// http://blogs.msdn.com/b/msbuild/archive/2006/11/03/msbuild-visual-studio-aware-error-messages-and-message-formats.aspx
// http://jshint.com/docs/reporters/

'use strict';

module.exports = {
   reporter: function (results) {

      results.forEach(function (result) {
         var error = result.error;
         var origin = result.file + '(' + error.line + ',' + error.character + ')';
         var category = error.id === '(error)' ? 'error' : error.id;
         var code = error.code;
         var text = error.reason;

         console.log(origin + ': ' + category + ' ' + code + ': ' + text);
      });
   }
};
