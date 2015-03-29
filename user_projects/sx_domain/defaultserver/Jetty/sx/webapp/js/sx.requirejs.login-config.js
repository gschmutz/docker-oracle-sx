// Workaround for Knockout not initializing the global "ko" variable when it detects Require.js
define('knockout.global', ['knockout'], function (kno) {
    window.ko = kno; // Initialize a global 'ko' variable
    return kno;
});

requirejs.config({
    paths: {
        'jquery': 'libs/ojet/jquery/jquery-2.1.0',
//        'jquery': 'libs/ojet/jquery/jquery-2.0.3.min',

        //ojet exclude most jquery ui components from its custom build of jqueryui(accordion, menu ,,,)
//        'jqueryui': 'libs/ojet/jquery/jquery-ui-1.10.4.custom.min',
        'ojs': 'libs/ojet/oj/v1.0/debug',
        'ojL10n': 'libs/ojet/oj/v1.0/ojL10n',
        'ojtranslations': 'libs/ojet/oj/v1.0/resources',
        'ojvalidation': 'libs/oj/ojet/v1.0/debug/ojvalidation',

        'i18n': 'libs/jquery/i18next-1.7.1',
        'Translate': 'app/translate/Translate',
        'LoginPage': 'LoginPage'

    },

    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
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
require(['LoginPage'],
    function (LoginPage) {
         $(document).ready(function() {
            LoginPage.build();
        });
    }
);
