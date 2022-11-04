sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("demorapcustomapplication.demorapcustomapplication.controller.App", {
        onInit() {
          console.log('Controller of App')
          //console.log(this.getView())
        }
      });
    }
  );
  