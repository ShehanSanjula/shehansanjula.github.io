var _z = console;
Object.defineProperty(window, "console", {
   get: function() {
      if (_z._commandLineAPI) {
         throw "Warning! You are not authorized to access the developer console of Shehan's website."
      }
      return _z;
   },
   set: function(val) {
      _z = val
   }
});
