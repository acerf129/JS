//no null and undefined
var id=1001;
var first_name=req.body.first_name;
connection.query(
    'UPDATE users SET first_name = ? WHERE id = ?',
    [first_name, Number(id)],
    function(err, result) {
	      //...
    }
);