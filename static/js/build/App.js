define(["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		render: function render() {
			var h = arguments[0];

			return h("div", [h("h1", ["Hello World!"])]);
		}
	};
});