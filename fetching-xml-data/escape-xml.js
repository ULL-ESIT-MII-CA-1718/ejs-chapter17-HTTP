		var XML_CHAR_MAP = {
			'<': '&lt;',
			'>': '&gt;',
			'&': '&amp;',
			'"': '&quot;',
			"'": '&apos;'
		};

		function escapeXml (s) {
			return s.replace(/[<>&"']/g, function (ch) {
				return XML_CHAR_MAP[ch];
			});
		}
