module.exports = {
	on: function(eventType, handler) {
		//事件的存储
		if (!this.eventMap) {
			this.eventMap = {};
		}

		//对每个事件，允许添加多个监听
		if (!this.eventMap[eventType]) {
			this.eventMap[eventType] = [];
		}

		//把回调函数放入事件的执行数组
		this.eventMap[eventType].push(handler);
	},

	off: function(eventType, handler) {
		for (var i = 0; i < this.eventMap[eventType].length; i++) {

			if (this.eventMap[eventType][i] === handler) {
				this.eventMap[eventType].splice(i, 1);
				break;
			}
		}
	},

	trigger: function(event) {
		var eventType = event.type;

		if (!this.eventMap || !this.eventMap[eventType]) {
			return;
		}

		for (var i = 0; i < this.eventMap[eventType].length; i++) {

			//把对当前事件添加的处理函数拿出来挨个执行
			this.eventMap[eventType][i](event);
		}
	}
};