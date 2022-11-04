/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo_rap_custom_application/demo_rap_custom_application/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
