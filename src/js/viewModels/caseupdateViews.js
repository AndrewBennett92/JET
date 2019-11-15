/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['knockout', 'appController', 'dataService', 'ojs/ojrouter', 'ojs/ojbootstrap', 'ojs/ojmodule-element-utils',
   'ojs/ojknockout',
   'ojs/ojnavigationlist',
   'ojs/ojswitcher',
   'ojs/ojradioset',
   'ojs/ojlabel'],
   function (ko, app, data, Router, Bootstrap, moduleUtils) {
      function CaseUpdateViews() {
         var self = this;

         // Header Config
         self.headerConfig = ko.observable({ 'view': [], 'viewModel': null });
         moduleUtils.createView({ 'viewPath': 'views/header.html' }).then(function (view) {
            self.headerConfig({ 'view': view, 'viewModel': new app.getHeaderModel() })
         })

        /*  var routerConfig =
         {
            'details': { label: 'Detail', isDefault: true },
            'caseupdate_parts': { label: 'Parts' },
            'caseupdate_labor': { label: 'Labor' }
            
         };

         // Create and configure the router
         this.custRouter = app.router.createChildRouter('cust').configure(routerConfig);

         var initial = true;
         var self = this;
         self.moduleConfig = ko.observable({ 'view': [], 'viewModel': null });

         // This is the main logic to switch the module based on both router states.
         ko.computed(function () {
            // create subscription to changes in states for both routers
            var customerState = self.custRouter.currentState();

            if (initial) {
               // nothing to load on inital call
               initial = false;
            }
            else {
               // update module config for oj-module on customers page
               var moduleName, viewModelParams = {};
               //moduleName = "caseupdate_detail";
               moduleName = self.custRouter.moduleConfig.name();
               viewModelParams['data'] = self.custRouter.currentValue.peek() || {};
               viewModelParams['parentRouter'] = self.custRouter;
               console.log("viewModelParams", viewModelParams);
               // load view and view model and update the moduleConfig for 'customers'
               var viewPath = 'views/' + moduleName + '.html';
               var modelPath = 'viewModels/' + moduleName;
               var masterPromise = Promise.all([
                  moduleUtils.createView({ 'viewPath': viewPath }),
                  moduleUtils.createViewModel({ 'viewModelPath': modelPath })
               ]);
               masterPromise.then(
                  function (values) {
                     console.log("values", values);
                     var viewModel = typeof values[1] === 'function' ? new values[1](self.custRouter) : values[1];
                     self.moduleConfig({ 'view': values[0], 'viewModel': viewModel });
                  }
               );
            }
         });
 */
         //Get case details
         //   self.fetch_case = function () {
 


         // Below are a set of the ViewModel methods invoked by the oj-module component.
         // Please reference the oj-module jsDoc for additional information.
         //Custom Code

         /**
          * Optional ViewModel method invoked after the View is inserted into the
          * document DOM.  The application can put logic that requires the DOM being
          * attached here.
          * This method might be called multiple times - after the View is created
          * and inserted into the DOM and after the View is reconnected
          * after being disconnected.
          */
         self.connected = function () {
            // Implement if needed
     /*        Router.sync().then(
               null,
               function (error) {
                  Logger.error('Error during refresh: ' + error.message);
               }
            ); */
         };

         /**
          * Optional ViewModel method invoked after the View is disconnected from the DOM.
          */
         self.disconnected = function () {
            // Implement if needed
           // self.custRouter.dispose();
         };

         /**
          * Optional ViewModel method invoked after transition to the new View is complete.
          * That includes any possible animation between the old and the new View.
          */
         self.transitionCompleted = function () {
            // Implement if needed
         };
      }

      /*
       * Returns a constructor for the ViewModel so that the ViewModel is constructed
       * each time the view is displayed.  Return an instance of the ViewModel if
       * only one instance of the ViewModel is needed.
       */
      return new CaseUpdateViews();
   }
);
