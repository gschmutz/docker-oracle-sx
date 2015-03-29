/**
 * Product: OEP Stream Explorer
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 *
 */

define(
    'UserPreferencesLoader', [
        'jquery',
        'RestAPI',
        'NotificationUtils',
        'Utils'
    ],

    /**
     * @exports exploration/loader
     * @ignore
     */
    function ($, RestAPI, NotificationUtils, Utils) {

        /**
         * @class
         * @classdesc load user prefencse, save user preferences to backend
         *
         * @constructor
         */
        function UserPreferencesLoader() {

            var self = this;

            /**
             *
             * @param params
             * @param onSuccess
             * @param onFalure
             * @returns {Array.<jsonObject>}
             */
            self.loadUserPreferences = function (params, onSuccess, onFalure) {

                var url = RestAPI.URL.loadUserPreferences;
                var callee = arguments.callee.name;

                var userPreferences = null;

                $.ajax({
                    type: 'GET',
                    url: url,
                    async: false,
                    cache: false,
                    success: function (response, textStatus, jqXHR) {
                        Utils.goToLoginPageIfUserSessionExpired(response);

                        if (!response.success) {
                            var errorMessage = [callee, response.errorCode, response.message].join('\n');
                            console.log(errorMessage);
                            NotificationUtils.failedToLoadUserPreferences();
                        } else {
                            userPreferences = response.data;
                            if (!userPreferences) {
                                console.log(response);
                                NotificationUtils.failedToLoadUserPreferences();
                            }
                        }


                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        NotificationUtils.failedToLoadUserPreferences();
                    }
                });

                return userPreferences;

            };

            /**
             *
             * @param {Object |Map} userPreferences
             * @param {Function} onSuccess
             * @param {Function} onFalure
             */
            self.saveUserPreferences = function (userPreferences, onSuccess, onFalure) {

                var url = RestAPI.URL.saveUserPreferences;

                $.ajax({
                    type: 'POST',
                    url: url,
                    contentType: 'application/json',
                    dataType: 'json',
                    data: JSON.stringify(userPreferences),
                    async: false,
                    success: function (response, textStatus, jqXHR) {

                       Utils.goToLoginPageIfUserSessionExpired(response);

                        NotificationUtils.changesMadeInPreferenceSectionAreSaved();
                        return true;
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        NotificationUtils.failedToSaveUserPreferences();
                    }
                });

            };


            return this;
        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {UserPreferencesLoader}
         */
        UserPreferencesLoader.getInstance = function () {
            if (!this.instance) {
                this.instance = new UserPreferencesLoader();
            }
            return this.instance;
        };

        return UserPreferencesLoader;
    }
)
;