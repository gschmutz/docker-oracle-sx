/**
 * Product: OEP Stream Explorer.
 *
 * @author Alexander Kurochkin
 * @author Anna Yarmolenko
 *
 * Date: 12/3/13
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('Utils', [
        'jquery',
        'knockout',
        'Translate',
        'validationEngine'
    ],

    /**
     *  Utils classes.
     * @exports utils
     * @version 1.0
     */
    function ($, ko, Translate) {

        /**
         * @class
         *
         */
        function Utils() {
        }

        /**
         * convertDate
         * @param {Date} date
         * @returns {string}
         */
        Utils.convertDate = function (date) {
            return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        };

        /**
         * Converts id for jquery
         * @param id
         * @returns {string}
         */
        Utils.toJqueryId = function (id) {
            if (id.charAt(0) === '#') {
                return id;
            }

            return '#' + id;
        };

        Utils.removeNonAsciiSymbols = function (str) {
            if (str) {
                return str.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, '');

            }
            return '';
        };

        Utils.removeNonOSGILegalIdSymbols = function (str) {
            if (str) {
                return str.replace(/[^A-Za-z0-9\.\/]*/g, '');

            }
            return '';
        };


        Utils.cutStringIfMoreCharactersThan = function (str, length) {
            if (str && str.length > length) {
                return str.substring(0, length - 1);
            }
            return str;
        };


        /**
         *
         * @param parentId
         * @param childId
         * @returns {string}
         */
        Utils.getChildId = function (parentId, childId) {
            return parentId + childId;
        };


        /**
         * remove first "#" from id
         * @param {String} id
         * @returns {String}
         */
        Utils.getIdWithoutFirstHash = function (id) {
            while (id.charAt(0) === '#') {
                id = id.substring(1);
            }

            return id;
        };

        /**
         *    uniqueId  on Client Side  (generate unique Id during user session)
         * @returns {string}
         */
        Utils.getUniqueId = (function () {
            var id = 0;
            return function () {
                return '' + (id++);
            };
        })();

        /**
         *
         *   load content of file
         * @param url
         * @returns {string}
         */
        Utils.loadContent = function (url) {

            var fileContent = "";
            $.ajax({
                url: url,
                async: false,
                cache: false,
                success: function (data) {
                    fileContent = data;
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    Utils.goToLoginPage();
                }
            });

            var isLogOut = Utils.goToLoginPageIfUserSessionExpired(fileContent);

            return isLogOut ? null : fileContent;
            //return fileContent;
        };

        /**
         *
         * @param element
         * @param url
         * @param callback
         */
        Utils.loadHtmlAsync = function (element, url, callback) {

            $.ajax(url, {
                async: true,
                cache: false,
                success: function (data, textStatus) {
                    if (Utils.goToLoginPageIfUserSessionExpired(data)) {
                        return;
                    }
                    $(element).html(data);
                    //Translate.getTranslated($(element));
                    if (callback) {
                        callback.call(this);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    Utils.goToLoginPage();
                }
            });

        };

        Utils.loadJSONAsync = function (url, callback) {

            $.ajax(url, {
                dataType: 'json',
                async: true,
                success: function (data, textStatus) {
                    if (Utils.goToLoginPageIfUserSessionExpired(textStatus)) {
                        return;
                    }
                    //Translate.getTranslated($(element));
                    if (callback) {
                        callback.call(this, data);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    Utils.goToLoginPage();
                }
            });

        };


        /**
         *  excludeByIds  - found objects that id not ids- opposite to findByIds
         * @param {Array.<string>} ids
         * @param {Array.<Object with id property>} objects
         * @returns {Array of Objects}
         */
        Utils.excludeByIds = function (ids, objects) {
            if (!ids) {
                return objects;
            }

            function notInIds(object) {
                function isEqual(id) {
                    return object.id === id;
                }

                return !ids.some(isEqual);
            }

            return objects.filter(notInIds);
        };

        /**
         *
         * String.format aka java MessageFormat
         *
         * example:
         * String.format('{0} is {1}', 'String.format', 'good');
         * result : String.format is good.
         *
         * @param formatString
         * @returns {XML|*|string|void}
         */
        String.format = function (formatString) {
            var args = Array.prototype.slice.call(arguments, 1);
            return formatString.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined'
                    ? args[number]
                    : match
                    ;
            });
        };


        /**
         *
         * @param {Array.<{id:String}>} objectsForExclude
         * @param {Array.<{id:String}>} objects
         * @returns { Array.<{id:String}>}
         */
        Utils.excludeObjectsWithId = function (objectsForExclude, objects) {
            if (!objectsForExclude || objectsForExclude.length === 0) {
                return objects;
            }

            function notInIds(object) {
                function isEqual(objectForExclude) {
                    return object.id === objectForExclude.id;
                }

                return !objectsForExclude.some(isEqual);
            }

            return objects.filter(notInIds);
        };

        Utils.findObjectsWithId = function (objectsToFind, objects) {
            if (!objectsToFind || objectsToFind.length === 0) {
                return [];
            }

            function isInIds(object) {
                function isEqual(objectToFind) {
                    return object.id === objectToFind.id;
                }

                return objectsToFind.some(isEqual);
            }

            return objects.filter(isInIds);
        };

        /**
         *
         * @param value
         * @returns {Number}
         */
        Utils.ifValueIsNumericConvertToNumber = function (value) {
            return $.isNumeric(value) ? parseFloat(value) : value;
        };


        /**
         *
         * @param value
         * @returns {boolean}
         */
        Utils.isIntegerValue = function (value) {
            return $.isNumeric(value) && Math.floor(value) == value;
        };


        /**
         *  findByIds
         * @param {Array.<string>} ids
         * @param {Array.<Object with id property>} objects
         * @returns {Array of Objects}
         */
        Utils.findByIds = function (ids, objects) {
            if (!ids) {
                return [];
            }

            function isInIds(object) {
                function isEqual(id) {
                    return object.id === id;
                }

                return ids.some(isEqual);
            }

            return objects.filter(isInIds);
        };


        /**
         *  find element ById
         * @param {string} id
         * @param {Array.<Object with id field>} objects
         * @returns {Object}
         */
        Utils.findById = function (id, objects) {
            for (var i = 0; i < objects.length; i++) {
                if (objects[i].id == id) {
                    return objects[i];
                }
            }
            return undefined;
        };

        /**
         * @param {string} parameterName
         * @param {string} parameterValue
         * @param {Array.<Object with parameterName field>} objects
         * @returns {Object}
         */
        Utils.findByParameterValue = function (parameterName, parameterValue, objects) {
            for (var i = 0; i < objects.length; i++) {
                if (objects[i][parameterName] == parameterValue) {
                    return objects[i];
                }
            }
            return undefined;
        };

        /**
         * @param {string} parameterName
         * @param {string[]} parameterValues
         * @param {Array.<Object with parameterName field>} objects
         * @returns {Object}
         */
        Utils.findByParameterValues = function (parameterName, parameterValues, objects) {

            var foundedObjects = [];
            if (!parameterValues) {
                return foundedObjects;
            }

            for (var i = 0; i < parameterValues.length; i++) {
                var foundedObject = Utils.findByParameterValue(parameterName, parameterValues[i], objects);
                if (foundedObject) {
                    foundedObjects.push(foundedObject);
                }
            }

            return foundedObjects;
        };


        /**
         *  find element By name
         * @param {string} name
         * @param {Array.<Object with name field>} array
         * @returns {Object}
         */
        Utils.findByKoObservableName = function (name, array) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].name() == name) {
                    return array[i];
                }
            }
            return undefined;
        };

        /**
         *  remove element ById
         * @param {string} id
         * @param {Array.<Object with id field>} objects
         * @returns {Object}
         */
        Utils.removeById = function (id, objects) {
            for (var i = 0; i < objects.length; i++) {
                if (objects[i].id == id) {
                    objects.splice(i, 1);
                    return true;
                }
            }
            return false;
        };


        /**
         *  is objects contains object
         *
         * @param {*} object with id field
         * @param {*} objects with id field
         * @returns {boolean}
         */
        Utils.containsById = function (object, objects) {
            for (var i = 0; i < objects.length; i++) {
                if (objects[i].id == object.id) {
                    return true;
                }
            }
            return false;
        };

        /**
         *  is objects contains object - only for classes that implements equals method
         *
         * @param {{id:String}} object
         * @param {{id:String}[]} objects
         * @returns {boolean}
         */
        Utils.containsByEquals = function (object, objects) {
            for (var i = 0; i < objects.length; i++) {
                if (objects[i].equals(object)) {
                    return true;
                }
            }
            return false;
        };

        Utils.isDisplayElement = function (jqueryElement) {
            return jqueryElement.css("display") != "none";

        };

        Utils.displayElement = function (isDisplay, jqueryElement) {
            if (isDisplay) {
                jqueryElement.css("display", "block");
            } else {
                jqueryElement.css("display", "none");
            }
        };

        Utils.displayClauseElement = function (isDisplay, jqueryElement) {
            if (isDisplay) {
                jqueryElement.removeClass("invisible");
            } else {
                jqueryElement.addClass("invisible");
            }
        };

        Utils.hideElementOnClickOfAnythingElseInParent = function (elementToHideId, parentId) {
            $(parentId).click(function (e) {
                var target = e.target;
                if (!$(target).is(elementToHideId) && !$(target).parents().is(elementToHideId)) {
                    $(elementToHideId).hide();
                }
            });
        };


        /**
         *
         * @param objects
         * @returns {Array.<id>}
         */
        Utils.extractIdsFromArrayOfObjects = function (objects) {
            return objects.map(function (object) {
                return object.id;
            });
        };

        /**
         *
         * @param {{id:String}[]} array
         * @param {{id:String}[]} updatedElements
         */
        Utils.updateArrayElementsById = function (array, updatedElements) {
            for (var i = 0; i < updatedElements.length; i++) {
                Utils.updateArrayElementById(array, updatedElements[i]);
            }
        };


        /**
         *
         * @param {{id:String}[]} array
         * @param {{id:String}} updatedElement
         */
        Utils.updateArrayElementById = function (array, updateElement) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].id == updateElement.id) {
                    if (!array[i].equals(updateElement)) {
                        console.log("updateArrayElementById: update Element");
                        array.splice(i, 1, updateElement);
                        return updateElement;
                    } else {
                        return array[i];
                    }
                }
            }
            //id not found
            array.push(updateElement);
            return updateElement;
        };

        /**
         *
         * @param {{id:String}[]} array
         * @param {{id:String}} updatedElement
         */
        Utils.removeArrayElementById = function (array, id) {
            for (var i = 0; i < array.length; i++) {
                if (array[i].id == id) {
                    array.splice(i, 1);
                    break;
                }
            }

        };


        Utils.jsonStringifyEquals = function (a1, a2) {
            return JSON.stringify(a1) == JSON.stringify(a2);
        };


        Utils.toString = function () {
            return [].join.call(arguments, ' ');
        };


        /**
         *   convertObjectValuesToArray
         * @param {Event} event
         * @returns {Array}
         */
        Utils.convertObjectValuesToArray = function (event) {
            var eventAsArray = [];
            for (var eventKey in event) {
                if (event.hasOwnProperty(eventKey)) {
                    var eventValue = event[eventKey];
                    eventAsArray.push(eventValue);
                }
            }
            return eventAsArray;
        };

        /**
         *  translate Array of phrases
         * returns Object with key : value pairs, where value is translated key
         * @param {Array.<key|string>} array -Array of phrases
         * @param prefix -phrase id prefix
         * returns {Array.<{id:key, text:translatedKey}>}
         */
        Utils.translateArray = function (prefix, array) {

            var tranlateKey = function (key) {
                return {id: key, text: getTranslated(prefix + key)};
            };
            return array.map(tranlateKey);

        };

        Utils.translateJqueryElement = function (jqueryElement) {
            getTranslated(jqueryElement);
        };

        /**
         *
         * @param {string} prefix
         * @param {string} key
         * @returns {*}
         */
        Utils.translateKey = function (prefix, key) {
            return getTranslated(prefix + key);
        };

        /**
         *
         * @param {string} prefix
         * @param {string} key
         * @param {Array} params
         * @returns {*}
         */
        Utils.translateKeyWithParams = function (prefix, key, params) {
            return getTranslated(prefix + key, params);
        };

        /**
         *
         * @param prefix
         * @param key
         * @returns {*}
         */
        Utils.translateKeyAndAddSpace = function (prefix, key) {
            return getTranslated(prefix + key) + " ";
        };

        Utils.isArrayFilled = function (array) {
            return array && array.length > 0;
        };

        Utils.removeElementFromArray = function (array, element) {
            var i = array.indexOf(element);
            if (i >= 0) {
                array.splice(i, 1);
            }
        };

        Utils.isValidate = function (jqueryElement) {
            return jqueryElement.validationEngine('validate');
        };

        Utils.getFirstNumberValue = function (object) {
            for (var key in object) {
                if ($.type(object[key]) === 'number') {
                    return object[key];
                }
            }

            return null;
        };

        Utils.getFirstDateValue = function (object) {
            for (var key in object) {
                if ($.type(object[key]) === 'date') {
                    return object[key];
                }
            }

            return null;
        };

        Utils.getFirstNumberKey = function (object) {
            for (var key in object) {
                if ($.type(object[key]) === 'number') {
                    return key;
                }
            }

            return null;
        };

        Utils.getFirstDateKey = function (object) {
            for (var key in object) {
                if ($.type(object[key]) === 'date') {
                    return key;
                }
            }

            return null;
        };

        Utils.getFieldByKey = function (keyNeeded, object) {
            for (var key in object) {
                if (key === keyNeeded) {
                    return object[key];
                }
            }

            return null;
        };

        /**
         * inheritance
         * Pseudo-classical pattern
         *
         * @param {Function} Child
         * @param {Function} Parent
         */
        Utils.extend = function (Child, Parent) {
            var F = function () {
            };
            F.prototype = Parent.prototype;
            Child.prototype = new F();
            Child.prototype.constructor = Child;
            Child.superclass = Parent.prototype;
        };

        /**
         * Returns random from min to max
         * @param {type} min
         * @param {type} max
         * @returns {Number}
         */
        Utils.getRandomArbitary = function (min, max) {
            return Math.random() * (max - min) + min;
        };


        /**
         * Returns random int from min to max
         * @param {type} min
         * @param {type} max
         * @returns {Number}
         */
        Utils.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };


        /**
         * not pattern-based exploration
         * @type {string}
         */
        Utils.EXPLORATION_TYPE_NAME = "Exploration";

        /**
         *
         * @param {Object} exploration
         * @returns {boolean}
         */
        Utils.isPatternTypeName = function (exploration) {
            return (exploration.typeName != null && exploration.typeName != Utils.EXPLORATION_TYPE_NAME);
        };

        /**
         *  check existence of pattern-based exploration properties
         * @param {Object} explorationInJson
         * @returns {boolean}
         */
        Utils.isPatternExploration = function (explorationInJson) {
            return explorationInJson.pattern != null || Utils.isPatternTypeName(explorationInJson);
        };


        Utils.UNLOGGED_REGEXP = /<title>OEP Stream Explorer Login<\/title>/;
        Utils.LOGIN_PAGE = 'login.html';

        /**
         * if we send request to Backend after user session is expired, Backend server send Redirect to login page to Browser
         *
         * but in case ajax request(when expired session ): Browser Redirect works in other way:  ajax response will contain login page content
         *
         * we should process this usecase and  'Redirect to login page' by Javascript API manually
         *
         * @param response
         * @returns {boolean}
         */
        Utils.goToLoginPageIfUserSessionExpired = function (response) {

            if (typeof response == 'string' && response.match(Utils.UNLOGGED_REGEXP)) {
                Utils.goToLoginPage();
                return true;
            }
            return false;
        };

        Utils.goToLoginPage = function () {
            window.location = Utils.LOGIN_PAGE;//Redirect to login page
        };


        Utils.reloadFromCache = function () {
            window.location.reload(false);
        };


        /**
         *
         * workaround for bug in firefox: OEP-556 UNDO/REDO ACTIONS LOG OUT USER FROM SX ON FIREFOX
         *
         * @param newWindowLocationHash
         */
        Utils.reloadFromCacheWithTimeout = function (newWindowLocationHash) {
            console.log("reloadFromCacheWithTimeout");
            setTimeout(
                function () {
                    window.location.hash = newWindowLocationHash;
                    window.location.reload(false);
                },
                100
            );
        };

        /**
         * update sx pages from server (usually to change language)
         */
        Utils.reloadFromServer = function () {
            window.location.reload(true);
        };


        return Utils;
    });
