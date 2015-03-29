/**
 * Product: OEP Stream Explorer
 *
 * @author Anna Yarmolenko
 *
* Copyright (c) 2014, 2015, Oracle and/or its affiliates. All rights reserved.
 * 
 */

define(
        'SourceService',
        ['jquery', 'knockout', 'Translate', 'ThingService', 'SourceThing', 'Utils'],
        /**
         * @exports source
         * @ignore
         */
                function($, ko, Translate, ThingService, Source, Utils) {
                    /**
                     * @class
                     * @classdesc Source Service class.
                     */
                    function SourceService() {
                        var self = this;

                        ThingService.call(self, 'webresources/v0.1/source');

                        self.thing = Source;

                        self.uploadLocalSourceFile = function(fileName, file, onSuccess, onFalure) {
                            var UPLOAD_FILE_URL = 'webresources/v0.1/file/upload';
                            
                                var formData = new FormData();
                                formData.append("file", file);
                                formData.append("name", fileName);
                            
                                $.ajax({
                                    type: 'POST',
                                    cache: false,
                                    url: UPLOAD_FILE_URL,
                                    processData: false,
                                    contentType: false,
                                    data: formData,
                                    success: function(data){
                                        Utils.goToLoginPageIfUserSessionExpired(data);

                                        if (onSuccess && $.type(onSuccess) === 'function') {
                                          onSuccess.call(this, data.data);
                                      }
                                    },
                                    error: function(jqXHR, textStatus, errorThrown) {
                                        if (onFalure) {
                                            onFalure.call(this, {status: textStatus, error: errorThrown});
                                        }
                                        console.log('upload file failed.');
                                        self.checkUnLogin(textStatus);
                                    }
                                  });
                            
                        };
  
                        self.uploadRemoteSourceFile = function(uploadFileUrl, onSuccess, onFalure) {
                            var UPLOAD_FILE_URL = 'webresources/v0.1/eventType/generateByURL';
                            $.ajax({
                                type: 'POST',
                                url: UPLOAD_FILE_URL,
                                contentType: 'application/json',
                                dataType: 'json',
                                data: JSON.stringify({ url: uploadFileUrl}),
                                success: function(data) {
                                      if (onSuccess && $.type(onSuccess) === 'function') {
                                          onSuccess.call(this, data.data);
                                      }
                                      console.log(self.constructor.name + '.uploadRemoteSourceFile metod succeeded.');
                                },
                                error: function(jqXHR, textStatus, errorThrown) {
                                    if (onFalure) {
                                        onFalure.call(scope || this, {status: textStatus, error: errorThrown});
                                    }
                                    console.log(self.constructor.name + '.uploadRemoteSourceFile metod failed.');
                                    self.checkUnLogin(textStatus);
                                }
                            });
                            
                        };
                        return this;
                        
                    }
                    return SourceService;
                }
        );
