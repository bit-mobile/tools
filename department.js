module.exports = {
	find: function(id) {
		var people;

		people = global.data.departmentList.find(function(obj) {
			return obj.get("id") == id;
		});

		return people;
	},

	findByEmail: function(email) {
		var people;

		people = global.data.departmentList.find(function(obj) {
			return obj.get("work_mail") == email;
		});

		return people;
	}
};