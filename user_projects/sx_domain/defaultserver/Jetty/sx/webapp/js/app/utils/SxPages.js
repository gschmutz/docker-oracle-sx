/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('SxPages', [],

    /**
     * @exports sxController
     * @ignore
     */

    function () {

        /**
         * @class
         * @classdesc sx pages enum - url of each sx pages defers by #hash
         * example: http://localhost:9999/sx#login
         *
         * @constructor
         */
        function SxPages() {
            this.login = 'login';
            this.home = 'home';
            this.catalog = 'catalog';
            this.explorationEditor = 'explorationEditor';
            this.createPatternExploration = 'createPatternExploration';

            var UNLOGGED_REGEXP = /<title>OEP Stream Explorer Login<\/title>/;
            var LOGIN_PAGE = 'login.html';


            this.goToLoginPage = function () {
                window.location = LOGIN_PAGE;
            };


            this.goToLoginPageIfUserSessionExpired = function (response) {
                if (response.match(UNLOGGED_REGEXP)) {
                    this.goToLoginPage();
                    return true;
                }
                return false;
            };


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {SxPages}
         */
        SxPages.getInstance = function () {
            if (!this.instance) {
                this.instance = new SxPages();
            }
            return this.instance;
        };


        return SxPages;
    });