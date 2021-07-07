// ------------------------------------------------------------

var start = Date.now();
setInterval(function() {
    var delta = Date.now() - start; // milliseconds elapsed since start

    output(Math.floor(delta / 1000)); // in seconds
    // alternatively just show wall clock time:
    output(new Date().toUTCString());
}, 1000); // update about every second

// ---------------------------------------------------------------------

