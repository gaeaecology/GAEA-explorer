/*jslint node: true */
"use strict";
var check_daemon = require('GAEAcore/check_daemon.js');

check_daemon.checkDaemonAndRestart('node explorer.js', 'node explorer.js > log');

