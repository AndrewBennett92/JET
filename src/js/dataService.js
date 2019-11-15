/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */

// handles ajax calls to RESTful APIs

'use strict';
define(['jquery'], function ($) {

    var LocalDevConfig = new function () {
        this.AIS_HOST = "erponelab.westus.cloudapp.azure.com";
        this.AIS_PORT = "8131";
        this.AIS_PROTOCOL = "http";
        //this.JAS_SERVER = null;
        //this.USER_NAME = "";
        //this.PASSWORD = "";
        this.ENVIRONMENT = "JDV920";
        this.ROLE = "*ALL";
        this.DEVICE_NAME = "TestAIS";
    };
    // read-only MBE
    var baseUrl = LocalDevConfig.AIS_PROTOCOL + "://" + LocalDevConfig.AIS_HOST + ":" + LocalDevConfig.AIS_PORT;
    var baseHeaders = {
        'Content-type': 'application/json'
    };

    function login(username, password) {
        console.log("AIS tokenrequest call on ", new Date(), "for: ", username);
        if (username && password) {

            var input =
            {
                deviceName: LocalDevConfig.DEVICE_NAME,
                environment: LocalDevConfig.ENVIRONMENT,
                role: LocalDevConfig.ROLE,
                username: username,
                password: password
            };

            return $.ajax({
                type: 'POST',
                headers: baseHeaders,
                url: baseUrl + '/jderest/tokenrequest',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(input)
            });
        } else {
            return $.when(null);
        }
    }

    function logout(token) {
        if (token) {
            console.log("AIS logout call on ", new Date(), "with the following token: ", token);
            var input =
            {
                token: token
            };

            return $.ajax({
                type: 'POST',
                headers: baseHeaders,
                url: baseUrl + '/jderest/tokenrequest/logout',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(input)
            });
        } else {
            return $.when(null);
        }
    }

    function getToken() {
        var tokenRequest = sessionStorage.getItem("tokenrequest");
        if (tokenRequest !== 'undefined' && tokenRequest !== null) {
            return (JSON.parse(tokenRequest).userInfo.token);
        }
    }

    function getUserProfile() {
        var tokenRequest = sessionStorage.getItem("tokenrequest");
        if (tokenRequest !== 'undefined' && tokenRequest !== null) {
            return (JSON.parse(tokenRequest));
        }
    }

    function getAlphaName() {
        var tokenRequest = sessionStorage.getItem("tokenrequest");
        if (tokenRequest !== 'undefined' && tokenRequest !== null) {
            return (JSON.parse(tokenRequest).userInfo.alphaName);
        }
    }

    function getAISResponse(aisResponse) {
        var savedResponse = sessionStorage.getItem(aisResponse);
        if (savedResponse !== 'undefined' && savedResponse !== null) {
            return (JSON.parse(savedResponse));
        }
    }

    function clearStorage() {
        sessionStorage.clear();
    }

    function retrieveError(errorCode) {
        switch (errorCode) {
            case 200:
                return "Successful Execution";
            case 400:
                return "Bad Request - Invalid JSON Input";
            case 403:
                return "Authorization Failure - Invalid Credentials";
            case 405:
                return "Allowed Hosts on the HTML server is not configured to accept requests from this AIS Server";
            case 415:
                return "Invalid Content-Type Header - Must use application/json";
            case 444:
                return "Invalid Token";
            case 445:
                return "Mobile SSO Failed";
            case 446:
                return "Mobile SSO Requested, but SSO is not Enabled on this AIS Server";
            case 500:
                return "Server Failed to Process Request";
            default:
                return "Unknown Error " + errorCode;
        }
    }

    function retrieveService(serviceName) {
        switch (serviceName) {
            /* AIS Service Name constants*/
            case "FORM_SERVICE":
                return "/formservice";
            case "DATA_SERVICE":
                return "/dataservice";
            case "BATCH_FORM_SERVICE":
                return "/batchformservice";
            case "APP_STACK_SERVICE":
                return "/v2/appstack";
            case "PO_SERVICE":
                return "/poservice";
            case "LOG_SERVICE":
                return "/v2/log";
            case "JARGON_SERVICE":
                return "/jargon";
            case "PREFERENCE_SERVICE":
                return "/preference";
            case "WATCHLIST_SERVICE":
                return "/v2/watchlist";
            case "UDO_GETALL_SERVICE":
                return "/udomanager/getallobjects";
            case "UDO_GETKEY_SERVICE":
                return "/udomanager/getobjectbykey";
            case "MEDIA_OBJECT_TEXT":
                return "/file/gettext";
            case "ORCHESTRATOR_SERVICE":
                return "/v3/orchestrator";
        }
    }

    function servicecall(input, service, orchestration, callback) {
        console.log("AIS", service, "call on ", new Date(), "with the following data: ", input);

        //register token as being used, so it won't be logged out by other concurent calls
        servicecall.usingToken = getToken();
        input.token = getToken();
        //  input.jasserver = LocalDevConfig.JAS_SERVER;

        if (service == "ORCHESTRATOR_SERVICE") {
            var serviceUrl = baseUrl + '/jderest' + retrieveService(service) + orchestration;
        } else {
            var serviceUrl = baseUrl + '/jderest' + retrieveService(service);
        }

        //don't call without a token
        if (input.token !== null) {
            input.deviceName = "TestAIS";
            //   if (LocalDevConfig.JAS_SERVER !== null)
            //   {
            //       input.jasserver = LocalDevConfig.JAS_SERVER;
            //   }

            return $.ajax({
                type: 'POST',
                headers: baseHeaders,
                url: serviceUrl,
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(input)
            });
        } else {
            return $.when(null);
        }
    }

    return {
        getUserProfile: getUserProfile,
        login: login,
        logout: logout,
        getToken: getToken,
        clearStorage: clearStorage,
        retrieveError: retrieveError,
        servicecall: servicecall,
        getAISResponse: getAISResponse,
        retrieveService: retrieveService,
        getAlphaName: getAlphaName
    };
});
