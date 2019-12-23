"use strict";
exports.__esModule = true;
var lighthouse = require('lighthouse');
var chromeLauncher = require('chrome-launcher');
exports.lighthouseHelper = function (url, opts, config) {
    if (config === void 0) { config = null; }
    return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then(function (chrome) {
        opts.port = chrome.port;
        return lighthouse(url, opts, config).then(function (results) {
            // use results.lhr for the JS-consumeable output
            // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
            // use results.report for the HTML/JSON/CSV output as a string
            // use results.artifacts for the trace/screenshots/other specific case you need (rarer)
            return chrome.kill().then(function () { return results.lhr; });
        });
    });
};
