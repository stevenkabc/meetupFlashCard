const axios = require('axios');
let state = {
	loading: true,
	status: 'loading',
	rsvps: []
};

axios
	.get(
		'https://api.meetup.com/2/rsvps?offset=0&format=json&signed=true&rsvp=yes&event_id=257277862&page=200&fields=&key=7862814232c775b72f12448011388&order=name&desc=false'
	)
	.then(response => {
		state.rsvps = response.data.results;
		return state;
	})
	.then(state => {
		let list = state.rsvps.reduce(
			(mRsvp, r, index) => {
				let memberArray = mRsvp[0];
				let memberPhotosArray = mRsvp[1];

				if (!r.hasOwnProperty('member_photo')) {
					return mRsvp;
				} else {
					let { highres_link, photo_link } = r.member_photo;
					photo_link = highres_link ? highres_link : photo_link;

					memberArray.push(r.member.member_id);
					memberPhotosArray.push({ member_id: r.member.member_id, name: r.member.name, photo_link });

					return [[...memberArray], [...memberPhotosArray]];
				}
			},
			[[], []]
		);

		return list;
	})
	.then(list => console.log(JSON.stringify(list)))
	.catch(error => {
		const err = new Error(error);
		console.log(err);
	});
	.finally()
console.log('hello');
