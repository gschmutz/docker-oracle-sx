/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'ServiceFactory',
        ['jquery', 'knockout', 'Translate', 'EventShapeService', 'SourceService', 'SourceTypeService',
            'TargetService', 'TargetTypeService', 'ExplorationService', 'PatternService', 'BrowseService'],
        /**
         * @exports event/source
         * @ignore
         */
                function($, ko, Translate, EventShapeService, SourceService, SourceTypeService,
                        TargetService, TargetTypeService, ExplorationService, PatternService, BrowseService) {
                    /**
                     * @class
                     * @classdesc This class is a factory for entity (thing) services. Please, add any new services if required: PatternService, TagService and other
                     */

                    var eventShapeService = new EventShapeService();
                    var sourceService = new SourceService();
                    var targetService = new TargetService();
                    var sourceTypeService = new SourceTypeService();
                    var targetTypeService = new TargetTypeService();
                    var explorationShapeService = new ExplorationService();
                    var patternService = new PatternService();
                    var browseService = new BrowseService();
                    
                    return {
                        getEventShapeService: function() {
                            return eventShapeService;
                        },
                        getSourceService: function() {
                            return sourceService;
                        },
                        getTargetService: function() {
                            return targetService;
                        },
                        getExplorationService: function() {
                            return explorationShapeService;
                        },
                        getSourceTypeService: function() {
                            return sourceTypeService;
                        },
                        getTargetTypeService: function() {
                            return targetTypeService;
                        },
                        getPatternService: function() {
                            return patternService;
                        },
                        getBrowseService: function() {
                            return browseService;
                        }
                    };
                }
        );



