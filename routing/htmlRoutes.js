module.exports = function(app, path) {
	var publicPath = '../public/';

	app.get("/", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "index.html"));
	});

	app.get("/history", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "history.html"));
	});


	app.get("/coaches", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "coaches.html"));
	});

	app.get("/hall-of-fame", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "hall-of-fame.html"));
	});

	app.get("/rules", function(req, res) {
	    res.sendFile(path.join(__dirname, publicPath + "rules.html"));
	});

	// app.get("*", function(req, res) {
	//     res.redirect('/');
	// });

	
}
