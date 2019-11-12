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
            self.loggingIn = ko.observable(false);

            self.logIn = function () {
                if (self.groupValid() !== "valid")
                    return;
                self.loggingIn(true);
                //Call the data service to login
                var login = data.login(self.userName(), self.passWord());
                login.done(function (response) {
                    if (response.userInfo.addressNumber == 0) {
                        self.errorMessage = [{ severity: 'error', summary: 'Address Book not setup', detail: 'Your user account does not have an address book number assigned.' }];
                        self.loginError(errorMessage);
                        return;
                    }
                    app.processUserProfile(response);
                    var input = {
                        formName: "P01012_W01012A",
                        returnControlIDs: "62",
                        formServiceAction: "R",
                        formInputs: [
                            {
                                //Form Interconnect address book number
                                "id": "12",
                                "value": response.userInfo.addressNumber
                            },
                            {
                                //Mimic form interconnect, passes in tab number
                                "id": "14",
                                "value": "1.00"
                            }
                        ]
                    };
                    data.servicecall(input, "FORM_SERVICE")
                        .done(function (response2) {
                            console.log("resonse 2:", response2);
                            var businessUnit = response2.fs_P01012_W01012A.data.txtBusinessUnit_62.value;
                            var businessUnitDesc = response2.fs_P01012_W01012A.data.txtBusinessUnit_62.assocDesc;
                            if (businessUnit === "") {
                                self.errorMessage = [{ severity: 'error', summary: 'Home branch not setup', detail: 'Your user account does not have a home business setup.' }];
                                self.loginError(errorMessage);
                                return;
                            }
                            app.homeMCU({ value: businessUnit, assocDesc: businessUnitDesc });
                            // Get the parts for the person logged in
                            var input2 = {
                                formName: "P41026_W41026E",
                                formServiceAction: "R",
                                maxPageSize: "500",
                                formActions: [
                                    {
                                        //Pass in users home business unit to QBW
                                        value: app.homeMCU().value,
                                        command: "SetQBEValue",
                                        controlID: "1[12]"
                                    },
                                    {
                                        //Pass in Stocking Type S to QBE
                                        value: "S",
                                        command: "SetQBEValue",
                                        controlID: "1[101]"
                                    },
                                    {
                                        //Click the find button
                                        command: "DoAction",
                                        controlID: "6"
                                    }
                                ]
                            };
                            data.servicecall(input2, "FORM_SERVICE")
                                .done(function (response3) {
                                    sessionStorage.setItem("fs_P41026_W41026E", JSON.stringify(response3));

                                    //Everying is completed, finish login and direct to next page
                                    app.userLoggedIn("Y");
                                    app.router.go('home');
                                });
                        })
                });
                login.fail(function (response) {
                    console.log("Login Fail ", response);
                    self.loggingIn(false);
                   // console.log(response.responseJSON.message);
                    self.messages = [
                        {
                            severity: 'error',
                            summary: 'Login Error',
                            detail: data.retrieveError(response.status)
                        }
                    ];
                    self.loginError(self.messages);
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
                // Try to clean up session before allowing logins
                data.logout(data.getToken());
                data.clearStorage();
            };

            /**
             * Optional ViewModel method invoked after the View is disconnected from the DOM.
             */
            self.disconnected = function () {
                // Remove loading indicator
                self.loggingIn(false);
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
