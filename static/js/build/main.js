define(['./App'], function (_App) {
	'use strict';

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	new Vue({
		el: '#app',
		render: function render(h) {
			return h(_App2.default);
		}
	});
});