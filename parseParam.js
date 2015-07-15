module.exports = {
	parse: function(param) {
		var ret = {};
		var items = param.split('&');
		for (var i = 0; i < items.length; i++) {
			var a = items[i];
			if (a) {
				var km = a.split("=");
				ret[km[0]] = km[1];
			}
		}
		return ret;
	},

	stringify: function(param) {
		var retList = [];
		for (var o in param) {
			retList.push(o + "=" + param[o]);
		}
		return retList.join("&");
	},

	parseName: function(path) {
		return /[^\/]+$/.exec(path);
	},

	parseParent: function(path) {
		var i = path.lastIndexOf("/");
		if (i > -1) {
			if (i === 0) {
				return "/";
			} else {
				return path.substr(0, i);
			};
		} else {
			return path;
		}
	}
}