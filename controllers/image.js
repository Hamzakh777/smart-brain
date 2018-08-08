const Clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'd9f1a28f0a2940088c31de51c0c47e41'
});

const handleApiCall = (req, res) => {
	app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.input,{language: 'en'})
	.then(data => {
		res.json(data)
	})
	.catch(err => res.status(400).json('An error happened'))
};

const handleImage = (req, res, db)=> {
	const {id} = req.body;
	db('users').where('id', '=', id)
	.increment('entries', 1)
	.returning('entries')
	.then(entries => {
		res.json(entries[0])
	})
	.catch(err => res.status(400).json('An error happened'))
}

module.exports = {
	handleImage: handleImage,
	handleApiCall: handleApiCall
}