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

      self.currentOrder = ko.observable();
      self.partsGrid = ko.observableArray();
      self.partsData = ko.observableArray();
      self.inputItemNumber = ko.observable();
      self.inputBranch = ko.observable();
      self.inputQuantity = ko.observable(1);
      self.partsGridErrors = ko.observableArray();

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
        self.partsGridErrors([]);
        popup.close();
      }.bind(this);
      //

      self.addPart = function () {
        //Update record
        var input =
        {
          formName: "P17730_W17730A",
          formServiceAction: "U",
          // returnControlIDs: "28",
          formInputs: [
            { value: app.selectedCase, id: "11" },
            { value: "CSMS", id: "17" }
          ],
          formActions: [
            {
              gridAction:
              {
                gridID: "1",
                gridRowInsertEvents: [
                  {
                    gridColumnEvents: [
                      {
                        value: self.inputItemNumber(),
                        command: "SetGridCellValue",
                        columnID: "297"
                      },
                      {
                        value: self.inputBranch(),
                        command: "SetGridCellValue",
                        columnID: "308"
                      },
                      {
                        value: self.inputQuantity(),
                        command: "SetGridCellValue",
                        columnID: "300"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "command": "DoAction",
              "controlID": "12"
            }
          ]

        };

        var updatePartsGrid = data.servicecall(input, "FORM_SERVICE");
        updatePartsGrid.done(function (response) {
          //Save form response
          console.log("Add part response:" , response);
          var dataArray = response.fs_P17730_W17730A.data.gridData.rowset;
          var errorArray = response.fs_P17730_W17730A.errors;
          //Retrieve any errors from the form
          if (errorArray.length > 0) {
            for (var i = 0, len = errorArray.length; i < len; i++) {
              let error = {
                severity: 'error',
                summary: errorArray[i].TITLE,
                detail: errorArray[i].MOBILE
              };
              self.partsGridErrors.push(error);
            }
          }
          //Retrieve latest grid data
          if (dataArray.length > 0 && !errorArray.length > 0) {
            self.partsGrid(dataArray);
            sessionStorage.removeItem("fs_P17730_W17730A");
            sessionStorage.setItem("fs_P17730_W17730A", JSON.stringify(response));
            self.cancelListener();
          }
        });
        updatePartsGrid.fail(function (response) {
          var test = data.retrieveError(response.status);
          //  var rootViewModel = ko.dataFor(document.getElementById('mainContent'));
          //  rootViewModel.serviceError(test);
          //     self.serviceError(test);
        });

      }


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
