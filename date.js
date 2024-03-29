module.exports = {
	formatDate: function(date, fmt) {

		var o = {
				"M+": date.getMonth() + 1,
				"d+": date.getDate(),
				"h+": date.getHours() % 12 === 0 ? 12 : date.getHours() % 12,
				"H+": date.getHours(),
				"m+": date.getMinutes(),
				"s+": date.getSeconds(),
				"q+": Math.floor((date.getMonth() + 3) / 3),
				"S": date.getMilliseconds()
			},
			week = {
				"0": "\u65e5",
				"1": "\u4e00",
				"2": "\u4e8c",
				"3": "\u4e09",
				"4": "\u56db",
				"5": "\u4e94",
				"6": "\u516d"
			};

		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		}

		if (/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[date.getDay() + ""]);
		}

		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	},

	todayStamp: (function() {
		var date = new Date();
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);
		return +date;
	}()) / 1000,

	convertDate: function(timestamp) {
		var mid = this.todayStamp - timestamp;
		if (mid < 0 && mid > -86400) {
			return this.formatDate(new Date(timestamp * 1000), "hh:mm");
		} else if (mid <= 86400) {
			return "昨天";
		} else if (mid < 7 * 86400) {
			return this.formatDate(new Date(timestamp * 1000), "星期E");
		} else if (mid > 7 * 86400) {
			return this.formatDate(new Date(timestamp * 1000), "M-d");
		} else {
			return this.formatDate(new Date(timestamp * 1000), "yyyy-M-d");
		}
	},

	converDateTime: function(timestamp) {
		var d = new Date(timestamp * 1000);
		return this.formatDate(d, "yyyy-MM-dd HH:mm");
	}
};