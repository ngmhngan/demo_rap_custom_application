sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("demorapcustomapplication.demorapcustomapplication.controller.View1", {
            onInit: function () {
                console.log('in here view 1 controller')
                var oModel = this.getOwnerComponent().getModel();
                this.getView().setModel(oModel);
            },
            onShowHello : function () {
                // show a native JavaScript alert
                alert("Hello World");
             }
        });
    });
