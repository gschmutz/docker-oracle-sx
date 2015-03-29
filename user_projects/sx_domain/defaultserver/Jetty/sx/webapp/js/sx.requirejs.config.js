// Workaround for Knockout not initializing the global "ko" variable when it detects Require.js
define('knockout.global', ['knockout'], function (kno) {
    window.ko = kno; // Initialize a global 'ko' variable
    return kno;
});

requirejs.config({
    paths: {
        'SxStart': 'app/SxStart',

        'SxController': 'app/sxController/SxController',
        'SxControllerImpl': 'app/sxController/SxControllerImpl',

        'NavigationController': 'app/navigation/NavigationController',

        'HomeController': 'app/home/HomeController',

        'HelpController': 'app/help/HelpController',
        'UserAssistance': 'app/help/UserAssistance',
        'HelpBannerPanel': 'app/help/HelpBannerPanel',
        'AboutController': 'app/help/AboutController',
        'ExplorationUserAssistance': 'app/help/ExplorationUserAssistance',

        'UserInfo': 'app/user/UserInfo',
        'UserPreferencesModel': 'app/user/UserPreferencesModel',
        'UserPreferencesParameters': 'app/user/UserPreferencesParameters',
        'UserPreferencesController': 'app/user/UserPreferencesController',
        'UserPreferencesLoader': 'app/user/UserPreferencesLoader',
        'PresentationModeController': 'app/user/PresentationModeController',

        'ProgressBar': 'app/components/ProgressBar',
        'PageIsLoading': 'app/components/PageIsLoading',

        'Exploration': 'app/exploration/model/Exploration',
        'ExplorationActions': 'app/exploration/model/ExplorationActions',

        'ExplorationKoModel': 'app/exploration/controller/ExplorationKoModel',
        'ExplorationsController': 'app/exploration/controller/ExplorationsController',

        'CreateExplorationDialogController': 'app/exploration/create/CreateExplorationDialogController',

        'WeightTag': 'app/exploration/tags/WeightTag',
        'TagsStorage': 'app/exploration/tags/TagsStorage',

        'Thing': 'app/things/Thing',
        'EventShapeThing': 'app/things/EventShapeThing',
        'SourceThing': 'app/things/SourceThing',
        'TargetThing': 'app/things/TargetThing',
        'SourceTypeThing': 'app/things/SourceTypeThing',
        'TargetTypeThing': 'app/things/TargetTypeThing',
        'ExplorationThing': 'app/things/ExplorationThing',
        'PatternThing': 'app/things/PatternThing',

        'Catalog': 'app/catalog/Catalog',
        'CatalogParameters': 'app/catalog/CatalogParameters',
        'CatalogViewController': 'app/catalog/CatalogViewController',
        'CatalogBoxViewController': 'app/catalog/CatalogBoxViewController',
        'CatalogListViewController': 'app/catalog/CatalogListViewController',
        'CatalogUtils': 'app/catalog/CatalogUtils',
        'DeleteItemConfirmationDialog': 'app/catalog/DeleteItemConfirmationDialog',

        'ServiceFactory': 'app/serviceFactory/ServiceFactory',
        'ThingService': 'app/serviceFactory/services/ThingService',
        'ExplorationService': 'app/serviceFactory/services/ExplorationService',
        'EventShapeService': 'app/serviceFactory/services/EventShapeService',
        'SourceService': 'app/serviceFactory/services/SourceService',
        'TargetService': 'app/serviceFactory/services/TargetService',
        'SourceTypeService': 'app/serviceFactory/services/SourceTypeService',
        'TargetTypeService': 'app/serviceFactory/services/TargetTypeService',
        'PatternService': 'app/serviceFactory/services/PatternService',
        'BrowseService': 'app/serviceFactory/services/BrowseService',

        'ThingManager': 'app/uiManagers/ThingManager',
        'ExplorationManager': 'app/uiManagers/ExplorationManager',
        'PatternManager': 'app/uiManagers/PatternManager',
        'EventShapeManager': 'app/uiManagers/EventShapeManager',
        'SourceManager': 'app/uiManagers/SourceManager',
        'TargetManager': 'app/uiManagers/TargetManager',
        'SourceTypeManager': 'app/uiManagers/SourceTypeManager',
        'AnyThingManager': 'app/uiManagers/AnyThingManager',

        'EventSource': 'app/exploration/sources/EventSource',
        'SourceParameter': 'app/exploration/sources/SourceParameter',
        'SourcesController': 'app/exploration/sources/SourcesController',
        'SourceSummaryController': 'app/exploration/sources/SourceSummaryController',

        'EditedRegion': 'app/exploration/conditions/EditedRegion',
        'FiltersMatchingEditor': 'app/exploration/conditions/FiltersMatchingEditor',
        'ClauseController': 'app/exploration/conditions/ClauseController',
        'ConditionsController': 'app/exploration/conditions/ConditionsController',
        'ConditionsMatching': 'app/exploration/conditions/ConditionsMatching',
        'Condition': 'app/exploration/conditions/Condition',

        'CorrelationsController': 'app/exploration/correlations/CorrelationsController',
        'Correlation': 'app/exploration/correlations/Correlation',

        'PublishController': 'app/exploration/publish/PublishController',
        'UndoRedoController': 'app/exploration/undoredo/UndoRedoController',
        'DeployerController': 'app/exploration/deployer/DeployerController',

        'ExportController': 'app/exploration/export/ExportController',
        'ExportDependency': 'app/exploration/export/ExportDependency',

        'ExplorationConverter': 'app/exploration/converter/ExplorationConverter',

        'ResultsController': 'app/exploration/results/ResultsController',
        'VisualizationComponentsController': 'app/exploration/results/VisualizationComponentsController',
        'ChartsViewModeSwitcher': 'app/exploration/results/ChartsViewModeSwitcher',
        'ChartsBucketsController': 'app/exploration/results/ChartsBucketsController',
        'ChartBucketController': 'app/exploration/results/ChartBucketController',

        'QuerySubscriptionModel': 'app/exploration/subscriber/QuerySubscriptionModel',
        'SubscriberCometd': 'app/exploration/subscriber/SubscriberCometd',

        'Table': 'app/exploration/results/table/Table',
        'EventProcessingTable': 'app/exploration/results/table/EventProcessingTable',

        'AggregateFunctions': 'app/exploration/summaries/AggregateFunctions',
        'Summary': 'app/exploration/summaries/Summary',
        'SummariesController': 'app/exploration/summaries/SummariesController',

        'GroupByController': 'app/exploration/summaries/GroupByController',
        'GroupByModel': 'app/exploration/summaries/GroupByModel',

        'WindowsDrawerController': 'app/exploration/window/WindowsDrawerController',
        'WindowsController': 'app/exploration/window/WindowsController',
        'Window': 'app/exploration/window/Window',
        'WindowUnit': 'app/exploration/window/WindowUnit',

        'ColorCoding': 'app/exploration/color/ColorCoding',

        'Operand': 'app/exploration/operand/Operand',
        'OperandType': 'app/exploration/operand/OperandType',

        'Field': 'app/exploration/field/Field',
        'PatternField': 'app/exploration/field/PatternField',
        'ConstantField': 'app/exploration/field/ConstantField',
        'AggregatedField': 'app/exploration/field/AggregatedField',
        'SelectedField': 'app/exploration/field/SelectedField',
        'FieldType': 'app/exploration/field/FieldType',
        'FieldTypeOperations': 'app/exploration/field/FieldTypeOperations',
        'ImplicitDatatypeConversionMatrix': 'app/exploration/field/ImplicitDatatypeConversionMatrix',
        'Operations': 'app/exploration/field/Operations',
        'ExplorationFieldsController': 'app/exploration/field/ExplorationFieldsController',

        'EventTypeField': 'app/exploration/select/EventTypeField',
        'EventTypeController': 'app/exploration/select/EventTypeController',

        'ExplorationUtils': 'app/exploration/utils/ExplorationUtils',

        'Query': 'app/exploration/query/Query',
        'QueryAnalyser': 'app/exploration/query/QueryAnalyser',
        'QueryPrinter': 'app/exploration/query/QueryPrinter',
        'QueryDependenciesController': 'app/exploration/query/QueryDependenciesController',

        'Loader': 'app/exploration/loader/Loader',
        'ExplorationsLoader': 'app/exploration/loader/ExplorationsLoader',
        'SourceLoader': 'app/exploration/loader/SourceLoader',
        'SourceTypeLoader': 'app/exploration/loader/SourceTypeLoader',
        'SourceStorage': 'app/exploration/sources/SourceStorage',
        'SourceType': 'app/exploration/sources/SourceType',
        'SourceTypeStorage': 'app/exploration/sources/SourceTypeStorage',
        'SourceTypeDescriptor': 'app/exploration/sources/SourceTypeDescriptor',
        'ParameterDescriptor': 'app/exploration/sources/ParameterDescriptor',

        'Utils': 'app/utils/Utils',

        'Response': 'app/response/Response',
        'FailureResponse': 'app/response/FailureResponse',
        'ErrorCode': 'app/error/ErrorCode',

        'SxPages': 'app/utils/SxPages',
        'RestAPI': 'app/utils/RestAPI',

        'Translate': 'app/translate/Translate',

        'SourceForm': 'app/source/SourceForm',
        'TargetForm': 'app/exploration/targets/TargetForm',
        'ModalMessageDialog': 'app/utils/ModalMessageDialog',
        'ThingInfoPanel': 'app/utils/ThingInfoPanel',

        'PatternController': 'app/exploration/pattern/PatternController',
        'PatternParameter': 'app/exploration/pattern/PatternParameter',


        'Notifications': 'app/notification/Notifications',
        'NotificationType': 'app/notification/NotificationType',
        'NotificationUtils': 'app/notification/NotificationUtils',

        'Chart': 'app/charts/Chart',
        'ChartModel': 'app/charts/ChartModel',
        'ChartUtils': 'app/charts/ChartUtils',
        'ChartConfigurationPanel': 'app/charts/ChartConfigurationPanel',
        'ChartsColorsAndGradients': 'app/charts/ChartsColorsAndGradients',
        'ChartTypeChooser': 'app/charts/ChartTypeChooser',
        'LineChart': 'app/charts/types/LineChart',
        'PolarChart': 'app/charts/types/PolarChart',
        'ScatterChart': 'app/charts/types/ScatterChart',

        'BrowserIssuesFix': 'app/BrowserIssuesFix',



        //3D LIBS DEPENDENCIES
        'knockout': 'libs/ojet/knockout/knockout-3.1.0',
        //'knockout': 'libs/ojet/knockout/knockout-3.1.0.debug',

        'jquery': 'libs/ojet/jquery/jquery-2.1.0.min',
        //'jquery': 'libs/ojet/jquery/jquery-2.1.0',

        //ojet exclude most jquery ui components from its custom build of jqueryui(accordion, menu ,,,)
        'jqueryui': 'libs/jquery/jquery-ui-1.10.4.custom.min',
        'knockout-sortable': 'libs/knockout/knockout-sortable.min',

        'orderedListMenu': 'app/components/jquery-ui-ordered-list-menu',

        //'ojs': 'libs/ojet/oj/v1.0/min-debug',
        //'ojs': 'libs/ojet/oj/v1.0/min', //cant use min, because Translate.js use private // should be fixed in V2
        'ojs': 'libs/ojet/oj/v1.0/debug',

        'ojL10n': 'libs/ojet/oj/v1.0/ojL10n',
        'ojtranslations': 'libs/ojet/oj/v1.0/resources',

        'ojvalidation': 'libs/oj/ojet/v1.0/ojvalidation',
        //'ojvalidation': 'libs/oj/ojet/v1.0/debug/ojvalidation',

        'i18n': 'libs/jquery/i18next-1.7.1.min',
        //'i18n': 'libs/jquery/i18next-1.7.1',

        'validationEngine-en': 'libs/jquery/validationEngine/jquery.validationEngine-en',
        'validationEngine': 'libs/jquery/validationEngine/jquery.validationEngine',
        'ValidationTune': 'app/translate/ValidationTune',
        'select2': 'libs/jquery/select2/select2',
        'fileDownload': 'libs/jquery/fileDownload/jquery.fileDownload',
        'tag-it': 'libs/jquery/tag-it/tag-it',
        'dtpicker': 'libs/jquery/dtpicker/jquery.simple-dtpicker',

        'datatables': 'libs/jquery/jquery.dataTables', //modifyed by sx developers
        'jquerycomet': 'libs/jquery/jquery.cometd'

    },

    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        },
        'jqueryui': {
            deps: ['jquery']
        },
        'orderedListMenu': {
            deps: ['jqueryui']
        },

        'jquerycomet': {
            deps: ['jquery']
        },

        'validationEngine': {
            deps: ['jquery', 'validationEngine-en']//, 'validationEngine-ru']
        },

        'validationEngine-en': {
            deps: ['jquery']
        },

        'validationEngine-ru': {
            deps: ['jquery']
        },

        'select2': {
            deps: ['jquery']
        },

        'fileDownload': {
            deps: ['jquery']
        },

        'tag-it': {
            deps: ['jquery' , 'jqueryui']
        },

        'dtpicker': {
            deps: ['jquery']
        }

    },

// This section configures the i18n plugin. It is merging the Oracle JET built-in translation 
// resources with a custom translation file.
// Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
// a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                'ojtranslations/nls/ojtranslations': 'app/resources/nls/oepTranslations'
            }
        }
    },

    waitSeconds: 500

});

/**
 * sx entry point
 */
require(['BrowserIssuesFix', 'SxStart'],
    function (BrowserIssuesFix, SxStart) {
        BrowserIssuesFix.build();
        SxStart.build();
    }
);
