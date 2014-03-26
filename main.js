var user = require('./server');

user.login(function (err) {
	if(err) {
		console.log(err);
		return;
	}
	
});