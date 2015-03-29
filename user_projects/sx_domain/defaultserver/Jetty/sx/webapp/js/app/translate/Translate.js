/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Translate', ['jquery', 'ojs/ojcore', 'ojs/ojvalidation'], function($, ojcore, ojvalidation) {
    //var req = require.config ? require.config() : {};
    var I18N_ATTRIBUTE = 'data-i18n';
    var I18N_NS_ATTRIBUTE = 'data-i18n-ns';
    
    var DEFAULT_DATE_CONVERT_OPTIONS = {   formatType: 'datetime',
                            dateFormat: 'short',
                            timeFormat: 'short'
                        };
    var DEFAULT_NUMBER_CONVERT_OPTIONS = {maximumFractionDigits: 2,
                            style: 'decimal'};
    var ESCAPE_PARENT_NAMESPACE_SYMBOL = '*';
    var translateFunction = null;
    var isI18nLoaded = false;
    var locale = ojcore.Config.getLocale(); //i18n.detectLanguage()
    var dateConverter = ojcore.DateTimeConverterFactory.createConverter(DEFAULT_DATE_CONVERT_OPTIONS);
    var numberConverter = ojcore.NumberConverterFactory.createConverter(DEFAULT_NUMBER_CONVERT_OPTIONS);
    var self = this;
    /*i18n.init({lng: 'fr',
        //fallbackLng: 'en',
        //TODO :: set useLocalStorage to false
        useLocalStorage: false, //This option is set in false on development period - means do not store phrases in cache
        localStorageExpirationTime: 86400000, //this is a week
        resGetPath: bundlePath + '/__lng__/__ns__.json',
        ns: 'oepTranslations',
        debug: true
    }, function(t) {
        isI18nLoaded = true;
        translateFunction = t;
    });*/
    
    
    translateFunction = ojcore.Translations.getTranslatedString;
    bundleTranslateFunction = ojcore.Translations.getResource;
    /*ojcore.Config.setLocale(locale, function() {
        localDataSet = true;
    });*/
    
    
    self.addNamespaceToPhraseId = function(phraseId, i18nElement) {
      var nsEscaped = false;
      i18nElement.parents('[' + I18N_NS_ATTRIBUTE + ']').each( function() {
                                if (!nsEscaped)
                                {
                                    var ns = this.getAttribute(I18N_NS_ATTRIBUTE);
                                    if (ns.charAt(0) === ESCAPE_PARENT_NAMESPACE_SYMBOL) {
                                        ns = ns.substring(1, ns.length);
                                        nsEscaped = true;
                                    }
                                    phraseId = ns + '.' + phraseId;
                                }   
                            });
                            
      return phraseId;
                                
    };
    
    self.changeLanguage = function(lang) {
        ojcore.Config.setLocale(lang, function() { 
            var validationRules = self.getTranslated('oep.validationEngine', { returnBundleValue: true });
            $.validationEngineLanguage.allRules = validationRules;
            if ($('.validated-form').data('jqv')) {
                $('.validated-form').data('jqv').allrules = validationRules;
            }

            self.getTranslated($(document.body)); 
        });
        //i18n.setLng(lang, {});
    };
    
    self.translateHTMLAttribute = function(phraseId, htmlElement, i18nData, attrName) {
                            if (!phraseId) {
                                return;
                            }
                            if (phraseId.charAt(0) === ESCAPE_PARENT_NAMESPACE_SYMBOL) {
                                //If phrase Id starts with the escape symbol (*) use exact phraseId without adding parent namespace
                                phraseId = phraseId.substring(1, phraseId.length);
                            } else {
                                //Adding namespace to the phrase Id, if required
                                phraseId = self.addNamespaceToPhraseId(phraseId, htmlElement);
                            }
                            var translatedPhrase = getTranslated(phraseId, i18nData);
                            if (!attrName) {
                                if (htmlElement.is('input')) {
                                    htmlElement.val(translatedPhrase);
                                } else if (htmlElement.is('img')) {
                                    htmlElement.attr('alt', translatedPhrase);
                                } else {
                                    htmlElement.html(translatedPhrase);
                                }
                            } else {
                                htmlElement.attr(attrName, translatedPhrase);
                            }
    }
    
    /*
     * 
     * @param {jquery object | String | number | Date} objectToTranslate
     *  Note for String type: Tokens ike {0}, {1}, {name} within the pattern 
        * will be used to define string keys for retrieving values from the parameters
        * object. Token strings should not contain comma (') 
        * or space characters, since they are reserved for future format type enhancements. 
        * The reserved characters within a pattern are:
        * $ { } [ ]  
        * These characters will not appear in the formatted output unless they are escaped
        * with a dollar character ('$').

         * @param {Object | Array} 
         * If Options is array - in that case options will be recognized as parameters to be inserted 
         * into the translated string
         * If option is object you can assign the object this way:
         * {    text: phraseId, 
         *      params: Array_to_parameterize_the_string, 
         *      convertOptions: { numberConvertOptions: NUMBER_FORMAT, dateConvertOptions: DATE_FORMAT } 
         * }
         *      
         * If convert options are not assined - Default converters are taken before Date and Numbers are inserted into being formatted string. 
         * See constants DEFAULT_DATE_CONVERT_OPTIONS and DEFAULT_NUMBER_CONVERT_OPTIONS
         * If convert options are assigned the parameters will be converted to string, using converters with this options
         
         * parameters for translated string should be placed as attribute 'params'
    * @returns {String}
     */
    
    self.getTranslated = function(objectToTranslate, options) {
            if ($.type(objectToTranslate) === 'string') {
                //Case of objectToTranslate is String
                //In this case objectToTranslate is parsed as a phraseId
                //options keep parameters for string to insert into and convertOptions for dates and numbers
                var resultString = ""; //= translateFunction(objectToTranslate);
                //Start to parameterize the translated string
                    var params = ($.type(options) === 'array') ? options : 
                            (options ? options.params : null);
                    var convertOptions = ( ($.type(options) === 'object') && ($.type(options.convertOptions) === 'object') ) ?
                            options.convertOptions : {};
                    var returnBundleValue = ($.type(options) === 'object') ? (options.returnBundleValue || false) : false;
                    if (params) {
                        $.each(params, function(paramInd, paramValue) {
                            if ($.type(paramValue) === 'date') {
                                params[paramInd] = getTranslated(paramValue, convertOptions.dateConvertOptions);
                            } else if ($.type(paramValue) === 'number') {
                                params[paramInd] = getTranslated(paramValue, convertOptions.numberConvertOptions);
                            }
                        });
                        
                    }
                    resultString = translateFunction(objectToTranslate, params);
                    if (!resultString && !returnBundleValue) {
                        console.error('Could not find phrase ' + objectToTranslate);
                    }
                    if (returnBundleValue) {
                        return bundleTranslateFunction(objectToTranslate);
                    }
                return resultString; 
            } else if ($.type(objectToTranslate) === 'object') {
                /* Case of objectToTranslate is <b>jquery DHTML object</b>
                * we translate current tag and all the the children tag, using the attribute data-i18n and data-i18n-ns 
                * (to keep a namespace for all the children of te tag, excluding those, which start with * symbol)
                * In data-i18n tag attribute you can assign simple phraseId or an object, that will be evaled
                * this object contains properties:
                * { text: String phraseId,
                *  params: Array of params, which will be iserted into parametrized string
                *  convertOptions: //contains the settings for converting Date and number parameters to String 
                *  {
                *   <b>numberConvertOptions</b>: number convert options, which are described here: js/libs/oj/v.10/debug/ojvalidation.js
                *       OraDateTimeConverter object, format method description
                *   <b>dateConvertOptions</b>: date convert options, which are described here: js/libs/oj/v.10/debug/ojvalidation.js
                *   OraNumberConverter object, format method description
                *  }
                * }
                */
                objectToTranslate.find('[' + I18N_ATTRIBUTE + ']')
                    .each(function() { 
                        var $this = $(this);
                        var strI18nData = $.trim($this.attr(I18N_ATTRIBUTE));
                        if (strI18nData) {
                            var phraseId = strI18nData;
                            var i18nData = null;
                            if (strI18nData.charAt(0) === '{') {
                                 try { 
                                    eval('i18nData = ' + strI18nData);
                                    phraseId  = i18nData.text;
                                    if (i18nData.attr) {
                                        $.each(i18nData.attr, function(attrName, attrValue) {
                                            self.translateHTMLAttribute(attrValue, $this, i18nData, attrName);
                                        });
                                    }
                                } catch (e) {
                                    throw "Can not parse as an object data-i18n attribute " + strI18nData;
                                }
                            }
                            
                            self.translateHTMLAttribute(phraseId, $this, i18nData);
                            
                            
                            
                            /*
                            if (!phraseId) {
                                return;
                            }
                            if (phraseId.charAt(0) === ESCAPE_PARENT_NAMESPACE_SYMBOL) {
                                //If phrase Id starts with the escape symbol (*) use exact phraseId without adding parent namespace
                                phraseId = phraseId.substring(1, phraseId.length);
                            } else {
                                //Adding namespace to the phrase Id, if required
                                phraseId = self.addNamespaceToPhraseId(phraseId, $this);
                            }
                            var translatedPhrase = getTranslated(phraseId, i18nData);
                            if ($this.is('input')) {
                                $this.val(translatedPhrase);
                            } else if ($this.is('img')) {
                                $this.attr('alt', translatedPhrase);
                            } else {
                                $this.html(translatedPhrase);
                            }
                            */
                        }
                });
            } else if ($.type(objectToTranslate) === 'number') {
                /* Case of objectToTranslate is <b>number</b>
                 * In this case @param {options} should be of type described here: js/libs/oj/v.10/debug/ojvalidation.js
                *       OraNumberConverter object, format method description
                *       
                *       Just for now this object can have the following properties
                * - <b>style.</b> "decimal", "currency" or "percent". The default is "decimal".<br>
                * - <b>currency.</b> An ISO 4217 alphabetic currency code. Mandatory when when style is "currency".<br>
                * - <b>currencyDisplay.</b> is one of the String values "code", "symbol", or "name", specifying whether to display the currency as an ISO 4217 alphabetic currency code,
                *                    a localized currency symbol, or a localized currency name if formatting with the "currency" style. It is only present when style has the value "currency".
                *                     The default is "symbol".<br>
                * - <b>minimumIntegerDigits.</b> is a non-negative integer Number value indicating the minimum integer digits to be used. Numbers will be padded with leading zeroes if necessary.<br>
                * - <b>minimumFractionDigits.</b> a non-negative integer Number value indicating the minimum fraction digits to be used. Numbers will be padded with trailing zeroes if necessary.<br>
                * - <b>maximumFractionDigits.</b> a non-negative integer Number value indicating the maximum fraction digits to be used. Numbers will be rounded if necessary.<br>
                * - <b>numberingSystem</b>. The numbering system.
                * - <b>useGrouping.</b> is a Boolean value indicating whether a grouping separator should be used. The default is true.<br>
                * - <b>pattern.</b> custom pattern. Will override above options when present.<br>

                 * 
                 */
                var customNumberConverter = numberConverter;
                if ((options !== null) && ($.type(options) === 'object')) {
                    customNumberConverter = ojcore.NumberConverterFactory.createConverter(options);
                }
                return customNumberConverter.format(objectToTranslate);
                
            } else if ($.type(objectToTranslate) === 'date') {
                /* Case of objectToTranslate is <b>date</b>
                * In this case options should be of type described here: js/libs/oj/v.10/debug/ojvalidation.js
                *       OraDateTimeConverter object, format method description
                *       Just for now it looks like this:
 
                         * - <b>weekday.</b> Allowed values: "narrow", "short", "long".<br>
                        * - <b>era.</b> Allowed values: "narrow", "short", "long".<br>
                        * - <b>year.</b> Allowed values:"2-digit", "numeric".<br>
                        * - <b>month.</b> Allowed values: "2-digit", "numeric", "narrow", "short", "long".<br>
                        * - <b>day.</b> Allowed values: "2-digit", "numeric".<br>
                        * - <b>hour.</b> Allowed values: "2-digit", "numeric".<br>
                        * - <b>minute.</b> Allowed values: "2-digit", "numeric".<br>
                        * - <b>second.</b> Allowed values: "2-digit", "numeric".<br>
                        * - <b>timeZoneName.</b> Will be ignored in phase1. We do not support it yet.<br>
                        * - <b>hour12.</b> is a Boolean value indicating whether 12-hour format (true) or 24-hour format (false) should be used. It is only relevant when hour is also present.<br>
                        * - <b>pattern.</b> custom String pattern as defined by Unicode CLDR.<br>
                        * - <b>formatType.</b> a predefined formatting type. Allowed values: "date", "time", "datetime".
                        * - <b>dateFormat.</b> optional, specifies the date format field. Allowed values: "short", "medium", "long", "full". It is only considered when formatType is present. The default value is "short".<br>
                        * - <b>timeFormat.</b> optional, specifies the time format field. Allowed values: "short", "medium", "long", "full". It is only considered when formatType is present. The default value is "short".<br><br>
                        * The order of precedence is the following:<br>
                        * 1. pattern.<br>
                    * 2. ECMA options.<br>
                    * 3. formatType.<br>
                    * If options is ommitted, the default will be the following object:<br>
                    * {<br>
                    * year:"numeric",<br> 
                    * month:"numeric",<br> 
                    * day:"numeric"<br>
                    * };
                */
                var customDateConverter = dateConverter;
                if ((options !== null) && ($.type(options) === 'object')) {
                    customDateConverter = ojcore.DateTimeConverterFactory.createConverter(options);
                }
                return customDateConverter.format(objectToTranslate.getTime());
            } else {
                return "";
            }
        };
    
    return {

        getTranslated : self.getTranslated,
        
        changeLanguage : self.changeLanguage
    };
});
        

