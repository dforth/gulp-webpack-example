
import Util from './util/util.js';

window.onload = function() {

  var testButton = document.getElementById('testButton');

  if (testButton) {

    testButton.addEventListener('click', function (event) {

      Util.logIt('Clicky Clicky', true);

    }.bind(this));

  }

};
