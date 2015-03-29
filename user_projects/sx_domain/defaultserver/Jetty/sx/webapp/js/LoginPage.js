/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
  *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('LoginPage',
    ['jquery', 
     'Translate'
    ],
    /**
     * @exports event/source
     * @ignore
     */
    function($, Translate) {
        /**
         * @class
         * @classdesc Source Creation Form Model
         * @param 
         */
        
        function LoginPage() {
            var self = this;
            self.init = function() {
                
            };
            
            self.init();
        }
        
        LoginPage.build = function(callback) {
            Translate.getTranslated($(document.body));
            
            
            LoginPage._showLoginError();
            
            this.fldLogin = $(document.loginForm.login)
                    .focus(function(event) {
                        LoginPage.onFieldFocus(this);
                    })
                    .blur(function() {
                        LoginPage.onFieldBlur(this)
                    });
            this.fldPassword = $(document.loginForm.password)
                    .focus(function(event) {
                        LoginPage.onFieldFocus(this);
                    })
                    .blur(function(event) {
                        LoginPage.onFieldBlur(this)
                    });;
            
           
            /*if (!LoginPage._model) {
                    LoginPage._model = new LoginPage();
            } else {
                LoginPage._model.init();
            }
            
            ko.applyBindings(LoginPage._model, 
                    document); 
            */        
       };
       
       LoginPage._showLoginError = function() {
           var queryString = $.trim(window.location.search);
           if (!queryString) {
               return;
           }
           if (queryString.indexOf('?') === 0) {
               queryString = queryString.substr(1, queryString.length - 1);
           }
           if (!queryString.length === 0) {
               return;
           }
           var qsParams = queryString.split('&');
           for (var qspInd = 0; qspInd < qsParams.length; qspInd++) {
               var paramPair = qsParams[qspInd];
               var paramName = paramPair;
               var equalIndex = paramPair.indexOf('=');
               if (equalIndex !== -1) {
                   var paramArr = paramPair.split('=');
                   paramName = paramArr[0];
                   if ($.trim(paramName.toLowerCase()) === LoginPage.INVALID_PASSWORD_PARAM) {
                       $('.loginError').addClass('show');
                       return;
                   }
                       
                   
               }
           }
       };
       
       LoginPage.INVALID_PASSWORD_PARAM = 'error';
       
       LoginPage.onFieldFocus = function(field) {
           var $field = $(field);
           var defaultPhrase = Translate.getTranslated('oep.login.' + $field.attr('name').toUpperCase() + '_LABEL');
           if ($field.val() === defaultPhrase) {
               $field.val('');
           }
           if ($field.attr('name') === 'password') {
               $field.attr('type', 'password');
           }
       };
       
       LoginPage.onFieldBlur = function(field) {
            var $field = $(field);
            var defaultPhrase = Translate.getTranslated('oep.login.' + $field.attr('name').toUpperCase() + '_LABEL');
            if (!$field.val()) {
                $field.val(defaultPhrase);
               if ($field.attr('name') === 'password') {
                    $field.attr('type', 'text');
               }
           }
           
       };
        
        return LoginPage;
    }
);


