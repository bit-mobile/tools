module.exports = {
	getFileIcon: function(filename) {
		var suffix = /[^.]+$/.exec(filename)[0].toLowerCase();
		var all = {
			"apk": "andriod",

			"mp3": "music",
			"wav": "music",
			"mid": "music",

			"js": "code",
			"html": "code",
			"css": "code",
			"java": "code",
			"cpp": "code",
			"h": "code",
			"asp": "code",
			"cs": "code",

			"pdf": "pdf",

			"bmp": "picture",
			"jpg": "picture",
			"jpeg": "picture",
			"png": "picture",
			"gif": "picture",

			"ppt": "ppt",
			"pptx": "ppt",

			"mp4": "video",
			"rm": "video",
			"flv": "video",
			"avi": "video",
			"mpg": "video",
			"mpeg": "video",
			"mov": "video",
			"qt": "video",
			"mkv": "video",

			"doc": "word",
			"docx": "word",
			"txt": "txt",
			"zip": "zip",
			"rar": "zip"
		};
		return all[suffix] || "unrecognized";
	}
}