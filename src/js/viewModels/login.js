/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'dataService', 'knockout', 'appController', 'ojs/ojmodule-element-utils',
    'ojs/ojarraydataprovider',
    'ojs/ojmessages',
    'ojs/ojmessaging',
    'ojs/ojinputtext',
    'ojs/ojbutton',
    'ojs/ojvalidationgroup', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojformlayout',
    'ojs/ojanimation'],
        function (oj, data, ko, app, moduleUtils, ArrayDataProvider) {

            function LoginViewModel() {
                var self = this;

                self.groupValid = ko.observable();
                self.userName = ko.observable();
                self.passWord = ko.observable();
                self.loginError = ko.observable();

                self.logIn = function () {
                    if (self.groupValid() !== "valid")
                    return;

                    //Call the data service to login
                    console.log("Calling login service with user: " + self.username);
                    var login = data.login(self.userName(), self.passWord());
                    login.done(function (response) {
                        console.log(response);
                        app.processUserProfile(response);
                    })
                    login.fail(function (response) {
                        console.log("Login Fail ", response);
                        console.log(response.responseJSON.message);
                        self.messages = [
                            {
                                severity: 'error',
                                summary: response.responseJSON.exception,
                                detail: response.responseJSON.message
                            }
                        ];
                        self.loginError (self.messages);
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
            return new LoginViewModel();
        }
);
