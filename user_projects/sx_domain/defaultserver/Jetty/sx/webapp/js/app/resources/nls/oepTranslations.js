define({
    root: {
        oep: {
            errors: {
                NETWORK_ERR: "You connection has been lost. Please refresh your browser, log out and log back in"
            },
            mainLayout: {
                header: {
                    'BRAND_TITLE': 'Stream Explorer',
                    searchActions: {
                        'SEARCH_CATALOG': 'Search the Catalog',
                        'SEARCH_FOLDER': 'Search the Folder'
                    },
                    'LOGOUT': 'Logout',
                    userMenu: {
                        PREFERENCES: 'Preferences',
                        HELP: 'help',
                        ABOUT: 'About',
                        SIGN_OUT: 'Sign Out',
                        STATUS_INDICATOR: 'Busy status indicator',
                        helpMenu: {
                            OnlineHelp: 'Online Help',
                            ShowUserAssistance: 'Show User Assistance'
                        }
                    },
                    catalogNavButton: "Go to Catalog",
                    homeNavButton: "Go to Welcome page"
                },
                footer: {
                    'COPYRIGHT': 'Copyright &copy; 2015 Oracle and/or its affiliates. All rights reserved.'
                }
            },
            login: {
                'ORACLE_LOGO': 'Oracle',
                'SIGN_IN_LABEL': 'SIGN IN TO',
                'STREAM_EX_LABEL': 'STREAM EXPLORER',
                'TAG_LINE': 'Business Insight into Fast Data',
                'ARIA_LOGIN_LABEL': 'Enter your user name',
                'LOGIN_LABEL': 'User Name',
                'ARIA_PASSWORD_LABEL': 'Enter your password',
                'PASSWORD_LABEL': 'Password',
                'LOGIN_BTN': 'Sign In',
                'NO_ACCESS_LNK': 'Cannot access your account?',
                'INVALID_LOGIN_PASSWORD': 'The information you entered is incorrect.',
                'languages': {
                    'ru': 'Русский',
                    'en': 'English',
                    'be': 'Беларуская',
                    'fr': 'Francais'
                }
            },
            globalNavigationArea: {
                HOME: 'Home',
                CATALOG: 'Catalog'

            },
            aboutContainer: {

                Done: "Done",
                About: "About",
                BRAND_TITLE: 'Stream Explorer',

                visualizerURL: "Visualizer URL",
                sxVersion: "Stream Explorer Version",
                osName: "OS Name",
                osVersion: "OS Version",
                javaVersion: "Java Version",
                javaVendor: "Java Vendor",
                oepServer: "OEP Server Version"

            },
            preferencesContainer: {
                RestoreToDefault: "Restore To Default",
                Save: "Save",
                Cancel: "Cancel",
                Preferences: "Preferences",
                changesMadeInPreferenceSectionAreSaved: "Your preferences have been saved.",
                failedToLoadUserPreferences: "Failed To Load User Preferences",
                failedToSaveUserPreferences: "Failed To Save User Preferences",


                general: "General",
                viewMode: "View Mode",
                home: "Home",
                catalog: "Catalog",
                notifications: "Notifications",
                exploration: "Exploration",
                liveOutputStream: "Live Output Stream",
                charts: "Charts",
                patterns: "Patterns",

                general_: {
                    language: "Language Settings",
                    timeZone: "Time Zone Settings",
                    languageList: {

                        ar: "Arabic",
                        da: "Danish",
                        de: "German",
                        el: "Greek",
                        en: "English",
                        es: "Spanish",
                        fi: "Finnish",
                        fr: "French",
                        he: "Hebrew",
                        hr: "Croatian",
                        hu: "Hungarian",
                        it: "Italian",
                        ja: "Japanese",
                        ko: "Korean",
                        nl: "Dutch",
                        no: "Norwegian",
                        pl: "Polish",
                        pt: "Portuguese",
                        'pt-BR': "Portuguese (Brazil)",
                        ro: "Romanian",
                        ru: "Russian",
                        sk: "Slovak",
                        sv: "Swedish",
                        th: "Thai",
                        tr: "Turkish",
                        'zh-CN': "Chinese",
                        'zh-TW': "Chinese (Taiwan)"
                    }
                },

                catalog_: {
                    defaultSortingColumn: "Default Sorting Column",
                    defaultSortingOrder: "Default Sorting Order",
                    defaultPageSize: "Default Page Size",

                    'desc': 'descending',
                    'asc': 'ascending',

                    recent: "Recent",
                    name: "Name",
                    favorite: "Favorite",
                    popular: "Popular"
                },

                home_: {
                    home: "Welcome",
                    catalog: "Catalog",
                    sxDefaultPage: "Start Page"

                },

                liveOutputStream_: {
                    tableSize: "Default Table Size"

                },


                notifications_: {
                    infoNotifications: "Info Notifications",
                    isInfoNotificationsShowed: "Show Information Notifications?",
                    isInfoNotificationsShowedYes: "Yes",
                    timeOfDissapearance: "Information Notification duration (in seconds):"
                },

                viewMode_: {
                    selectViewModeNormal: "Browser mode",
                    selectViewModeProjector: "Presentation mode (projector)",
                    selectViewMode: "Choose View Mode:"
                }
            },
            home: {
                WELCOME_HEADER: 'Welcome!',
                WELCOME_SUBHEADER: 'Build real-time applications with microsecond latency for any industry in half the time with Oracle Stream Explorer',
                boxes: {
                    IOT: {
                        'header': 'Distributed Intelligence for IOT',
                        'aria_label': 'Access the catalog filtered to include items related to the internet of things',
                        'content': 'Acquire, analyze, and act on high-volume, high-velocity data from sensors and devices both at the edge and in the data center in real-time'
                    },
                    RISK: {
                        'header': 'Risk and Fraud Management',
                        'aria_label': 'Access the catalog filtered to include items related to the risk and fraud management',
                        'content': 'Leverage industry\'s best stream processing platform to assess risk and prevent financial fraud in real-time'
                    },
                    TRANSPORT: {
                        'header': 'Transportation and Logistics',
                        'aria_label': 'Access the catalog filtered to include items related to the transportation and logistics',
                        'content': 'Manage fleet, track assets, and improve supply chain efficiencies by combining streaming data with Oracle\'s advanced spatial functions'
                    },
                    ANALYTICS: {
                        'header': 'Customer Experience and Consumer Analytics',
                        'aria_label': 'Access the catalog filtered to include items related to the customer experience and consumer analytics',
                        'content': 'Know the sentiment of your customers to reduce churn, improve loyalty, make offers, and attract customers in real-time'
                    },
                    TELECOM: {
                        'header': 'Telecommunications',
                        'aria_label': 'Access the catalog filtered to include items related to the telecommunications',
                        'content': 'Proactively monitor your networks, predict network failures, and prevent distributed denial of service type attacks'
                    }
                },
                EXPLORE_MORE_LINK: 'Explore more...',
                links: {
                    search: {
                        'MY_SEARCHES': 'My Explorations',
                        'CREATE_SOURCE': 'Create a Stream',
                        'CREATE_DATA_SOURCE': 'Create a Reference',
                        'CREATE_SEARCH': 'Create an Exploration',
                        'FAVORITE_SEARCHES': 'Favorite Explorations',
                        'SEARCH_NOTATION': 'Search Notation (Topic: How to Search)',
                        'SEARCH_UPDATES': 'Updates to Explorations (Private)',
                        'CATALOG': 'Catalog'
                    },
                    news: {
                        'WHATS_NEW': 'Whats New',
                        'NEW_MESSAGES': 'New Messages/Notifications',
                        'NEW_ADDED_SEARCHES': 'New Explorations added to repository',
                        'NEW_META': 'New Meta (Tags)',
                        'UPDATES': 'Updates to Explorations/Sources (Public)',
                        'WELCOME': 'Welcome (First time user)',
                        'visualizerUrl': 'Visualizer'
                    },
                    preferences: {
                        'MY_PREFS': 'My Preferences',
                        'SWITCHBOARD': 'Global Preferences Switchboard',
                        'CONFIGURE_LINK': 'Link to configure Global User Preferences',
                        'ACCESSIBILITY': 'Accessibility'
                    },
                    help: {
                        'HELP_N_TUTORIALS': 'Help and Tutorials',
                        'GETTING_STARTED': 'Getting Started',
                        'TRAINING_VIDEOS': 'Training/Videos',
                        'DOCS': 'Documentation',
                        'SOCIAL_HELP': 'Social help (user added)'
                    }
                }
            },
            UserAssistance: {
                SOURCE_EDITOR_WELCOME: {
                    header: "Source Editor",
                    content: "Source User Assistance content"
                },
                EXPLORATION_EDITOR_WELCOME: {
                    header: "Exploration Editor",
                    content: "Welcome to the Explorer. This is where you discover interesting things about your data stream using analytic tools and filters. Incoming data appears both in the Live Output Stream table and as a graph below. In addition, certain types of streams can be refined using the Range Window drawer to the right. To learn more about these tools, watch this space as you explore."
                },

                EXPLORATION_EDITOR_SOURCES: {
                    header: "Sources",
                    content: "Sources come in two general types, streams and references. To select a source, open the source menu by clicking the Source box. (You can also type directly into the field to filter the source menu.) If a source is disabled in the menu, it means that it won’t work with your current Explorer configuration."
                },

                EXPLORATION_EDITOR_NO_SOURCES: {
                    header: "No Source",
                    content: "You need to select a stream-type source to enable the Explorer. Otherwise, you don’t have any data to investigate. Only streams contain the real-time content that powers Stream Explorer. (A reference-type source is just a static table.)  If you want to turn the Explorer back on, please select a stream from the source menu."
                },

                EXPLORATION_EDITOR_CORRELATIONS: {
                    header: "Correlations",
                    content: "Correlations create a query that combines events from two or more sources"
                },

                EXPLORATION_EDITOR_MULTIPLE_STREAMS_NEED_TO_BE_CORRELATED: {
                    header: "Multiple sources need to be correlated",
                    content: "Now that you’ve added another source, you need to correlate all the sources. In effect, what you’re doing here is linking all the sources together into one big stream by specifying equivalent properties. To do this, add a correlation below, and then select an equivalent property for two streams (the property names may be different.)  If you have more than one source, you’ll need to add more correlations until they’re all effectively linked."
                },

                EXPLORATION_EDITOR_FILTERS: {
                    header: "Filters",
                    content: "Use Filters to narrow-down your output stream according to specific criteria. For any filter, you can change the type of value you’re evaluating (string, integer, or even source-specific parameters) using the gear icon."
                },

                EXPLORATION_EDITOR_SUMMARIES: {
                    header: "Summaries",
                    content: "Use Summaries to perform simple operations on your data and/or to group information by one or more properties, potentially from multiple sources. This is useful for creating thresholds and organizing information in a meaningful way."
                },

                EXPLORATION_EDITOR_WINDOWS: {
                    header: "Windows",
                    content: "Use the Range Window (accessible by the window icon to the right of the screen) to specify time and event based windows used in processing your stream. For example, aggregate functions in summaries, such as MAX or AVG, will use the Range parameter for calculation. The Evaluation Frequency parameter defines how often the system will produce the result events."
                },


                CATALOG_WELCOME: {
                    header: "Catalog",
                    content: "Welcome to the Catalog. It contains a list of all your resources. To filter the catalog by type, use the check boxes in the left-hand column.  If you want to view an item in detail, click on its name or the large type icon"
                }
            },

            search: {

                deleteItemDialog: {
                    deleteItemDialogTitle: 'Delete Confirmation',
                    areYouSureToDeleteItem: "Are you sure to delete '{0}'?",
                    Cancel: 'Cancel',
                    Ok: 'Delete'

                },
                filterLabels: {
                    'UPDATEDBY': 'Updated by',
                    'UPDATEDAT': 'Updated at',
                    'CREATEDBY': 'Created by',
                    'CREATEDAT': 'Created at',
                    'TAG': 'Tag'
                },
                searchResults: {
                    'VIEW_MORE_LINK': 'View More',
                    'VIEW_LESS_LINK': 'View Less',
                    'FAVORITES_TITLE': 'Favorites',
                    'RECENT_TITLE': 'Recent',
                    'MORE_POPULAR_TITLE': 'Most Popular',
                    'DESCRIPTION_LABEL': 'Description: ',
                    'MAPS_LABEL': 'Sources: ',
                    'TAGS_LABEL': 'Tags: ',
                    'SOURCES_LABEL': 'Sources: ',
                    'NEW_LABEL': 'New',
                    'NO_ITEMS_FOUND': 'No Items Found',
                    'CREATED_BY': 'Created by {0}',
                    'UPDATED_BY': 'Updated by {0}',
                    'CATALOG': 'Catalog',
                    'PAGE_LABEL': 'Page',
                    'PAGE_NUMBER': 'Current Page Number',
                    'PAGE_SIZE': 'Page Size',
                    'SHOW_LABEL': 'Show',
                    'NUMBER_OF_PAGES': 'of {0}',
                    'NUMBER_OF_ITEMS': '({0} of {1} items)',
                    "MARK_FAVORITE": 'Toggle favorite status',
                    'DELETE': 'Delete item',
                    'FAVORITE': 'Sort by favorites',
                    "RESTORE": 'Restore the item',
                    "RECENT": 'Sort by most recent',
                    "POPULAR": 'Sort by most popular',
                    "PUBLISHED": 'Published',
                    "DRAFT": 'Draft',
                    "NUMBER_OF_ITEMS_ON_PAGE": 'Number of items on page',
                    "PAGE_NUMBER_INPUT_FIELD": 'Page number input field',
                    'INVALID_LABEL': 'The item is in an invalid state. Click the restore icon on the right to attempt to restore.',
                    'SHOW_PUBLISHED': 'Click to show the Published Exploration',
                    'TITLE_TOOLTIP': 'Click to open',
                    'TITLE_TOOLTIP_INSPECT_MODE': 'Click to open in Inspect mode',
                    'UPDATED_BY_TT': 'Filter catalog by \'{0}\'',
                    'TAG_TT': 'Filter catalog by \'{0}\' tag'
                },
                searchMenu: {
                    'EXPLORATIONS': 'Explorations',
                    'SOURCES': 'Streams',
                    'DATA_SOURCES': 'References',
                    'PATTERNS': 'Patterns',
                    'SHAPES': 'Shapes',
                    'EXPLORATIONS_TT': 'Toggle the button to include or exclude Explorations in the catalog',
                    'SOURCES_TT': 'Toggle the button to include or exclude Streams in the catalog',
                    'DATA_SOURCES_TT': 'Toggle the button to include or exclude References in the catalog',
                    'CATALOG': 'Catalog',
                    'CREATE_EXPLORATION': 'Exploration',
                    'CREATE_SOURCE': 'Stream',
                    'CREATE_DATA_SOURCE': 'Reference',
                    'CREATE_PATTERN': 'Pattern',
                    'PATTERN_SUBMENU': 'Pattern',
                    'LEARN_MORE': 'Learn More...',
                    'CREATE_SHAPE': 'Shape',
                    'CREATE_EXPLORATION_DESCRIPTION': 'Create a new Exploration from scratch.',
                    'CREATE_SOURCE_DESCRIPTION': 'Create a stream of events to analyze.',
                    'CREATE_DATA_SOURCE_DESCRIPTION': 'Create a reference to static data to enrich your event stream.',
                    'patternsDescription': 'A Pattern provides you with a simple way to explore event Streams based on common business scenarios. All you need to do is enter a few key fields, and we apply the logic behind the scenes for you. Click the Pattern item in the menu to see a list of current Patterns.',
                    'CREATE': 'Create New Item',
                    'LIST_VIEW': 'List view',
                    'BOX_VIEW': 'Tile view',
                    'POPULAR_TITLE': 'Sort By: Popular',
                    'RECENT_TITLE': 'Sort By: Recent',
                    'FAVORITE_TITLE': 'Sort By: Favorite',
                    'NAME_TITLE': 'Sort By: Name',
                    'SORTING_TT': 'Use the drop-down list to select the catalog sorting options.'
                }
            },
            thing: {
                'NO_VIEWER_FOUND': 'No viewer found for the "{0}" entity',
                'NO_EDITOR_FOUND': 'No editor found for the "{0}" entity',
                'NOT_IMPLEMENTED': 'This functionality is not implemented yet',
                'STATUS_RESTORED': '{0} has been restored'
            },
            field: {
                type: {
                    string: 'String',
                    char: 'Char',
                    byte: 'Byte',
                    int: 'Integer',
                    bigint: 'Big int',
                    float: 'Float',
                    double: 'Double',
                    number: 'Number',
                    boolean: 'Boolean',
                    object: 'Object',
                    timestamp: 'Timestamp',
                    interval: 'Interval',
                    intervalym: 'Interval YM',
                    xmltype: 'XML',
                    bigdecimal: 'Big decimal'
                },
                'REQUIRED': 'Required',
                'LOADING_TEXT': 'Loading...',
                'LOADING_EVENT_TYPES_TEXT': 'Loading '
            },
            notification: {
                'INFO_TITLE': 'Information',
                'ERROR_TITLE': 'Error',
                'WARNING_TITLE': 'Warning',
                'SUCCESS_TITLE': 'Success',
                'CONFIRMATION_TITLE': 'Confirmation',
                'DETAILS_LABEL': 'Details',
                'CANCEL_LABEL': 'Cancel'
            },
            messageDialog: {
                'OK_LABEL': 'OK',
                'INFO_TITLE': 'Information',
                'ERROR_TITLE': 'Error',
                'WARNING_TITLE': 'Warning',
                'CONFIRMATION_TITLE': 'Confirmation'
            },
            helpBannerPanel: {
                'CLOSE_BUTTON_LABEL': 'Close'
            },
            thingInfoPanel: {
                'UPDATE_INFO_TITLE': 'Update Information',
                'UPDATE_INFO_DESCRIPTION': 'Provide a name, description, and tags for this object. This information will help other users to discover this object and to understand its business purpose.',
                'UPDATED_AT_LABEL': 'Updated',
                'UPDATED_BY_LABEL': 'Updated By',
                'CREATED_AT_LABEL': 'Created',
                'CREATED_BY_LABEL': 'Created By',
                'UPDATE_BUTTON_LABEL': 'Edit Info',
                'DONE_BUTTON_LABEL': 'Done',
                'NAME_LABEL': 'Name',
                'DESCRIPTION_LABEL': 'Description',
                'TAGS_LABEL': 'Tags',
                'DESCRIPTION_EMPTY_TEXT': 'No description',
                'DESCRIPTION_LENGTH_VALIDATION': 'Value entered may not contain more than 512 characters',
                'ENTER_TAG_PLACEHOLDER': 'Enter tag'
            },
            sourceDialog: {
                'CREATE_TITLE': 'Create Source',
                'CREATE_STREAM_TITLE': 'Create Stream',
                'CREATE_REFERENCE_TITLE': 'Create Reference',
                'EDIT_TITLE': 'Edit Source',
                'EDIT_STREAM_TITLE': 'Edit Stream',
                'EDIT_REFERENCE_TITLE': 'Edit Reference',
                'BACK_LABEL': 'Back',
                'NEXT_LABEL': 'Next',
                'CANCEL_LABEL': 'Cancel',
                'CREATE_LABEL': 'Create',
                'SAVE_LABEL': 'Save',
                'TRAIN_STEP_1_LABEL': 'Source Details',
                'TRAIN_STEP_2_LABEL': 'Type Properties',
                'TRAIN_STEP_3_LABEL': 'Shape',
                'NAME_LABEL': 'Name',
                'DESCRIPTION_LABEL': 'Description',
                'SOURCE_TYPE_LABEL': 'Source Type',
                'SOURCE_TYPE_CAPTION': 'Choose a Source Type...',
                'SOURCE_TYPE_TITLE': 'Type',
                'TAGS_LABEL': 'Tags',
                'CREATE_EXPLORATION_LABEL': 'Create Exploration with this source (Launch Exploration Editor)',
                'ENTER_TAG_PLACEHOLDER': 'Enter tag',
                'EVENT_TYPE_LABEL': 'Shape',
                'EVENT_TYPE_CAPTION': 'Choose a Shape...',
                'EVENT_TYPE_TITLE': 'Shape',
                'EVENT_TYPE_SELECT_LABEL': 'Select Shape',
                'EVENT_TYPE_MANUAL_LABEL': 'Manual Mapping',
                'EVENT_TYPE_NAME_LABEL': 'Name',
                'CANCEL_CHANGE_PASSWORD': 'Restore password',
                'CHANGE_PASSWORD': 'Change password',
                'FILE_URL_CAPTION': 'Or provide the file URL here...',
                'DESCRIPTION_LENGTH_VALIDATION': 'Value entered may not contain more than 512 characters',
                'ERROR_GET_EVENT_TYPES': 'Error getting Event Shapes',
                'ERROR_SAVE_SOURCE': 'Source has not been saved properly',
                'SOURCE_CREATED': 'Source {0} has been created.',
                'SOURCE_UPDATED': 'Source {0} has been updated.',
                'UPLOAD_FILE_FAILED': 'Upload file failed.',
                'ERROR_PARSE_SHAPE': 'Could not parse event type for a file',
                'FILE_NOT_UPLOADED': '* File is not uploaded yet.',
                'VALIDATION_ERROR_CHANNEL_FORMAT': 'You can use letters, digits, dots, slashes and dashes in channel names.'
            },
            targetDialog: {
                'CANCEL_LABEL': 'Cancel',
                'STREAM_LABEL': 'Finish',
                'DIALOG_TITLE': 'Configure a Target',
                'TARGET_TYPE_LABEL': 'Target Type',
                'TARGET_TYPE_CAPTION': 'No Target',
                'GET_EVENT_TYPES_LABEL': 'Get Event Definitions',
                'EVENT_TYPE_SELECT_LABEL': 'Select Shape',
                'EVENT_TYPE_CAPTION': 'Choose a Shape...',
                'ERROR_GET_EVENT_TYPES': 'Error getting Event Shapes',
                'ERROR_SAVE_TARGET': 'Target has not been saved properly',
                'MAPPING_DESTINATION_PROPERTY_LABEL': 'Target Property',
                'MAPPING_OUTPUT_STREAM_PROPERTY_LABEL': 'Output Stream Property',
                'NO_MAPPING': 'No Mapping',
                'VALIDATION_ERROR_CHANNEL_FORMAT': 'You can use letters, digits, dots, slashes and dashes in channel names.'
            },
            patternForm: {},
            exploration: {
                createExplorationDialog: {
                    createExplorationDialogTitle: "Create Exploration",
                    Name: "Name",
                    NamePlaceholder: "Provide a useful name",
                    Description: "Description",
                    DescriptionPlaceholder: "Provide a description that help people understand this Exploration",
                    Tags: "Tags",
                    TagsPlaceholder: "Enter Tag",
                    TagsTooltip: "Please start typing to search for tags or type a new tag and press 'Enter'.",
                    Source: "Source",
                    SourcePlaceholder: "Select a Stream as your Source",
                    Cancel: "Cancel",
                    Create: "Create"

                },
                Results: "Live Output Stream",
                ChartsResults: "Charts",
                Downstream: "Downstream",
                DownstreamEdit: "Edit",
                DownstreamDelete: "Delete",
                Warning: "Warning",
                failedToUpdateExploration: "Failed To update Exploration",
                ExitEditor: "Return To Catalog",
                deployExplorationToOepServer: "Apply",
                deleteExploration: "Delete",
                addExplorationTarget: "Configure a Target",
                subscriberIndicatorTitle: "Connection",
                btnEventTypeColumns: "Properties",
                fieldsForEventTypeIsEmptyMessage: "You must have at least one field selected in the live results table properties.",
                evaluationFrequencyShouldBeNoLongerThanRange: "Window: Evaluation frequency cannot be greater than range.",

                btnShowServerTimestamp: "Timestamp",
                toolbar: {
                    Publish: "Publish",
                    publishingConflict: "Publishing Conflict.",
                    howWouldYouLikeToSolveIt: "How would you like to solve it?",
                    publishingConflictTitle: "Publishing Conflict happens when two users made changes to the same exploration simultaneously",

                    Overwrite: "Overwrite",
                    Uptake: "Discard",
                    UptakeInInspectMode: "Discard Draft",
                    Clone: "Clone",
                    Inspect: "Inspect",
                    Cancel: "Cancel",

                    OverwriteTitle: "Overwrite the published exploration with your changes",
                    UptakeTitle: "Discard changes you made in your draft copy and load the latest published state of the exploration",
                    UnpublishTitle: "Unpublish your exploration",
                    PublishTitle: "Publish your exploration",
                    UptakeTitleInInspectMode: "Discard changes you made in your draft copy and use this latest published state of the exploration as the new baseline for your edits",
                    CloneTitle: "Create a new exploration from your draft copy",
                    InspectTitle: "Review the remote exploration before uptaking it",
                    ExportTitle: "Export your exploration to a jar file",
                    CancelTitle: "Reset publishing conflict status",

                    Unpublish: "Unpublish",
                    Undo: "Undo Changes",
                    Redo: "Redo Changes",
                    Save: "Save Exploration",
                    Actions: "Actions",
                    Export: "Export",
                    Targets: "Configure a Target",
                    Info: "Information",
                    userAssistant: "User Assistant",
                    Delete: "Delete Exploration"
                },
                publish: {
                    unpublishFailedHasConsumers: "Exploration cannot be unpublished: This Exploration has consumers",
                    unpublishedSuccesfull: "Exploration has been unpublished",

                    cloneSuccesfull: "Exploration has been cloned",
                    uptakeSuccesfull: "published exploration has been pulled into your editor",
                    overwriteSuccesfull: "Published exploration has been overwritten",

                    cloneFailed: "The clone operation has failed",
                    uptakeFailed: "The discard operation has failed",
                    overwriteFailed: "The overwrite operation has failed",

                    republishedFailed: "Publishing failure",
                    republishedFailedExplorationHasConsumers: "Exploration cannot be republished: This Exploration has consumers",
                    republishedFailedBecausePublishingConflict: "Exploration cannot be republished: Publishing Conflict: Publishing Conflict can happen when two users made changes to the same exploration simultaneously",
                    youHaveConfiguredYourTarget: "You have configured your target. You have to (re-)publish your exploration for the target to take effect. Click the 'Publish' button to start sending your events downstream.",
                    publishedSuccesfull: "Exploration has been published",
                    republishedSuccesfull: "Exploration has been republished",
                    publishFailedNoSources: "Exploration cannot be published: No sources",
                    publishFailedSourcesNotCorrelated: "Exploration cannot be published: All Sources must be correlated"
                },
                undoredo: {
                    undoSuccesfull: "Exploration 'Undo' operation has been successful",
                    redoSuccesfull: "Exploration 'Redo' operation has been successful",
                    undoFailed: "Exploration 'Undo' operation has failed",
                    redoFailed: "Exploration 'Redo' operation has failed"

                },
                conditions: {
                    operations: {
                        EQ: "equals",
                        NE: "not equals",
                        LT: "lower than",
                        LTE: "lower than or equals",
                        GT: "greater than",
                        GTE: "greater than or equals",
                        CONTAINS: "contains"
                    },
                    SELECT_A_SOURCE_WELCOME_BTN: "No Source Available",
                    ADD_CONDITION_WELCOME_BTN: "Add a Filter",
                    CONDITIONS: "Filters",
                    Title: "Filters specify a series of search conditions, and only those rows that meet the terms of the search conditions are used to build the Output Stream.",
                    matchAny: " Match Any of the following",
                    matchAnyTitle: "Combine all filters with 'OR' logical operator",
                    matchAll: "Match All of the following",
                    matchAllTitle: "Combine all filters with 'AND' logical operator",
                    ScriptMode: "Script Mode »",
                    Source: "Source",
                    Sources: "Sources",
                    Exploration: "Exploration",
                    changeOperandTypeContainer: {
                        changeOperandTypeButtonTitle: "Compare first field with other fields or constant value",
                        changeOperandMenuHeader: "Input",
                        changeOperandMenuDoneButton: "Done",
                        changeOperandMenuSourceHeader: "Fields from Source"
                    }

                },
                correlations: {
                    Correlations: "Correlations",
                    Correlation: "Correlation",
                    Title: "Correlation( Join) is a query that combines rows from two or more sources",
                    addCorrelationWelcomeBtn: "Add a Correlation"
                },
                summaries: {
                    Summaries: "Summaries",
                    Title: "Summaries are Aggregate functions that perform a calculation on a values of multiple rows and return a single value.",
                    Summary: "Summary",
                    addSummaryWelcomeBtn: "Add a Summary",
                    selectASourceToAddSummaries: "No Source Available",
                    of: "of",
                    aggregateFunctions: {
                        AVG: "AVG",
                        COUNT: "COUNT",
                        FIRST: "FIRST",
                        LAST: "LAST",
                        MAX: "MAX",
                        MIN: "MIN",
                        SUM: "SUM"
                    },
                    yourFirstSummaryHasBeenAdded: "Your first summary has been added. You can now use this summary in the Filters",
                    groupBy: {
                        Title: "Group By collects into groups all of the rows with the identical column value. Is used in conjunction with the Summaries(Aggregate functions) to provide information about each group.",
                        GroupByField: "Group by field",
                        GroupByFields: "Group by fields",
                        groupByHeader: "Group by",
                        groupByDoneButton: "Done",
                        dragAndDropItem: "Drag and Drop item to change Group By fields order"
                    }

                },
                sources: {
                    sourceType: {

                        Exploration: "Exploration",
                        PatternBasedExploration: "Pattern-based Exploration"
                    },
                    Sources: "Sources",
                    Title: "Sources are the list of Event Sources or Sources of reference data. You can filter the list of sources by typing letters that are part of the Source name.",
                    sourcesComboboxPlaceholder: "Select a source",
                    fieldComboboxPlaceholder: "Select a field",
                    fieldsComboboxPlaceholder: "Select fields",
                    viewOrEditSourceDetails: "View or Edit source details",
                    viewSourceDetails: "View source details",
                    RemoveThisSource: "Remove this source",
                    noMatchesMessage: "No matches found.",
                    noMatchesCreateSourceEmptyName: "Press 'Enter' to create a new source.", //{0}- source name placeholder
                    noMatchesCreateSourceTemplate: "Press 'Enter' to create a new source with name '{0}'.", //{0}- source name placeholder
                    youNeedToAddASourceToBeginExploring: "Getting Started. You need to add a Source to begin exploring.",
                    autoDeployDisabledBecauseSourcesNotCorrelated: "The sources that you've selected need to be correlated in order to view Live Output data. Please select a property from each source to correlate in the Correlation Box below",
                    resetRangesOfAllStreamsToNowBecauseAddedDbReferenceAsASource: "You have added DB reference as a source. Due to system limitation we have to reset ranges of all other sources to 'Now'. If you don't like it, please click Undo button to roll back.",
                    failedToGetSource: "Source '{0}' is corrupted. Please use correct source",
                    failedToLoadExplorationBecauseOfSourceCorrupted: "Exploration '{0}' is corrupted: at least one of its sources is corrupted: {1}",
                    failedToLoadExplorationBecauseOfFieldsMissingInSource: "Exploration is corrupted: one or more fields are missing in source {0}",
                    failedToGetSourceTypeDescriptor: "Failed to get Source Type Descriptor: '{0}'",
                    explorationFailedAfterSourceUpdate: "Exploration failed after source {0} update"


                },
                sourceSummary: {
                    sourceSummaryHeader: "Source:",
                    sourceSummaryTitle: "Source Details",
                    areYouSureToLeaveCurrentExploration: "Are You Sure To Leave Current Exploration? ",
                    sourceSummaryDoneButton: "Done",
                    sourceSummaryEditButton: "Edit",
                    sourceSummaryHelpButton: "Help",
                    sourceDetails: {
                        sourceDetailsHeader: "Source Details",
                        name: "Id",
                        displayName: "Name",
                        description: "Description",
                        createdAt: "Created At",
                        createdBy: "Created By",
                        updatedAt: "Updated At",
                        updatedBy: "Updated By",
                        sourceType: "Type",
                        attachedTagNames: "Tags"
                    },
                    sourceTypeParameters: {
                        sourceTypeParametersHeader: "Source Type Parameters:",

                        eventInterval: "Event Interval",
                        initialDelay: "Initial Delay",
                        sourceURL: "Source URL",
                        tableName: "Table Name",

                        URL: "URL",
                        userName: "User Name",
                        password: "Password",
                        dataSourceName: "Data Source Name",
                        dataSourceURI: "Data Source URI",

                        sourceFilePath: "File",
                        fileDisplayName: "File Name",
                        fileServerName: "File Path",
                        type: "File Type"

                    },
                    sourceShape: {
                        sourceShapeHeader: "Source Shape"
                    }

                },
                export: {
                    exportHeader: "Export:",
                    exportCancelButton: "Cancel",
                    exportButton: "Export",
                    exportHelpButton: "Help",
                    exportList: {
                        header: "Export List",
                        resource: "Resource",
                        type: "Type",
                        explorationTitle: "Exploration",
                        sourceTitle: "Source",
                        targetTitle: "Target"
                    },
                    advanchedOptions: {
                        header: "Advanced Options",
                        uniqueId: "Bundle Id",
                        uniqueIdTooltip: "The Bundle Id is used to identify an exploration in an OSGi runtime (OEP server) and in the OEP Visualizer tool",
                        bundleName: "Bundle Name",
                        bundleNameTooltip: "Bundle Name is a textual identifier for the Bundle"
                    },
                    exportSuccesfull: "File: {0} exported successfully !",
                    exportFailed: "Failed to export the file: {0} !"
                },
                pattern: {
                    pattern: "Pattern",
                    name: "Name",
                    description: "Description"
                },
                target: {
                    targetDetached: 'Target has been detached.',
                    targetDeleted: 'Target has been deleted.',
                    targetNotDelete: 'Could not delete target.',
                    targetNotRetrieved: 'Could not retrieve the target from the server. Target can not be deleted.'
                },
                displayNameHeader: {
                    draft: "Draft",
                    published: "Published"
                },
                window: {
                    windowsTitle: "Windows: (Range, Rows, Slide, Partition by): Add a time or event based window to the source",
                    windowLabel: "Window",
                    rangeLabel: "Range:",
                    rowsLabel: "Rows:",
                    slideLabel: "Evaluation frequency:",
                    units: {
                        'UNBOUNDED': 'unbounded',
                        'NOW': 'now',
                        'NANOSECONDS': 'nanoseconds',
                        'MICROSECONDS': 'microseconds',
                        'MILLISECONDS': 'milliseconds',
                        'SECONDS': 'seconds',
                        'MINUTES': 'minutes',
                        'HOURS': 'hours',
                        'ROWS': 'events'
                    },
                    partitionBy: {
                        partitionByHeader: "Partition by",
                        partitionByDoneButton: "Done"
                    }
                },
                eventTable: {
                    recordsFoundLabel: "From _START_ to _END_ of _TOTAL_ filtered events are shown",
                    recordsNotFoundLabel: "The data has not come from the stream"
                },

                resultButtons: {
                    timestamp: {
                        button: 'Timestamp',
                        modeSwitcher: {
                            epochLabel: "Time (Epoch)",
                            dateLabel: "Time (Date)"
                        },
                        remove: "Remove Server Time Column"
                    },
                    sources: {
                        SOURCE_FIELD: 'The "{0}" source field',
                        USER_DEFINED_FIELD: 'User-defined'
                    }


                },
                charts: {
                    'SHOW_1': '1 Graph',
                    'SHOW_2': '2 Graphs',
                    'SHOW_3': '3 Graphs',
                    'FLIP': 'Flip from the horizontal side-by-side layout to the vertical (column) layout and back.',
                    'MAXIMIZE': 'Maximize window to view nothing but graphs.',
                    'SCATTER_CHART': 'Scatter Chart',
                    'POLAR_CHART': 'Radar Chart',
                    'LINE_CHART': 'Line Chart',
                    'BAR_CHART': 'Bar Chart',
                    'CHART_NO_DATA': 'No visual data available.',
                    'SCATTER_CHART_NO_DATA': 'No data to display in the scatter chart. For the scatter chart to work correctly, the live output stream must contain at least 2 numeric fields.',
                    '___EVENT_TIMESTAMP': 'Server Time',
                    'EVENTS_LABEL': 'Events',
                    'EXCEED_DATA_SIZE_THRESHOLD': 'Chart data size has exceeded the threshold ({0} items). For correct work of the chart every {1} item will be removed.'
                },
                confirmDialog: {
                    belowWillBeLost: " below will be lost:",
                    isUsedIn: "- is used in",
                    andLabel: "and",
                    areYouSureToRemoveThisSource: " Are you sure to remove this source?",
                    areYouSureToRemoveThisCorrelation: " Are you sure to remove this correlation?",
                    areYouSureToChangeThisCorrelation: " Are you sure to change this correlation?",
                    ifYouCnangeCorrelation: "If you change correlation:",
                    areYouSureToRemoveThisSummary: " Are you sure to remove this summary?",
                    areYouSureToChangeThisSummary: " Are you sure to change this summary?",
                    ifYouCnangeSummary: "If you change summary:",
                    areYouSureToApplyGroupByChanges: " Are you sure to Apply Group By changes?",
                    Cancel: "No",
                    Ok: "Yes"

                },
                warnings: {
                    columnsNotSelected: 'Select fields for the output event',
                    tooManyEventsCame: 'Too many events came. They are not being shown'
                },
                messages: {
                    eventsAreShownAgain: 'Event stream is resumed'
                }
            },
            validationEngine: {
                "required": {// Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* This field is required",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required",
                    "alertTextDateRange": "* Both date range fields are required"
                },
                "requiredInFunction": {
                    "func": function (field, rules, i, options) {
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Range"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* Invalid ",
                    "alertText2": "Date Time Range"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Minimum ",
                    "alertText2": " characters required"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " characters allowed"
                },
                "groupRequired": {
                    "regex": "none",
                    "alertText": "* You must fill one of the following fields",
                    "alertTextCheckboxMultiple": "* Please select an option",
                    "alertTextCheckboxe": "* This checkbox is required"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* Minimum value is "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* Maximum value is "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Date prior to "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Date past "
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Maximum ",
                    "alertText2": " options allowed"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Please select ",
                    "alertText2": " options"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Fields do not match"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* Invalid credit card number"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Invalid phone number"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html# e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* Invalid email address"
                },
                "fullname": {
                    "regex": /^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText": "* Must be first and last name"
                },
                "zip": {
                    "regex": /^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText": "* Invalid zip format"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* Not a valid integer"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* Invalid floating decimal number"
                },
                "date": {
                    // Check if date is valid by leap year
                    "func": function (field) {
                        var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
                        var match = pattern.exec(field.val());
                        if (match == null)
                            return false;

                        var year = match[1];
                        var month = match[2] * 1;
                        var day = match[3] * 1;
                        var date = new Date(year, month - 1, day); // because months starts from 0.

                        return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
                    },
                    "alertText": "* Invalid date, must be in YYYY-MM-DD format"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Invalid IP address"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* Invalid URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Numbers only"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Letters only"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No special characters allowed"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* This name is already taken",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This name is available",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCallPhp": {
// remote json service location
                    "url": "phpajax/ajaxValidateFieldName.php",
// error
                    "alertText": "* This name is already taken",
// speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                "validate2fields": {
                    "alertText": "* Please input HELLO"
                },
//tls warning:homegrown not fielded
                "dateFormat": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Invalid Date"
                },
                //tls warning:homegrown not fielded
                "dateTimeFormat": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* Invalid Date or Date Format",
                    "alertText2": "Expected Format: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM or ",
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
                },
                "checkFileType": {
                    "regex": "none",
                    "alertText": "* Wrong file Type."
                },
                "checkFileLength": {
                    "regex": "none",
                    "alertText": "* The file length is too high."
                },
                fileUploadRequired: {
                    regex: 'none',
                    alertText: '* File is not uploaded yet.'
                },
                "filename": {
                    "regex": /^[^\\\/\:\*\?\"\<\>\|\.]+(\.[^\\\/\:\*\?\"\<\>\|\.]+)+$/,
                    "alertText": "File name is invalid."
                },
                "sqlalias": {
                    "regex": 'none',///^(?!int$|foo$|qwa$)([A-Za-z]\w+)$/i,
                    "alertText": "* Invalid name for alias.",
                },
                "channel": {
                    "regex": /^(?!\/$)(\w|-|@|\$|!|~|\/|\)|\()+$/, ///^(\w|-|\/)(\w|-|\.|\/)+$/,
                    "alertText": "*You can use letters, digits, dots, slashes and dashes in channel names."
                },
                "timeStampFormat": {
                    "regex": /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}\s+(0?[0-9]|1[0-9]|2[0123]){1}:(0?[0-9]|[1-5][0-9]){1}$/,
                    "alertText": "* Invalid Timestamp. Expected Format: MM/DD/YYYY hh:mm"
                }
            },
            controls: {
                orderedListMenu: {
                    checkAll: 'All',
                    'done': 'Close',
                    'defaultPropertyName': 'New Property Name',
                    'defaultPropertyValue': 'New Constant Value',
                    'errFieldLabelRequired': 'New field Name was not set, \r\nsince the new one was not assigned',
                    'errFieldLabelNotMatchPattern': 'New field label was not set, \r\nsince the new does not matches pattern',
                    'errFieldValueRequired': 'Value is required',
                    'errFieldLabelRequiredShort': 'Name is required',
                    'errFieldLabelNotMatchPatternShort': 'Must match the pattern',
                }
            },
            util: {
                'LOADING': 'Loading...',
                error: {
                    'ENTITY_IS_RESTORED': 'Recovery of {0} has failed. Error message: {1}',
                    'CAN_NOT_DELETE_DEPENDENCY_EXISTS': '{0} can not be removed, since it is used by other entities.',
                    'CAN_NOT_DELETE_DEPENDENCY_EXISTS_WITH_NAMES': '{0} can not be removed, since it is used by {1}.'
                },
                info: {
                    'ENTITY_IS_REMOVED': '{0} has been successfully removed.'
                }
            }
        }
    },
    'be': true,
    ar: true,
    es: true,
    da: true,
    de: true,
    el: true,
    en: true,
    fi: true,
    fr: true,
    he: true,
    hr: true,
    hu: true,
    it: true,
    ja: true,
    ko: true,
    nl: true,
    no: true,
    pl: true,
    pt: true,
    'pt-BR': true,
    ro: true,
    ru: true,
    sk: true,
    sv: true,
    th: true,
    tr: true,
    'zh-CN': true,
    'zh-TW': true

});
