/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['knockout', 'appController', 'ojs/ojbootstrap', 'ojs/ojmodule-element-utils', 'ojs/ojarraydataprovider', 'dataService', 'ojs/ojselectcombobox'],
  function (ko, app, Bootstrap, moduleUtils, ArrayDataProvider, data) {

    function InventoryViewModel() {
      console.log("Inventory ViewModel");
      var self = this;

      // Header Config
      self.headerConfig = ko.observable({ 'view': [], 'viewModel': null });
      moduleUtils.createView({ 'viewPath': 'views/header.html' }).then(function (view) {
        self.headerConfig({ 'view': view, 'viewModel': new app.getHeaderModel() })
      })

      self.inventoryGrid = ko.observableArray();
      self.searchTriggered = ko.observable();
      self.searchTerm = ko.observable();
      self.searchTimeStamp = ko.observable();
      self.tags = ko.observableArray([]);

      self.search = function (event) {
        var eventTime = getCurrentTime();
        var trigger = event.type;
        var term;

        if (trigger === "ojValueUpdated") {
          // search triggered from input field
          // getting the search term from the ojValueUpdated event
          term = event['detail']['value'];
          trigger += " event";
        } else {
          // search triggered from end slot
          // getting the value from the element to use as the search term.
          term = document.getElementById("search").value;
          trigger = "click on search button";
        }

        self.searchTriggered("Search triggered by: " + trigger);
        self.searchTerm("Search term: " + term);
        self.searchTimeStamp("Last search fired at: " + eventTime);
      };

      function getCurrentTime() {
        var date = new Date();
        return date.getHours() + ":" + date.getMinutes()
          + ":" + date.getSeconds() + "." + date.getMilliseconds();
      }

      //TEMP
      // Implement if needed
      self.fs_P41200_W41200A = ko.observable(data.getAISResponse("fs_P41200_W41200A"));
      if (typeof self.fs_P41200_W41200A() === 'undefined' || self.fs_P41200_W41200A() === null) {
        //AIS Call is not present, error handling.
        console.log("Inventory not available or empty", self.fs_P41200_W41200A());
      } else {
        //AIS Call has taken place, display data from session
        let tempArray = self.fs_P41200_W41200A().fs_P41200_W41200A.data.gridData.rowset.map(item => {
          return {
            value: item.mnShortItemNo_65.value,
            label: item.sItemNumber_102.value + " | " + item.sDescription_53.value + " | " + item.sDescriptionLine2_54.value
          };
        })
        self.tags(tempArray);
      }

      //



      //Test Filter
      this.filter = ko.observable();
      this.highlightChars = [];
      this.deptArray = self.fs_P41200_W41200A().fs_P41200_W41200A.data.gridData.rowset;
      this.dataprovider = new ko.observable(new ArrayDataProvider(this.deptArray, { keyAttributes: 'mnShortItemNo_65' }));
      this.handleValueChanged = function () {
        this.highlightChars = [];
        var filter = document.getElementById('filter').rawValue;
        if (filter.length == 0) {
          this.clearClick();
          return;
        }
        var deptArray = [];
        var i, id;
        var matchArray = ['sItemNumber_102', 'sDescription_53', 'sDescriptionLine2_54', 'sSearchText_121'];

        for (i = this.deptArray.length - 1; i >= 0; i--) {
          id = this.deptArray[i].mnShortItemNo_65.value;
          //console.log ("Dept Array", deptArray);
          Object.keys(this.deptArray[i]).forEach(function (field) {
            if (this.deptArray[i][field].value !== undefined && matchArray.includes(field)) {
              if (this.deptArray[i][field].value.toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
             //   this.highlightChars[id] = this.highlightChars[id] || {};
             //   this.highlightChars[id][field] = getHighlightCharIndexes(filter, this.deptArray[i][field].value);
                if (deptArray.indexOf(this.deptArray[i]) < 0) {
                  deptArray.push(this.deptArray[i]);
                }
              }
            }
          }.bind(this));
        }
        deptArray.reverse();
        this.dataprovider(new ArrayDataProvider(deptArray, { keyAttributes: 'mnShortItemNo_65' }));

        function getHighlightCharIndexes(highlightChars, text) {
          var highlightCharStartIndex = text.toString().toLowerCase().indexOf(highlightChars.toString().toLowerCase());
          return { startIndex: highlightCharStartIndex, length: highlightChars.length };
        };
      }.bind(this);

      this.clearClick = function (event) {
        this.filter('');
        this.dataprovider(new ArrayDataProvider(this.deptArray, { keyAttributes: 'mnShortItemNo_65' }));
        this.highlightChars = [];
        document.getElementById('filter').value = "";
        return true;
      }.bind(this);
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
        console.log("Inventory Connected");
        // Implement if needed
     /*    self.fs_P41026_W41026E = ko.observable(data.getAISResponse("fs_P41026_W41026E"));
        if (typeof self.fs_P41026_W41026E() === 'undefined' || self.fs_P41026_W41026E() === null) {
          //AIS Call is not present, error handling.
          console.log("Inventory not available or empty", self.fs_P41026_W41026E());
        } else {
          //AIS Call has taken place, display data from session
          console.log("IN CONNECTED");
          let tempArray = self.fs_P41026_W41026E().fs_P41026_W41026E.data.gridData.rowset.map(item => {
            return {
              value: item.sItemNumber_8.value,
              label: item.sDescription2_86.value + " | " + item.sDescription_10.value + " | " + item.sItemNumber_8.value
            };
          })
          self.tags(tempArray);
        }

        self.selectOnefs_P41026_W41026E = ko.computed(function () {
          return new oj.ArrayDataProvider(self.tags, { keyAttributes: 'value' });
        });

        self.listViewfs_P41026_W41026E = ko.computed(function () {
          return new oj.ArrayDataProvider(self.fs_P41026_W41026E().fs_P41026_W41026E.data.gridData.rowset, { keyAttributes: 'sItemNumber_8' });
        }); */
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
    //return new InventoryViewModel();
    return InventoryViewModel;
  }
);
