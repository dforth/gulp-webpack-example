
export default {

  logIt: function logIt(message, withAlert = false) {

    console.log(`LogIt: ${message}`);

    if(withAlert) {

        alert(`LogIt: ${message}`);
    }

  }
};
