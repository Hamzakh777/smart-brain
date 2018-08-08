const handleId = (req, res, db) =>{
	const {id} = req.params;
	let found = false;
    db.select('*').from('users').where({id})
    .then(user => {
    	if(user.length) {
    		res.json(user[0]);
    		res.status(400).json('user not found')
    	}
    })
    .catch(err => res.status(400).json("user not found"))
}

module.exports = {
    handleId: handleId
}