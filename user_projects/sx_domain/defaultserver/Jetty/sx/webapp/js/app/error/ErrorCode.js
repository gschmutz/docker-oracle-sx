/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('ErrorCode', [
    ],

    /**
     * @exports error
     * @ignore
     */
        function () {

        /**
         * @class
         * @classdesc  error codes returned from backend,
         * should be translated to eligible message for business user
         *
         */
        function ErrorCode() {
        }

        ErrorCode.ErrorCode = {
            INAPPROPRIATE_SLIDE_TIME_UNIT: "INAPPROPRIATE_SLIDE_TIME_UNIT",
            CANNOT_UNDO: "CANNOT_UNDO",
            CANNOT_REDO: "CANNOT_REDO",
            CANNOT_SAVE: "CANNOT_SAVE",
            CANNOT_LOAD: "CANNOT_LOAD",
            CANNOT_PUBLISH: "CANNOT_PUBLISH",
            CANNOT_UNPUBLISH: "CANNOT_UNPUBLISH",
            SOURCE_DEPENDECY_DOESNT_EXIST: "SOURCE_DEPENDECY_DOESNT_EXIST",
            SOURCE_DEPENDECY_IS_DELETED: "SOURCE_DEPENDECY_IS_DELETED",
            CANNOT_DEPEND_ON_INSELF: "CANNOT_DEPEND_ON_INSELF",
            INVALID_DEPENDENCY_TYPE: "INVALID_DEPENDENCY_TYPE",
            INVALID_SOURCE_TYPE: "INVALID_SOURCE_TYPE",
            UNKNOWN_SOURCE_TYPE: "UNKNOWN_SOURCE_TYPE",
            UNKNOWN_TARGET_TYPE: "UNKNOWN_TARGET_TYPE",
            SOURCE_DOESNT_EXIST: "SOURCE_DOESNT_EXIST",
            UNABLE_TO_SAVE_SHAPE: "UNABLE_TO_SAVE_SHAPE",
            UNABLE_TO_DELETE_ENTITY_IS_IN_USE: "UNABLE_TO_DELETE_ENTITY_IS_IN_USE",
            UNABLE_TO_DEPLOY_OEP_APPLICATION: "UNABLE_TO_DEPLOY_OEP_APPLICATION",
            UNABLE_TO_UNDEPLOY_OEP_APPLICATION: "UNABLE_TO_UNDEPLOY_OEP_APPLICATION",
            UNABLE_TO_CONNECT_TO_OEP_RUNTIME: "UNABLE_TO_CONNECT_TO_OEP_RUNTIME",
            OEP_APPLICATION_WARMING_UP_TIMEOUT: "OEP_APPLICATION_WARMING_UP_TIMEOUT",
            ENTITY_DOES_NOT_EXIST: "ENTITY_DOES_NOT_EXIST",
            UNABLE_TO_CREATE_USER_SPECIFIC_PROPERTIES: "UNABLE_TO_CREATE_USER_SPECIFIC_PROPERTIES",
            DEPENDENTS_BLOCK_OPERATION: "DEPENDENTS_BLOCK_OPERATION"
        };


        return ErrorCode;

    });


