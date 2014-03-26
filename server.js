var Reddit = require('reddit-api');
var settings = require('./settings');

var Bot = function() {
  var reddit = new Reddit(settings.reddit.agent);
  this.reddit = reddit;
};

Bot.prototype.login = function(callback) {
  this.reddit.login(settings.reddit.user, settings.reddit.password, function (error) {
    if(error) {
      return callback(error);
    }
    return callback();
  });
};

Bot.prototype.startServer = function() {
  //this.reddit.listings()
};