/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['knockout', 'appController', 'dataService', 'ojs/ojmodule-element-utils', 'ojs/ojlistview', 'ojs/ojrouter', 'ojs/ojknockouttemplateutils', 'ojs/ojarraytabledatasource', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojformlayout', 'ojs/ojinputtext'],
  function (ko, app, data, moduleUtils, Router, KnockoutTemplateUtils) {

    function CaseUpdateLaborViewModel() {
      var self = this;

      // Header Config
      self.headerConfig = ko.observable({ 'view': [], 'viewModel': null });
      moduleUtils.createView({ 'viewPath': 'views/header.html' }).then(function (view) {
        self.headerConfig({ 'view': view, 'viewModel': new app.getHeaderModel() })
      })

      self.laborGrid = ko.observableArray();
      self.laborData = ko.observableArray();
      var fs_P17732_W17732D = data.getAISResponse("fs_P17732_W17732D");
      if (typeof fs_P17732_W17732D === 'undefined' || fs_P17732_W17732D === null) {
        //AIS Call is not present, error handling.
        console.log("Labor grid not retrieved");
      } else {
        //AIS Call has taken place, display data from session
        var dataArray = fs_P17732_W17732D.data.gridData.rowset;
        if (dataArray.length > 0) {
          self.laborGrid(dataArray);
          self.laborData(fs_P17732_W17732D.data);
        }
        else {
          //No grid records, display message
          console.log("No labor grid records");
        }
      }

      self.listViewP17732_W17732D = ko.computed(function () {
        return new oj.ArrayTableDataSource(self.laborGrid(), { idAttribute: 'rowIndex' });
      });

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
        // Implement if needed
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
    return new CaseUpdateLaborViewModel();
  }
);
