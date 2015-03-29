/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 *
 * Date: 3/28/14
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('QueryDependenciesController', [
        'jquery',
        'Utils',
        'ExplorationUtils',
        'QueryAnalyser',
        'QueryPrinter'

    ],

    /**
     * @exports exploration/query
     * @ignore
     */
        function ($, Utils, ExplorationUtils, QueryAnalyser, QueryPrinter) {

        /**
         * @class
         * @classdesc class responsibility: if changes in the one of cql clause controller (for example: Sources)
         * affects other cql clauses (for example: some Filters/Correlations become not valid if you remove the source),
         * user will see Confimation dialog ( with list of  affected clauses)
         * and user can approve or reject Changes
         *
         * @constructor
         */
        function QueryDependenciesController() {

            var queryAnalyser = QueryAnalyser.getInstance();
            var queryPrinter = QueryPrinter.getInstance();
            var exUtils = ExplorationUtils.getInstance();

            var line = "<br> ";
            var space = " ";
            var belowWillBeLost = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "belowWillBeLost");
            var isUsedIn = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "isUsedIn");
            var andLabel = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "andLabel");

            var sourceLabel = Utils.translateKeyAndAddSpace(exUtils.conditionsTranslatePrefix, "Source");
            var areYouSureToRemoveThisSource = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "areYouSureToRemoveThisSource");

            var conditionsLabel = Utils.translateKeyAndAddSpace(exUtils.conditionsTranslatePrefix, "CONDITIONS");

            var correlationLabel = Utils.translateKeyAndAddSpace(exUtils.correlationsTranslatePrefix, "Correlation");
            var correlationsLabel = Utils.translateKeyAndAddSpace(exUtils.correlationsTranslatePrefix, "Correlations");
            var areYouSureToChangeThisCorrelation = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "areYouSureToChangeThisCorrelation");
            var areYouSureToRemoveThisCorrelation = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "areYouSureToRemoveThisCorrelation");

            var summaryLabel = Utils.translateKeyAndAddSpace(exUtils.summariesTranslatePrefix, "Summary");
            var summariesLabel = Utils.translateKeyAndAddSpace(exUtils.summariesTranslatePrefix, "Summaries");
            var areYouSureToChangeThisSummary = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "areYouSureToChangeThisSummary");
            var areYouSureToRemoveThisSummary = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "areYouSureToRemoveThisSummary");

            var groupByFieldLabel = Utils.translateKeyAndAddSpace(exUtils.groupByTranslatePrefix, "GroupByField");
            var groupByFieldsLabel = Utils.translateKeyAndAddSpace(exUtils.groupByTranslatePrefix, "GroupByFields");
            var areYouSureToApplyGroupByChanges = Utils.translateKeyAndAddSpace(exUtils.confirmDialogTranslatePrefix, "areYouSureToApplyGroupByChanges");

            /**
             *  showConfirmDialogIfRemovedSourceAffects Exploration Clauses
             *  Exploration Clauses  : conditions, correlations, summaries, group by fields
             *
             * @param {Object}  removeEvent - select2 event
             * @returns {boolean} - true if dialog showed
             */
            this.showConfirmDialogIfRemovedSourceAffectsExplorationClauses = function (removeEvent) {
                /**
                 *
                 * @type {EventSource}
                 */
                var sourceForRemove = removeEvent.choice;
                var sources = ExplorationUtils.getInstance().getExplorationSources();
                var sourcesAfterRemoval = Utils.excludeObjectsWithId([sourceForRemove], sources);

                var correlations = ExplorationUtils.getInstance().getExplorationCorrelations();
                var conditions = ExplorationUtils.getInstance().getExplorationConditions();
                var summaries = ExplorationUtils.getInstance().getExplorationSummaries();
                var groupByFields = ExplorationUtils.getInstance().getExplorationGroupByFields();

                var correlationsWithoutSource = queryAnalyser.getConditionsWithoutSource(sourcesAfterRemoval, correlations);

                var correlationsAfterRemoval = Utils.excludeObjectsWithId(correlationsWithoutSource, correlations);
                var conditionsWithoutSourceOrCorrelation = queryAnalyser.getConditionsWithoutSourceOrCorrelation(sourcesAfterRemoval, conditions, correlationsAfterRemoval);

                var summariesWithoutSource = queryAnalyser.getSummariesWithoutSource(sourcesAfterRemoval, summaries);
                var groupByFieldsWithoutSource = queryAnalyser.getGroupByFieldsWithoutSource(sourcesAfterRemoval, groupByFields);

                if (conditionsWithoutSourceOrCorrelation.length === 0 &&
                    correlationsWithoutSource.length === 0 &&
                    groupByFieldsWithoutSource.length === 0 &&
                    summariesWithoutSource.length === 0) {
                    return false;

                } else {
                    buildRemovedSourceConfirmDialog(removeEvent, sourceForRemove, correlationsWithoutSource, conditionsWithoutSourceOrCorrelation, summariesWithoutSource, groupByFieldsWithoutSource);
                    return true;
                }

            };

            /**
             *
             * @param {Object} removeSourceEvent - select2 event
             * @param {EventSource}  sourceForRemove
             * @param {Correlation[]} correlationsWithoutSource
             * @param {Condition[]} conditionsWithoutSourceOrCorrelation
             * @param {Summary[]} summariesWithoutSource
             * @param {Field[]} groupByFieldsWithoutSource
             */
            function buildRemovedSourceConfirmDialog(removeSourceEvent, sourceForRemove, correlationsWithoutSource, conditionsWithoutSourceOrCorrelation, summariesWithoutSource, groupByFieldsWithoutSource) {
                removeSourceEvent.preventDefault();
                var sourceName = removeSourceEvent.val;

                var confirmMessage = createRemovedSourceConfirmMessage(sourceForRemove, correlationsWithoutSource, conditionsWithoutSourceOrCorrelation, summariesWithoutSource, groupByFieldsWithoutSource);
                var acceptCallback = removeSourceAndRelatedClauses(sourceName, conditionsWithoutSourceOrCorrelation, correlationsWithoutSource, summariesWithoutSource, groupByFieldsWithoutSource);

                showConfirmDialog(confirmMessage, acceptCallback, function () {
                });
            }

            /**
             *
             * @param {string} sourceName
             * @param {Condition[]} conditions
             * @param {Correlation[]} correlations
             * @param {Summary} summaries
             * @param {Field[]} groupByFields
             * @returns {Function}
             */
            function removeSourceAndRelatedClauses(sourceName, conditions, correlations, summaries, groupByFields) {
                return function () {
                    exUtils.removeConditions(conditions);
                    exUtils.removeCorrelations(correlations);
                    exUtils.removeSummaries(summaries);
                    exUtils.removeGroupByFields(groupByFields);

                    removeElementFromSourceCombobox(sourceName);

                };
            }

            /**
             *
             * @param {string} sourceIdForRemove
             */
            function removeElementFromSourceCombobox(sourceIdForRemove) {
                var select2 = $(exUtils.sourceCombobox);
                var sources = select2.select2("data");

                var sourcesWithoutRemovedSource = sources.filter(function (source) {
                        return source.name !== sourceIdForRemove;
                    }
                );
                select2.select2("data", sourcesWithoutRemovedSource, true);
            }

            /**
             *
             * @param {String} confirmMessage
             * @param {Function} acceptCallback
             * @param {Function} rejectCallback
             */
            function showConfirmDialog(confirmMessage, acceptCallback, rejectCallback) {

                var confirmDialogContaner = $(exUtils.explorationEditorConfirmDialogClass);
                var confirmDialog = confirmDialogContaner.find(exUtils.explorationEditorConfirmDialog);


                confirmDialogContaner.find(exUtils.explorationEditorConfirmDialogCreateButton).unbind().click(function () {
                    confirmDialog.ojDialog("close");
                    acceptCallback();

                });

                confirmDialogContaner.find(exUtils.explorationEditorConfirmDialogCancelButton).unbind().click(function () {
                    confirmDialog.ojDialog("close");
                    rejectCallback();

                });

                confirmDialog.find(exUtils.explorationEditorConfirmDialogMessage).html(confirmMessage);

                confirmDialog.ojDialog("open");

            }


            /**
             *
             * @param {EventSource}  sourceForRemove
             * @param {Correlation[]} correlationsWithoutSource
             * @param {Condition[]} conditionsWithoutSourceOrCorrelation
             * @param {Summary} summariesWithoutSource
             * @param {Field[]}groupByFieldsWithoutSource
             * @returns {string}
             */
            function createRemovedSourceConfirmMessage(sourceForRemove, correlationsWithoutSource, conditionsWithoutSourceOrCorrelation, summariesWithoutSource, groupByFieldsWithoutSource) {


                var confirm = "";

                var labels = [];
                if (correlationsWithoutSource.length !== 0) {
                    labels.push(correlationsLabel);
                }
                if (conditionsWithoutSourceOrCorrelation.length !== 0) {
                    labels.push(conditionsLabel);
                }
                if (summariesWithoutSource.length !== 0) {
                    labels.push(summariesLabel);
                }

                if (groupByFieldsWithoutSource.length !== 0) {
                    labels.push(groupByFieldsLabel);
                }

                var joinedLabels = labels.join(andLabel);

                confirm += sourceLabel + space +
                    sourceForRemove.displayName + space +
                    isUsedIn +
                    joinedLabels +
                    ":" + line + line;

                if (correlationsWithoutSource.length !== 0) {
                    confirm += correlationsLabel + belowWillBeLost +
                        line +
                        queryPrinter.conditionsToText(correlationsWithoutSource) +
                        line;
                }

                if (conditionsWithoutSourceOrCorrelation.length !== 0) {
                    confirm += conditionsLabel + belowWillBeLost +
                        line +
                        queryPrinter.conditionsToText(conditionsWithoutSourceOrCorrelation) +
                        line;
                }

                if (summariesWithoutSource.length !== 0) {
                    confirm += summariesLabel + belowWillBeLost +
                        line +
                        queryPrinter.summariesToText(summariesWithoutSource) +
                        line;
                }

                if (groupByFieldsWithoutSource.length !== 0) {
                    confirm += groupByFieldsLabel + belowWillBeLost +
                        line +
                        queryPrinter.fieldsToText(groupByFieldsWithoutSource) +
                        line;
                }

                confirm += line +
                    areYouSureToRemoveThisSource;
                return confirm;
            }


            /**
             *
             * @param {Correlation} changedCorrelation
             * @param {Correlation} correlation
             * @param {string} operandId
             * @param {jqueryObject |select2} fieldControl
             * @param {jqueryObject |select2} oppositeFieldControl
             *
             * @returns {boolean} - true if dialog showed
             */
            this.showConfirmDialogIfChangedCorrelationAffectsConditions = function (correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl) {

                var sources = ExplorationUtils.getInstance().getExplorationSources();
                var correlAfterChange = getCorrelationsAfterChange(correlation, changedCorrelation);
                var conditions = ExplorationUtils.getInstance().getExplorationConditions();
                var conditionsWithoutSourceOrCorrelation = queryAnalyser.getConditionsWithoutSourceOrCorrelation(sources, conditions, correlAfterChange);

                if (conditionsWithoutSourceOrCorrelation.length === 0) {
                    changeCorrelation(correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl);
                    return false;

                } else {
                    buildChangedCorrelationConfirmDialog(correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl, conditionsWithoutSourceOrCorrelation);
                    return true;
                }

            };


            /**
             *
             * @param {Correlation} correlation
             * @param {Correlation} changedCorrelation
             * @returns {Array.<{id: String}>}
             */
            function getCorrelationsAfterChange(correlation, changedCorrelation) {
                var correlations = ExplorationUtils.getInstance().getExplorationCorrelations();

                var correlationsAfterChange = Utils.excludeObjectsWithId([correlation], correlations);
                correlationsAfterChange.push(changedCorrelation);
                return correlationsAfterChange;
            }


            /**
             *
             * @param {Correlation} correlation
             * @param {Correlation} changedCorrelation
             * @param {string} operandId
             * @param {jqueryObject |select2} fieldControl
             * @param {jqueryObject |select2} oppositeFieldControl
             * @param {Condition[]} conditionsWithoutSourceOrCorrelation
             */
            function buildChangedCorrelationConfirmDialog(correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl, conditionsWithoutSourceOrCorrelation) {

                var confirmMessage = createChangedCorrelationAffectsConditionsConfirmMessage(correlation, conditionsWithoutSourceOrCorrelation);
                var acceptCallback = changeCorrelationAndRemoveAffectedConditions(correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl, conditionsWithoutSourceOrCorrelation);
                showConfirmDialog(confirmMessage, acceptCallback, function () {

                });
            }


            /**
             *
             * @param {Correlation} correlation
             * @param {Correlation} changedCorrelation
             * @param {string} operandId
             * @param {jqueryObject |select2} fieldControl
             * @param {jqueryObject |select2} oppositeFieldControl
             * @param {Condition[]} conditionsWithoutSourceOrCorrelation
             * @returns {Function}
             */
            function changeCorrelationAndRemoveAffectedConditions(correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl, conditionsWithoutSourceOrCorrelation) {
                return function () {
                    exUtils.removeConditions(conditionsWithoutSourceOrCorrelation);
                    changeCorrelation(correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl);
                };
            }


            /**
             *
             * @param {Correlation} correlation
             * @param {Correlation} changedCorrelation
             * @param {string} operandId
             * @param {jqueryObject |select2} fieldControl
             * @param {jqueryObject |select2} oppositeFieldControl
             */
            function changeCorrelation(correlation, changedCorrelation, operandId, fieldControl, oppositeFieldControl) {
                fieldControl.select2("val", changedCorrelation[operandId].field.id, true);
                oppositeFieldControl.select2("val", changedCorrelation[exUtils.getOppositeOperandId(operandId)].field.id, true);
                $("#" + correlation.id).focus();
//                queryAnalyser.updateQueries();
                exUtils.explorationKoModel.exploration().correlations.valueHasMutated();
//                exUtils.explorationKoModel.deployExplorationTrigger(true);
            }

            /**
             *
             * @param {Correlation} correlation
             * @param {Condition[]} conditionsWithoutSourceOrCorrelation
             * @returns {string}
             */
            function createChangedCorrelationAffectsConditionsConfirmMessage(correlation, conditionsWithoutSourceOrCorrelation) {

                var confirm = "";
                confirm += correlationLabel + space +
                    queryPrinter.conditionToText(correlation) + space +
                    isUsedIn +
                    ((conditionsWithoutSourceOrCorrelation.length !== 0 ) ? conditionsLabel : "") +
                    ":" + line + line;

                if (conditionsWithoutSourceOrCorrelation.length !== 0) {
                    confirm += conditionsLabel + belowWillBeLost +
                        line +
                        queryPrinter.conditionsToText(conditionsWithoutSourceOrCorrelation) +
                        line;
                }

                confirm += line +
                    areYouSureToChangeThisCorrelation;
                return confirm;
            }


            /**
             *
             * @param {Correlation} correlationForRemove              *
             * @returns {boolean} - true if dialog showed
             */
            this.showConfirmDialogIfRemovedCorrelationAffectsConditions = function (correlationForRemove) {

                var sources = ExplorationUtils.getInstance().getExplorationSources();

                var correlations = ExplorationUtils.getInstance().getExplorationCorrelations();
                var correlationsWithoutCorrelationForRemove = Utils.excludeObjectsWithId([correlationForRemove], correlations);


                var conditions = ExplorationUtils.getInstance().getExplorationConditions();
                var conditionsWithoutSourceOrCorrelation = queryAnalyser.getConditionsWithoutSourceOrCorrelation(sources, conditions, correlationsWithoutCorrelationForRemove);

                if (conditionsWithoutSourceOrCorrelation.length === 0) {
                    exUtils.removeCorrelation(correlationForRemove.id);
                    return false; //no confirm dialog

                } else {
                    buildRemovedCorrelationConfirmDialog(correlationForRemove, conditionsWithoutSourceOrCorrelation);
                    return true;
                }
            };

            /**
             *
             * @param {Correlation} correlation
             * @param conditionsWithoutSourceOrCorrelation
             */
            function buildRemovedCorrelationConfirmDialog(correlation, conditionsWithoutSourceOrCorrelation) {

                var confirmMessage = createRemovedCorrelationAffectsConditionsConfirmMessage(correlation, conditionsWithoutSourceOrCorrelation);
                var acceptCallback = removeCorrelationAndAffectedConditions(correlation, conditionsWithoutSourceOrCorrelation);

                showConfirmDialog(confirmMessage, acceptCallback, function () {

                });
            }

            /**
             *
             * @param {Correlation} correlation
             * @param {Condition[]} conditions
             * @returns {Function}
             */
            function removeCorrelationAndAffectedConditions(correlation, conditions) {
                return function () {
                    exUtils.removeConditions(conditions);
                    exUtils.removeCorrelation(correlation.id);

                };
            }

            /**
             *
             * @param {Correlation} correlation
             * @param {Condition[]} conditionsWithoutSourceOrCorrelation
             * @returns {string}
             */
            function createRemovedCorrelationAffectsConditionsConfirmMessage(correlation, conditionsWithoutSourceOrCorrelation) {

                var confirm = "";
                confirm += correlationLabel + space +
                    queryPrinter.conditionToText(correlation) + space +
                    isUsedIn +
                    ((conditionsWithoutSourceOrCorrelation.length !== 0 ) ? conditionsLabel : "") +
                    ":" + line + line;

                if (conditionsWithoutSourceOrCorrelation.length !== 0) {
                    confirm += conditionsLabel + belowWillBeLost +
                        line +
                        queryPrinter.conditionsToText(conditionsWithoutSourceOrCorrelation) +
                        line;
                }

                confirm += line +
                    areYouSureToRemoveThisCorrelation;
                return confirm;
            }


            /**
             * @param {Summary} summary
             * @param {Summary} changedSummary
             * @param {jqueryObject |select2} summaryFieldControl
             * @param {jqueryObject |select2} aggregateFunctionControl
             */
            this.showConfirmDialogIfChangedSummaryAffectsConditions = function (summary, changedSummary, summaryFieldControl, aggregateFunctionControl) {

                var summariesAfterChange_ = summariesAfterChange(summary, changedSummary);
                var affectedConditions = queryAnalyser.getNotValidSummaryConditions(summariesAfterChange_);

                var changeSummaryAndRemoveAffectedConditionsFunction_ = changeSummaryAndRemoveAffectedConditionsFunction(summary, changedSummary, affectedConditions, summaryFieldControl, aggregateFunctionControl);

                if (isConfirmDialogNeeded(affectedConditions)) {
                    buildChangedSummaryConfirmDialog(summary, affectedConditions, changeSummaryAndRemoveAffectedConditionsFunction_);
                } else {
                    changeSummaryAndRemoveAffectedConditionsFunction_();
                }
            };

            /**
             *
             * @param {Condition[]} affectedConditions
             * @returns {boolean}
             */
            function isConfirmDialogNeeded(affectedConditions) {
                return affectedConditions.length > 0;
            }

            /**
             *
             * @param {Summary}  summary
             * @param {Summary}  changedSummary
             * @returns {Summary[]}
             */
            function summariesAfterChange(summary, changedSummary) {
                var summaries = ExplorationUtils.getInstance().getExplorationSummaries();

                var summariesAfterChange_ = Utils.excludeObjectsWithId([summary], summaries);
                summariesAfterChange_.push(changedSummary);
                return summariesAfterChange_;
            }

            /**
             *
             * @param {Summary}  summary
             * @param {Condition[]} affectedConditions
             * @param {Function}  acceptCallback
             */
            function buildChangedSummaryConfirmDialog(summary, affectedConditions, acceptCallback) {
                var confirmMessage = createChangedSummaryAffectsConditionsConfirmMessage(summary, affectedConditions);
                showConfirmDialog(confirmMessage, acceptCallback, function () {

                });
            }

            /**
             *
             * @param {Summary}  summary
             * @param {Summary}  changedSummary
             * @param {Condition[]} conditions
             * @param {jqueryObject |select2} summaryFieldControl
             * @param {jqueryObject |select2} aggregateFunctionControl
             * @returns {Function}
             */
            function changeSummaryAndRemoveAffectedConditionsFunction(summary, changedSummary, conditions, summaryFieldControl, aggregateFunctionControl) {
                return changeSummaryAndRemoveAffectedConditions(summary, changedSummary, conditions, summaryFieldControl, aggregateFunctionControl);
            }

            /**
             *
             * @param {Summary}  summary
             * @param {Summary}  changedSummary
             * @param {Condition[]} conditions
             * @param {jqueryObject |select2} summaryFieldControl
             * @param {jqueryObject |select2} aggregateFunctionControl
             * @returns {Function}
             */
            function changeSummaryAndRemoveAffectedConditions(summary, changedSummary, conditions, summaryFieldControl, aggregateFunctionControl) {
                return function () {
                    exUtils.removeConditions(conditions);

                    summary.aggregatedField = changedSummary.aggregatedField;
                    summary.operand = changedSummary.operand;

                    changeControlCombobox(summary.id, summary.operand.field.id, summaryFieldControl);
                    changeControlCombobox(summary.id, summary.aggregatedField.aggregateFunction, aggregateFunctionControl);
//                    queryAnalyser.updateQueries();
                    exUtils.explorationKoModel.exploration().summaries.valueHasMutated();
                    exUtils.explorationKoModel.currentEditedClause(summary);

                };
            }


            /**
             *
             * @param {string} controlId
             * @param {Object} value
             * @param {jqueryObject |select2} select2Control
             */
            function changeControlCombobox(controlId, value, select2Control) {
                select2Control.select2("val", value, true);
                $("#" + controlId).focus();
            }


            /**
             *
             * @param {Summary}  summary
             * @param {Condition[]} affectedConditions
             * @returns {string}
             */
            function createChangedSummaryAffectsConditionsConfirmMessage(summary, affectedConditions) {

                var confirm = "";
                confirm += summaryLabel + space +
                    queryPrinter.summaryToText(summary) + space +
                    isUsedIn +
                    ((affectedConditions.length !== 0 ) ? conditionsLabel : "") +
                    ":" + line + line;

                if (affectedConditions.length !== 0) {
                    confirm += conditionsLabel + belowWillBeLost +
                        line +
                        queryPrinter.conditionsToText(affectedConditions) +
                        line;
                }

                confirm += line +
                    areYouSureToChangeThisSummary;
                return confirm;
            }


            /**
             *
             * @param {Summary} summaryForRemove
             * @returns {boolean} - true if dialog showed
             */
            this.showConfirmDialogIfRemovedSummaryAffectsConditions = function (summaryForRemove) {

                var summaries = ExplorationUtils.getInstance().getExplorationSummaries();
                var summariesWithoutSummaryForRemove = Utils.excludeObjectsWithId([summaryForRemove], summaries);

                var conditionsWithRemovedSummaries = queryAnalyser.getNotValidSummaryConditions(summariesWithoutSummaryForRemove);

                if (conditionsWithRemovedSummaries.length === 0) {
                    exUtils.removeSummary(summaryForRemove.id);//remove silence
                    return false;
                } else {
                    buildRemovedSummaryConfirmDialog(summaryForRemove, conditionsWithRemovedSummaries);
                    return true;
                }
            };

            /**
             *
             * @param {Summary}  summary
             * @param {Condition[]} affectedConditions
             */
            function buildRemovedSummaryConfirmDialog(summary, affectedConditions) {

                var confirmMessage = createRemovedSummmaryAffectsConditionsConfirmMessage(summary, affectedConditions);
                var acceptCallback = removeSummaryAndAffectedConditions(summary, affectedConditions);

                showConfirmDialog(confirmMessage, acceptCallback, function () {

                });
            }

            /**
             *
             * @param {Summary}  summary
             * @param {Condition[]} conditions
             * @returns {Function}
             */
            function removeSummaryAndAffectedConditions(summary, conditions) {
                return function () {
                    exUtils.removeConditions(conditions);
                    exUtils.removeSummary(summary.id);

                };
            }

            /**
             *
             * @param {Summary}  summary
             * @param {Condition[]} affectedConditions
             * @returns {string}
             */
            function createRemovedSummmaryAffectsConditionsConfirmMessage(summary, affectedConditions) {

                var confirm = "";
                confirm += summaryLabel + space +
                    queryPrinter.summaryToText(summary) + space +
                    isUsedIn +
                    ((affectedConditions.length !== 0 ) ? conditionsLabel : "") +
                    ":" + line + line;

                if (affectedConditions.length !== 0) {
                    confirm += conditionsLabel + belowWillBeLost +
                        line +
                        queryPrinter.conditionsToText(affectedConditions) +
                        line;
                }

                confirm += line +
                    areYouSureToRemoveThisSummary;
                return confirm;
            }


            /**
             *
             * @param {SelectedField[]} oldGroupByFields
             * @param {SelectedField[]} changedGroupByFields
             * @param {Function} functionIfGroupByChangesShouldBeApplyed
             *
             * @returns {boolean} - true if dialog showed
             */
            this.showConfirmDialogIfChangedGroupByAffectsConditions = function (oldGroupByFields, changedGroupByFields, functionIfGroupByChangesShouldBeApplyed) {

                if (!isGroupByFieldsChanged(oldGroupByFields, changedGroupByFields)) {
                    return false;
                }
                var removedGroupByFields = queryAnalyser.getRemovedGroupByFields(oldGroupByFields, changedGroupByFields);
                var notValidGroupByConditions = queryAnalyser.getNotValidGroupByConditions(removedGroupByFields);

                if (notValidGroupByConditions.length === 0) { // apply changes silently
                    functionIfGroupByChangesShouldBeApplyed();
                } else {
                    buildChangedGroupByFieldsConfirmDialog(changedGroupByFields, removedGroupByFields, functionIfGroupByChangesShouldBeApplyed, notValidGroupByConditions);
                }

            };

            /**
             *
             * @param {SelectedField[]} oldGroupByFields
             * @param {SelectedField[]} changedGroupByFields
             *
             * @returns {boolean} - true if dialog showed
             */
            function isGroupByFieldsChanged(oldGroupByFields, changedGroupByFields) {

                if (oldGroupByFields.length !== changedGroupByFields.length) {
                    return true;
                } else {
                    for (var i = 0; i < oldGroupByFields.length; i++) {
                        if (!oldGroupByFields[i].equalsWithVisible(changedGroupByFields[i])) {
                            return true;
                        }
                    }
                    return false;
                }

            }


            /**
             *
             * @param {SelectedField[]} changedGroupByFields
             * @param {SelectedField[]} removedGroupByFields
             * @param {Function} functionIfGroupByChangesShouldBeApplyed
             * @param {Condition[]} affectedConditions
             */
            function buildChangedGroupByFieldsConfirmDialog(changedGroupByFields, removedGroupByFields, functionIfGroupByChangesShouldBeApplyed, affectedConditions) {

                var confirmMessage = createRemovedGroupByFieldsAffectsConditionsConfirmMessage(removedGroupByFields, affectedConditions);
                var acceptCallback = applyGroupByFieldsChangesAndRemoveAffectedConditions(functionIfGroupByChangesShouldBeApplyed, affectedConditions);

                showConfirmDialog(
                    confirmMessage,
                    acceptCallback,
                    function () {
                        //rejectCallback
                    });
            }

            /**
             *
             * @param {Function} functionIfGroupByChangesShouldBeApplyed
             * @param {Condition[]} affectedConditions
             * @returns {Function}
             */
            function applyGroupByFieldsChangesAndRemoveAffectedConditions(functionIfGroupByChangesShouldBeApplyed, affectedConditions) {
                return function () {
                    exUtils.removeConditions(affectedConditions);
                    functionIfGroupByChangesShouldBeApplyed();
                };
            }

            /**
             *
             *
             * @param {SelectedField[]} removedGroupByFields
             * @param {Condition[]} affectedConditions
             * @returns {string}
             */
            function createRemovedGroupByFieldsAffectsConditionsConfirmMessage(removedGroupByFields, affectedConditions) {

                var confirm = "";
                confirm += groupByFieldsLabel + ":" + line +
                    queryPrinter.selectedFieldsToText(removedGroupByFields) + space +
                    isUsedIn +
                    ((affectedConditions.length !== 0 ) ? conditionsLabel : "") +
                    ":" + line + line;

                if (affectedConditions.length !== 0) {
                    confirm += conditionsLabel + belowWillBeLost +
                        line +
                        queryPrinter.conditionsToText(affectedConditions) +
                        line;
                }

                confirm += line +
                    areYouSureToApplyGroupByChanges;
                return confirm;
            }


        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {QueryDependenciesController}
         */
        QueryDependenciesController.getInstance = function () {
            if (!this.instance) {
                this.instance = new QueryDependenciesController();
            }
            return this.instance;
        };


        return QueryDependenciesController;

    });


