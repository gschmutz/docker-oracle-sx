/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/


define('ConditionsController', [
    'jquery',
    'knockout',
    'Utils',
    'ClauseController',

    'dtpicker',
    'select2'
],

    /**
     * @exports exploration/conditions
     * @ignoer
     */
        function ($, ko, Utils, ClauseController) {


        /**
         * @class
         * @classdesc *
         * @constructor
         * @extends  ClauseController
         */
        function ConditionsController() {
            ConditionsController.superclass.constructor.call(this);
        }

        //inheritance
        Utils.extend(ConditionsController, ClauseController);


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ConditionsController}
         */
        ConditionsController.getInstance = function () {
            if (!this.instance) {
                this.instance = new ConditionsController();
            }
            return this.instance;
        };


        return ConditionsController;

    }

)
;
