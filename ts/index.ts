/// <reference path="typings/tsd.d.ts" />
var through = require("through2");
var path = require("path");

var assetversion:any = {};

assetversion.get = function () {
    return through.obj((file, enc, cb) => {

        //run callback function to signal end of plugin process.
        return cb(null, file);
    });
};

assetversion.set = function () {
    return through.obj((file, enc, cb) => {

        //run callback function to signal end of plugin process.
        return cb(null, file);
    });
};

module.exports = assetversion;