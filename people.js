var peopleList = global.data.peopleList;
var leftList = global.data.leftList;

module.exports = {
	find: function(id) {
		var people;

		people = peopleList.find(function(people) {
			return people.get("id") == id;
		});

		if (people) {
			return people
		}

		people = leftList.find(function(people) {
			return people.get("id") == id;
		});

		return people;
	},

	findByEmail: function(email) {
		var people;

		people = peopleList.find(function(people) {
			return people.get("work_mail") == email;
		});

		if (people) {
			return people
		}

		people = leftList.find(function(people) {
			return people.get("work_mail") == email;
		});

		return people;
	},

	setList: function(list) {
		global.data.peopleList = list;
	},

	setLeftList: function(list) {
		global.data.leftList = list;
	}
};