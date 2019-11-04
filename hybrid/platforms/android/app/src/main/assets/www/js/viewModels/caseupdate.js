/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your profile ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout',
    'dataService', 'appController', 'ModuleHelper',
    'ojs/ojmodule-element', 'ojs/ojknockout'], function (oj, ko, data, app, moduleHelper) {
        function caseupdate(params) {
            var self = this;
            self.incidentData = ko.observable();
            self.moduleConfig = ko.observable();


            function loadModule() {
                console.log("entering loadModule in caseupdate");
                var moduleParams = {
                    'parentRouter': self.router,
                    'incidentData': self.incidentData
                };
                console.log("calling module helper from caseupdate...");
                moduleHelper.setupStaticModule(self, 'moduleConfig', 'caseupdateViews', moduleParams);
            }

            self.prefetch = function () {
                console.log("In prefetch");
                return new Promise(function (resolve, reject) {
                    self.router = parentRouter.createChildRouter('caseupdate').configure(function (stateId) {
                        if (stateId) {
                            if (self.routerState && self.routerState.id == stateId)
                                return self.routerState;
                            self.routerState = new oj.RouterState(stateId, {
                                canEnter: function () {
                                    var input = {
                                        "formRequests": [{
                                            "formName": "P48201_W48201F",
                                            "returnControlIDs": "1[7,217,11,449,129,487,563,24,475,532,533,178,480,39]",
                                            "formActions": [
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
                                        }, {
                                            "formName": "P90CD002_W90CD002B",
                                            "formServiceAction": "R",
                                            "formInputs": [
                                                {
                                                    "id": "2",
                                                    "value": "451725"
                                                }
                                            ]
                                        }, {
                                            "formName": "P17730_W17730A",
                                            "formServiceAction": "R",
                                            "formInputs": [
                                                {
                                                    "id": "11",
                                                    "value": "451725"
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
                                                    "value": "451725"
                                                },
                                                {
                                                    "id": "13",
                                                    "value": "CSMS"
                                                }
                                            ]
                                        }
                                        ]
                                    };
                                    return data.getIncident(input, "BATCH_FORM_SERVICE").then(function (response) {
                                        var incidentData = JSON.parse(response);
                                        console.log(incidentData);
                                        // incidentData.statusSelection = ko.observableArray([incidentData.status]);
                                        // incidentData.prioritySelection = ko.observableArray([incidentData.priority]);
                                        //  self.incidentData(incidentData);
                                        loadModule();
                                        resolve();
                                        return true;
                                    });
                                }
                            });
                            return self.routerState;
                        }
                    });
                    oj.Router.sync();
                });
            }

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
            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return caseupdate;
        }
    });
