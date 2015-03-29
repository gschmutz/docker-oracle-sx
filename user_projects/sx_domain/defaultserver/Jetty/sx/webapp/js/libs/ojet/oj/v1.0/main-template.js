/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
  // Path mappings for the logical module names
  paths: {
    'knockout': 'libs/knockout/knockout-3.1.0',
    'jquery': 'libs/jquery/jquery-2.1.0.min',
    'jqueryui': 'libs/jquery/jquery-ui-1.10.4.custom.min',
    'ojs': 'libs/oj/v1.0/min',
    'ojL10n': 'libs/oj/v1.0/ojL10n',
    'ojtranslations': 'libs/oj/v1.0/resources',
    'signals': 'libs/js-signals/signals.min',
    'crossroads': 'libs/crossroads/crossroads.min',
    'history': 'libs/history/history.iegte8.min',
    'promise': 'libs/es6-promise/promise-1.0.0.min'
  },
  // Shim configurations for modules that do not expose AMD
  shim: {
    'jquery': {
      exports: ['jQuery', '$']
    },
    'jqueryui': {
      deps: ['jquery']
    },
    'crossroads': {
      deps: ['signals'],
      exports: 'crossroads'
    }
  },
  
// This section configures the i18n plugin. It is merging the Oracle JET built-in translation 
// resources with a custom translation file.
// Any resource file added, must be placed under a directory named "nls". You can use a path mapping or you can define
// a path that is relative to the location of this main.js file.
    config: {
        ojL10n: {
            merge: {
                //'ojtranslations/nls/ojtranslations': 'resources/nls/myTranslations'
            }
        }
    }
});


/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback.
 * 
 * For a listing of which JET component modules are required for each component, see the specific component
 * demo pages in the JET cookbook.
 */
require(['ojs/ojcore', 'knockout', 'ojs/ojbutton', 'ojs/ojtoolbar','ojs/ojmenu'], // add additional JET component modules as needed
  function(oj, ko) // this callback gets executed when all required modules are loaded
  {
      // add any startup code that you want here
  }
);

