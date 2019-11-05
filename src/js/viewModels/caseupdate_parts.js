/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['knockout', 'appController', 'dataService', 'ojs/ojmodule-element-utils', 'ojs/ojrouter',
  'ojs/ojknockouttemplateutils', 'ojs/ojanimation', 'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojformlayout', 'ojs/ojinputtext'],
  function (ko, app, data, moduleUtils, Router, KnockoutTemplateUtils, AnimationUtils) {

    function CaseUpdatePartsViewModel() {
      var self = this;

      this.KnockoutTemplateUtils = KnockoutTemplateUtils;

      // Header Config
      self.headerConfig = ko.observable({ 'view': [], 'viewModel': null });
      moduleUtils.createView({ 'viewPath': 'views/header.html' }).then(function (view) {
        self.headerConfig({ 'view': view, 'viewModel': new app.getHeaderModel() })
      })

      self.partsGrid = ko.observableArray();
      self.partsData = ko.observableArray();

      //Handle popup for adding part
      this.startAnimationListener = function (event) {
        var ui = event.detail;
        if (event.target.id !== "popup1")
          return;

        if ("open" === ui.action) {
          event.preventDefault();
          var options = { "direction": "top" };
          AnimationUtils.slideIn(ui.element, options).then(ui.endCallback);
        }
        else if ("close" === ui.action) {
          event.preventDefault();
          ui.endCallback();
        }
      }.bind(this);
      this.openListener = function (event) {
        var popup = document.getElementById('popup1');
        popup.open('#btnGo');
      }.bind(this);
      this.cancelListener = function (event) {
        var popup = document.getElementById('popup1');
        popup.close();
      }.bind(this);
      //


      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      self.connected = function () {
        self.fs_P17730_W17730A = ko.observable(data.getAISResponse("fs_P17730_W17730A"));
        if (typeof self.fs_P17730_W17730A() === 'undefined' || self.fs_P17730_W17730A() === null) {
          //AIS Call is not present, error handling.
          console.log("Parts List not retrieved");
        } else {
          //AIS Call has taken place, display data from session
          self.partsData(self.fs_P17730_W17730A().data);
          var dataArray = self.fs_P17730_W17730A().data.gridData.rowset;
          if (dataArray.length > 0) {
            self.partsGrid(dataArray);
          }
          else {
            //No grid records, display message
            console.log("No grid records");
          }
        }

        self.listViewP17730_W17730A = ko.computed(function () {
          return new oj.ArrayTableDataSource(self.partsGrid(), { idAttribute: 'rowIndex' });
        });
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function () {
        // Implement if needed
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
    return new CaseUpdatePartsViewModel();
  }
);
