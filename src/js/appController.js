/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['knockout', 'dataService', 'ojs/ojrouter', 'ojs/ojthemeutils', 'ojs/ojmodule-element-utils', 'ojs/ojmoduleanimations', 'ojs/ojarraydataprovider', 'ojs/ojknockouttemplateutils', 'ojs/ojknockout', 'ojs/ojmodule-element'],
    function (ko, data, Router, ThemeUtils, moduleUtils, ModuleAnimations, ArrayDataProvider, KnockoutTemplateUtils) {
        function ControllerViewModel() {
            var self = this;

            self.KnockoutTemplateUtils = KnockoutTemplateUtils;

            // Handle announcements sent when pages change, for Accessibility.
            self.manner = ko.observable('polite');
            self.message = ko.observable();

            document.getElementById('globalBody').addEventListener('announce', announcementHandler, false);

            function announcementHandler(event) {
                setTimeout(function () {
                    self.message(event.detail.message);
                    self.manner(event.detail.manner);
                }, 200);
            }
            ;

            // Save the theme so we can perform platform specific navigational animations
            var platform = ThemeUtils.getThemeTargetPlatform();

            // Custom Code
            self.userProfile = ko.observable();

            //Global variable to track selected case
            self.selectedCase = ko.observable();
            //Parse the tokenrequest response to variable and navigate to next page
            self.processUserProfile = function (response) {
                var result = response;

                if (result) {
                    self.userProfile(result);
                    self.userLoggedIn("Y");
                    sessionStorage.setItem("tokenrequest", JSON.stringify(result));
                    this.router.go('home');
                }
            }

            self.userLoggedIn = ko.observable();

            self.goToSignIn = function () {
                self.router.go('login');
            };

            self.goToCases = function () {
                self.router.go('cases');
            };

            self.selectedCase = ko.observable();
            self.goToCase = function (input) {
                //  console.log("Order passed in", order);
                //  self.selectedCase(order);
                //  console.log("Navigating to caseupdate from goToCase for case" , self.selectedCase());
                var caseDetails = data.servicecall(input, "BATCH_FORM_SERVICE");
                caseDetails.done(function (response) {
                    console.log("Case Details response", response);
                    //Save form response
                    var caseDetails = response.fs_0_P90CD002_W90CD002B;
                    sessionStorage.setItem("fs_P90CD002_W90CD002B", JSON.stringify(caseDetails));
                    //  if (caseDetails.length > 0) {
                    //      self.allOrders(dataArray);
                    //  }
                    var caseParts = response.fs_1_P17730_W17730A;
                    if (caseParts) {
                        sessionStorage.setItem("fs_P17730_W17730A", JSON.stringify(caseParts));
                    }
                    var caseLabor = response.fs_2_P17732_W17732D;
                    if (caseLabor) {
                        sessionStorage.setItem("fs_P17732_W17732D", JSON.stringify(caseLabor));
                    }
                    self.router.go('caseupdateViews');
                });
                caseDetails.fail(function (response) {
                    var test = data.retrieveError(response.status);
                });

            };

            self.beforeNavigation = function (event, vm) {
                var key = event.detail.key;
                console.log("VM: ", vm);
                console.log("Event: ", event);


                if (key === 'signout') {
                    event.preventDefault()
                    var logout = data.logout(data.getToken());
                    logout.always(function (response) {
                        console.log("Logout executed");
                        console.log(response);
                        self.userLoggedIn("N");
                        data.clearStorage();
                        vm.goToSignIn();

                    });
                    return;
                }
            };


            // End

            // Router setup
            self.router = Router.rootInstance;

            self.router.configure({
                'login': { label: 'Login', isDefault: true },
                'home': {
                    label: 'Home', canEnter: function () {
                        return self.userLoggedIn() == 'Y';
                    }
                },
                'cases': {
                    label: 'Cases', canEnter: function () {
                        return self.userLoggedIn() == 'Y';
                    }
                },
                'caseupdateViews': {
                    label: 'Case Details', canEnter: function () {
                        return self.userLoggedIn() == 'Y';
                    }
                },
                'inventory': {
                    label: 'Inventory', canEnter: function () {
                        return self.userLoggedIn() == 'Y';
                    }
                },
                'about': {
                    label: 'About', canEnter: function () {
                        return self.userLoggedIn() == 'Y';
                    }
                }
            });

            Router.defaults['urlAdapter'] = new Router.urlParamAdapter();

            // Callback function that can return different animations based on application logic.
            function switcherCallback(context) {
                if (platform === 'android')
                    return 'fade';
                return null;
            }
            ;

            self.moduleConfig = ko.observable({ 'view': [], 'viewModel': null });

            self.loadModule = function () {
                console.log('In loadModule');
                ko.computed(function () {
                    var name = self.router.moduleConfig.name();
                    var viewPath = 'views/' + name + '.html';
                    var modelPath = 'viewModels/' + name;
                    var masterPromise = Promise.all([
                        moduleUtils.createView({ 'viewPath': viewPath }),
                        moduleUtils.createViewModel({ 'viewModelPath': modelPath })
                    ]);
                    masterPromise.then(
                        function (values) {
                            var viewModel = typeof values[1] === 'function' ? new values[1](self.router) : values[1];
                            console.log('var viewModel', values);
                            self.moduleConfig({ 'view': values[0], 'viewModel': viewModel });
                        }
                    );
                });
            }
            self.moduleAnimation = ModuleAnimations.switcher(switcherCallback);

            // Navigation setup
            var navData = [
                {
                    name: 'Home', id: 'home', loggedInOnly: true,
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-home-icon-24'
                },
                {
                    name: 'Cases', id: 'cases', loggedInOnly: true,
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-catalog-icon-24'
                },
                {
                    name: 'Inventory', id: 'inventory', loggedInOnly: true,
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-library-icon-24'
                },
                {
                    name: 'Sign Out', id: 'signout', loggedInOnly: true,
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-signout-icon-24'
                }
            ];

            self.navDataProvider = new ArrayDataProvider(navData, { keyAttributes: 'id' });

            // Header Setup
            self.getHeaderModel = function () {
                this.pageTitle = self.router.currentState().label;
                this.transitionCompleted = function () {
                    // Adjust content padding after header bindings have been applied
                    self.adjustContentPadding();
                }
            };

            // Method for adjusting the content area top/bottom paddings to avoid overlap with any fixed regions.
            // This method should be called whenever your fixed region height may change.  The application
            // can also adjust content paddings with css classes if the fixed region height is not changing between
            // views.
            self.adjustContentPadding = function () {
                var topElem = document.getElementsByClassName('oj-applayout-fixed-top')[0];
                var contentElem = document.getElementsByClassName('oj-applayout-content')[0];
                var bottomElem = document.getElementsByClassName('oj-applayout-fixed-bottom')[0];

                if (topElem) {
                    contentElem.style.paddingTop = topElem.offsetHeight + 'px';
                }
                if (bottomElem) {
                    contentElem.style.paddingBottom = bottomElem.offsetHeight + 'px';
                }
                // Add oj-complete marker class to signal that the content area can be unhidden.
                // See the override.css file to see when the content area is hidden.
                contentElem.classList.add('oj-complete');
            }
        }

        return new ControllerViewModel();
    }
);
