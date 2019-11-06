/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your cases ViewModel code goes here
 */
define(['knockout', 'dataService', 'appController', 'ojs/ojmodule-element-utils', 'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojtable', 'ojs/ojlabel', 'ojs/ojrefresher',
    'ojs/ojanimation', 'ojs/ojswipeactions', 'ojs/ojpulltorefresh'],
    function (ko, data, app, moduleUtils) {

        function CasesViewModel() {
            var self = this;

            // Header Config
            self.headerConfig = ko.observable({ 'view': [], 'viewModel': null });
            moduleUtils.createView({ 'viewPath': 'views/header.html' }).then(function (view) {
                self.headerConfig({ 'view': view, 'viewModel': new app.getHeaderModel() })
            })

            //Custom Code
            var rootViewModel = ko.dataFor(document.getElementById('globalBody'));
            console.log("Username VM: ", rootViewModel.userProfile.username);
            self.userProfile = rootViewModel.userProfile;
            console.log("Username self.userProfile: ", self.userProfile.username);

            self.allOrders = ko.observableArray();

            //    var fs_serviceOrders = data.getAISResponse("fs_serviceOrders");
            //    if (typeof fs_serviceOrders === 'undefined' || fs_serviceOrders === null) {
            //        //AIS Call has not taken place for Form
            //        self.fetch_serviceOrders();
            //    } else {
            //        //AIS Call has taken place, display data from session
            //        var dataArray = fs_serviceOrders.fs_P48201_W48201F.data.gridData.rowset;
            //        if (dataArray.length > 0) {
            //            self.allOrders(dataArray);
            //        }
            //    }

            self.fetch_serviceOrders = function () {
                var input =
                {
                    formName: "P48201_W48201F",
                    returnControlIDs: "1[7,217,11,449,129,487,563,24,475,532,533,178,480,39,19,9,447]",
                    formActions: [
                        {
                            "value": "SV",
                            "command": "SetQBEValue",
                            "controlID": "1[39]"
                        },
                        {
                            "command": "DoAction",
                            "controlID": "6"
                        }
                    ]
                };

                var serviceOrders = data.servicecall(input, "FORM_SERVICE");
                serviceOrders.done(function (response) {
                    console.log("P48201_W48201F", response);
                    //Save form response
                    sessionStorage.setItem("fs_P48201_W48201F", JSON.stringify(response));
                    var dataArray = response.fs_P48201_W48201F.data.gridData.rowset;
                    if (dataArray.length > 0) {
                        self.allOrders(dataArray);
                        console.log("dataArray", dataArray);
                        console.log("allOrders", self.allOrders());
                    }

                });
                serviceOrders.fail(function (response) {
                    var test = data.retrieveError(response.status);
                });
            };


            self.listViewP48201_W48201F = ko.computed(function () {
                return new oj.ArrayTableDataSource(self.allOrders(), { idAttribute: 'mnOrderNumber_7' });
            });

            self.caseSelected = function (event) {
                var selectedCase = event.detail.value;
                if (!selectedCase || !selectedCase[0])
                    return;
                var selectedOrder = selectedCase[0].value;
                app.selectedCase = selectedOrder;
                var input = {
                    "formRequests": [{
                        "formName": "P90CD002_W90CD002B",
                        "formServiceAction": "R",
                        "formInputs": [
                            {
                                "id": "2",
                                "value": selectedOrder
                            }
                        ]
                    }, {
                        "formName": "P17730_W17730A",
                        "formServiceAction": "R",
                        "formInputs": [
                            {
                                "id": "11",
                                "value": selectedOrder
                            },
                            {
                                "id": "17",
                                "value": "CSMS"
                            }
                        ]
                    },
                    {
                        "formName": "P17732_W17732D",
                        "formServiceAction": "R",
                        "formInputs": [
                            {
                                "id": "1",
                                "value": selectedOrder
                            },
                            {
                                "id": "13",
                                "value": "CSMS"
                            }
                        ]
                    }
                    ]
                };

                event.preventDefault();
                app.goToCase(input);
            };




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

                // Retreive the orders on page load
                self.fetch_serviceOrders();

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
        return new CasesViewModel();
    }
);
