/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('NotificationUtils', [
        'Notifications',
        'NotificationType',
        'ProgressBar',
        'Utils'
    ],

    /**
     * @exports exploration/notification
     * @ignore
     */
    function (Notifications, NotificationType, ProgressBar, Utils) {

        /**
         * @class
         * @classdesc  NotificationUtils  - methods that incapsulate calling different Notifications
         */
        function NotificationUtils() {
        }

        NotificationUtils.errorsTranslatePrefix = "oep.errors.";
        NotificationUtils.explorationTranslatePrefix = "oep.exploration.";
        NotificationUtils.sourcesTranslatePrefix = "oep.exploration.sources.";
        NotificationUtils.summariesTranslatePrefix = "oep.exploration.summaries.";
        NotificationUtils.publishTranslatePrefix = "oep.exploration.publish.";
        NotificationUtils.undoTranslatePrefix = "oep.exploration.undoredo.";
        NotificationUtils.exportTranslatePrefix = "oep.exploration.export.";
        NotificationUtils.userPreferencesTranslatePrefix = "oep.preferencesContainer.";


        NotificationUtils.undoSuccesfull = function () {
            Notifications.add({
                type: NotificationType.TYPE.info,
                text: Utils.translateKey(NotificationUtils.undoTranslatePrefix, "undoSuccesfull")
            });
        };

        NotificationUtils.redoSuccesfull = function () {
            Notifications.add({
                type: NotificationType.TYPE.info,
                text: Utils.translateKey(NotificationUtils.undoTranslatePrefix, "redoSuccesfull")
            });
        };

        NotificationUtils.undoFailed = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.undoTranslatePrefix, "undoFailed"),
                autoHide: 5
            });
        };

        NotificationUtils.redoFailed = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(this.redoFailed, "redoFailed"),
                autoHide: 5
            });
        };


        NotificationUtils.unpublishedSuccesfull = function () {
            Notifications.add({
                type: NotificationType.TYPE.success,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "unpublishedSuccesfull"),
                autoHide: 5
            });
        };

        NotificationUtils.cloneSuccesfull = function () {
            Notifications.add({
                type: NotificationType.TYPE.success,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "cloneSuccesfull"),
                autoHide: 5
            });
        };

        NotificationUtils.uptakeSuccesfull = function () {
            Notifications.add({
                type: NotificationType.TYPE.success,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "uptakeSuccesfull"),
                autoHide: 5
            });
        };

        NotificationUtils.overwriteSuccesfull = function () {
            Notifications.add({
                type: NotificationType.TYPE.success,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "overwriteSuccesfull"),
                autoHide: 5
            });
        };

        NotificationUtils.cloneFailed = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "cloneFailed")
            });
        };

        NotificationUtils.uptakeFailed = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "uptakeFailed")
            });
        };

        NotificationUtils.overwriteFailed = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "overwriteFailed")
            });
        };

        NotificationUtils.unpublishFailedHasConsumers = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "unpublishFailedHasConsumers")
            });
        };

        NotificationUtils.republishedFailed = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "republishedFailed")
            });
        };

        NotificationUtils.republishedFailedExplorationHasConsumers = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "republishedFailedExplorationHasConsumers")
            });
        };

        NotificationUtils.republishedFailedBecausePublishingConflict = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "republishedFailedBecausePublishingConflict"),
                autoHide: 5
            });
        };

        NotificationUtils.republishedSuccesfull = function () {
            Notifications.add({
                type: NotificationType.TYPE.success,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "republishedSuccesfull"),
                autoHide: 5
            });
        };

        NotificationUtils.publishedSuccesfull = function () {
            Notifications.add({
                type: NotificationType.TYPE.success,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "publishedSuccesfull"),
                autoHide: 5
            });
        };

        NotificationUtils.publishFailedNoSources = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "publishFailedNoSources"),
                autoHide: 5
            });
        };

        NotificationUtils.publishFailedSourcesNotCorrelated = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "publishFailedSourcesNotCorrelated"),
                autoHide: 5
            });
        };


        NotificationUtils.youHaveConfiguredYourTarget = function () {
            Notifications.add({
                type: NotificationType.TYPE.success,
                text: Utils.translateKey(NotificationUtils.publishTranslatePrefix, "youHaveConfiguredYourTarget"),
                autoHide: 5
            });
        };

        NotificationUtils.yourFirstSummaryHasBeenAdded = function () {
            Notifications.add({
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey(NotificationUtils.summariesTranslatePrefix, "yourFirstSummaryHasBeenAdded"),
                autoHide: 5
            });
        };

        NotificationUtils.youNeedToAddASourceToBeginExploring = function () {
            Notifications.add({
                type: NotificationType.TYPE.gettingStarted,
                text: Utils.translateKey(NotificationUtils.sourcesTranslatePrefix, "youNeedToAddASourceToBeginExploring"),
                autoHide: 20
            });
        };

        NotificationUtils.failedToGetSource = function (name) {
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKeyWithParams(NotificationUtils.sourcesTranslatePrefix, "failedToGetSource", [name])
            });
        };

        NotificationUtils.failedToLoadExplorationBecauseOfSourceCorrupted = function (explorationInJson, sourceName) {
            var params = [explorationInJson.displayName || explorationInJson.name, sourceName];
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKeyWithParams(NotificationUtils.sourcesTranslatePrefix,
                    "failedToLoadExplorationBecauseOfSourceCorrupted",
                    params)
            });
            throw new Error(params);

        };
        
        NotificationUtils.failedToLoadExplorationBecauseOfFieldsMissingInSource = function (sourceName, fieldName) {
            var params = [sourceName, fieldName];
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKeyWithParams(NotificationUtils.sourcesTranslatePrefix,
                    "failedToLoadExplorationBecauseOfFieldsMissingInSource",
                    params)
            });
            throw new Error(params);

        };
        
        NotificationUtils.explorationFailedAfterSourceUpdate = function (sourceName) {
            var params = [sourceName];
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKeyWithParams(NotificationUtils.sourcesTranslatePrefix,
                    "explorationFailedAfterSourceUpdate",
                    params)
            });
        };
        
        

        NotificationUtils.failedToGetSourceTypeDescriptor = function (name) {
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKeyWithParams(NotificationUtils.sourcesTranslatePrefix,
                    "failedToGetSourceTypeDescriptor",
                    [name])

            });
        };

        NotificationUtils.failedToUpdateExploration = function () {
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKey(NotificationUtils.explorationTranslatePrefix, "failedToUpdateExploration")
            });
        };

        NotificationUtils.showErrorMessage = function (errorMessage) {
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: errorMessage
            });
        };

        /**
         *
         * @param {FailureResponse} failureResponse
         */
        NotificationUtils.onFailureResponse = function (failureResponse) {
            if (failureResponse.errorThrown.code == window.DOMException.NETWORK_ERR) {
                NotificationUtils.showErrorMessage(
                    Utils.translateKey(NotificationUtils.errorsTranslatePrefix, "NETWORK_ERR")
                );

            } else {
                NotificationUtils.showErrorMessage(failureResponse.toString());
            }

            ProgressBar.getInstance().connectedState();

        };

        /**
         *
         * @param {Response} response
         */
        NotificationUtils.onResponseReturnsSuccessFalse = function (response) {
            NotificationUtils.showErrorMessage(response.toErrorString());
            ProgressBar.getInstance().connectedState();

        };


        /**
         *
         * @param {ko.observable | Notifications.MessageModel} notCorrelatedSourcesMessageModel
         */
        NotificationUtils.showSourcesNotCorrelatedWarning = function (notCorrelatedSourcesMessageModel) {
            var notCorrelatedSourcesMessage_ = notCorrelatedSourcesMessageModel();
            if (!notCorrelatedSourcesMessage_ || !notCorrelatedSourcesMessage_.messageId) {
                NotificationUtils.autoDeployDisabledBecauseSourcesNotCorrelated(
                    function (message) {
                        notCorrelatedSourcesMessageModel(message);
                    }
                );
            }

        };

        /**
         *
         * @param {ko.observable | Notifications.MessageModel} notCorrelatedSourcesMessageModel
         */
        NotificationUtils.hideSourcesNotCorrelatedWarning = function (notCorrelatedSourcesMessageModel) {
            var notCorrelatedSourcesMessageModel_ = notCorrelatedSourcesMessageModel();
            if (notCorrelatedSourcesMessageModel_ && notCorrelatedSourcesMessageModel_.messageId) {
                Notifications.remove(notCorrelatedSourcesMessageModel_.messageId);
                notCorrelatedSourcesMessageModel(null);
            }

        };

        /**
         *
         * @param {Function}  callBack
         */
        NotificationUtils.autoDeployDisabledBecauseSourcesNotCorrelated = function (callBack) {
            Notifications.add(
                {
                    type: NotificationType.TYPE.error,
                    text: Utils.translateKey(NotificationUtils.sourcesTranslatePrefix, "autoDeployDisabledBecauseSourcesNotCorrelated")
                },
                callBack
            );
        };

        /**
         *
         * @param {ko.observable | Notifications.MessageModel} fieldsForEventTypeIsEmptyMessage
         */
        NotificationUtils.showFieldsForEventTypeIsEmptyWarning = function (fieldsForEventTypeIsEmptyMessage) {
            var fieldsForEventTypeIsEmptyMessage_ = fieldsForEventTypeIsEmptyMessage();
            if (!fieldsForEventTypeIsEmptyMessage_ || !fieldsForEventTypeIsEmptyMessage_.messageId) {
                NotificationUtils.fieldsForEventTypeIsEmptyWarning(
                    function (message) {
                        fieldsForEventTypeIsEmptyMessage(message);
                    }
                );
            }

        };

        /**
         *
         * @param {ko.observable | Notifications.MessageModel} fieldsForEventTypeIsEmptyMessage
         */
        NotificationUtils.hideFieldsForEventTypeIsEmptyWarning = function (fieldsForEventTypeIsEmptyMessage) {
            var fieldsForEventTypeIsEmptyMessage_ = fieldsForEventTypeIsEmptyMessage();
            if (fieldsForEventTypeIsEmptyMessage_ && fieldsForEventTypeIsEmptyMessage_.messageId) {
                Notifications.remove(fieldsForEventTypeIsEmptyMessage_.messageId);
                fieldsForEventTypeIsEmptyMessage(null);
            }

        };

        /**
         *
         * @param {Function}  callBack
         */
        NotificationUtils.fieldsForEventTypeIsEmptyWarning = function (callBack) {
            Notifications.add(
                {
                    type: NotificationType.TYPE.error,
                    text: Utils.translateKey(NotificationUtils.explorationTranslatePrefix, "fieldsForEventTypeIsEmptyMessage")
                },
                callBack
            );
        };


        /**
         *
         * @param {ko.observable | Notifications.MessageModel} evaluationFrequencyShouldBeNoLongerThanRange
         */
        NotificationUtils.showEvaluationFrequencyShouldBeNoLongerThanRange = function (evaluationFrequencyShouldBeNoLongerThanRange) {
            if (!evaluationFrequencyShouldBeNoLongerThanRange() || !evaluationFrequencyShouldBeNoLongerThanRange().messageId) {
                NotificationUtils.evaluationFrequencyShouldBeNoLongerThanRange(
                    function (message) {
                        evaluationFrequencyShouldBeNoLongerThanRange(message);
                    }
                );
            }

        };

        /**
         *
         * @param {ko.observable | Notifications.MessageModel} evaluationFrequencyShouldBeNoLongerThanRange
         */
        NotificationUtils.hideEvaluationFrequencyShouldBeNoLongerThanRange = function (evaluationFrequencyShouldBeNoLongerThanRange) {
            if (evaluationFrequencyShouldBeNoLongerThanRange() && evaluationFrequencyShouldBeNoLongerThanRange().messageId) {
                Notifications.remove(evaluationFrequencyShouldBeNoLongerThanRange().messageId);
                evaluationFrequencyShouldBeNoLongerThanRange(null);
            }

        };

        /**
         *
         * @param {Function}  callBack
         */
        NotificationUtils.evaluationFrequencyShouldBeNoLongerThanRange = function (callBack) {
            Notifications.add(
                {
                    type: NotificationType.TYPE.error,
                    text: Utils.translateKey(NotificationUtils.explorationTranslatePrefix, "evaluationFrequencyShouldBeNoLongerThanRange")
                },
                callBack
            );
        };




        NotificationUtils.resetRangesOfAllStreamsToNowBecauseAddedDbReferenceAsASource = function () {
            Notifications.add(
                {
                    type: NotificationType.TYPE.error,
                    text: Utils.translateKey(NotificationUtils.sourcesTranslatePrefix, "resetRangesOfAllStreamsToNowBecauseAddedDbReferenceAsASource")
                });
        };



        NotificationUtils.exportSuccesfull = function (fileName) {
            Notifications.add({
                type: NotificationType.TYPE.info,
                text: Utils.translateKeyWithParams(NotificationUtils.exportTranslatePrefix, "exportSuccesfull", [fileName])
            });
        };

        NotificationUtils.exportFailed = function (fileName) {
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKeyWithParams(NotificationUtils.exportTranslatePrefix, "exportFailed", [fileName])
            });
        };

        NotificationUtils.failedToLoadUserPreferences = function () {
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKey(NotificationUtils.userPreferencesTranslatePrefix, "failedToLoadUserPreferences")
            });
        };

        NotificationUtils.failedToSaveUserPreferences = function () {
            Notifications.add({
                type: NotificationType.TYPE.error,
                text: Utils.translateKey(NotificationUtils.userPreferencesTranslatePrefix, "failedToSaveUserPreferences")
            });
        };


        NotificationUtils.changesMadeInPreferenceSectionAreSaved = function () {
            Notifications.add({
                type: NotificationType.TYPE.info,
                text: Utils.translateKey(NotificationUtils.userPreferencesTranslatePrefix, "changesMadeInPreferenceSectionAreSaved")
            });
        };
        
        
        NotificationUtils.showTooManyEventsWarning = function() {
            Notifications.add({
                messageId: "tooManyEventsCame",
                type: NotificationType.TYPE.warning,
                text: Utils.translateKey("oep.exploration.warnings.", "tooManyEventsCame"),
                autoHide: 5
            });
        };

        NotificationUtils.eventsAreShownAgain = function() {
            Notifications.add({
                messageId: "eventsAreShownAgain",
                type: NotificationType.TYPE.success,
                text: Utils.translateKey("oep.exploration.messages.", "eventsAreShownAgain"),
                autoHide: 5
            });
        };

        return NotificationUtils;

    });


