/**
 * Product: OEP Stream Explorer.
 *
 * @author Anna Yarmolenko
 * @author Alexander Kurochkin
 *
* Copyright (c) 2013, 2015, Oracle and/or its affiliates. 
* All rights reserved.*/

define('WindowsDrawerController', [
        'jquery',
        'knockout',
        'ExplorationKoModel',
        'ExplorationUtils',
        'WindowsController',
        'Utils',
        'jqueryui'
    ],
    /**
     * @exports exploration/window
     * @ignore
     */
    function ($, ko, ExplorationKoModel, ExplorationUtils, WindowsController, Utils) {

        /**
         * @class
         * @classdesc  ui conroller for windows drawer      ,
         * windows drawer contains windows for all sources(streams) in exploration
         */
        function WindowsDrawerController() {

            var self = this;
            var exUtils = ExplorationUtils.getInstance();
            self.windowsDrawer = null;
            self.isWindowsDrawerOpened = false;

            //TODO:: when partition is returned back - set WINDOWS_DRAWER_WIDTH = 70;
            var WINDOWS_DRAWER_WIDTH = 50;
            var WINDOW_OPENING_TIME_INTERVAL = 10;


            self.onOpenExplorationEditor = function () {
                self.windowsDrawer = $(exUtils.windowsDrawer);

                var windowsDrawerOpenBtn = self.windowsDrawer.find(exUtils.windowsDrawerOpenBtn);
                windowsDrawerOpenBtn.click(function () {
                    self.openOrCloseWindowsDrawer();
                });

                Utils.loadHtmlAsync(self.windowsDrawer.find(exUtils.windowsContainer), exUtils.windowsDrawerPattern, function () {
                    $(exUtils.partitionByContainer).append(exUtils.partitionByContainerPattern);
                    Utils.translateJqueryElement($(exUtils.windowsContainer));

                    var windowsController = WindowsController.getInstance();
                    windowsController.onOpenExplorationEditor();
                    ko.applyBindings(windowsController, $(exUtils.windowsDrawerContent)[0]);

                    windowsController.updateSourceWindowSlider();
                });
            };


            self.onCloseExplorationEditor = function () {
//                self.windowsDrawer = null;
                self.isWindowsDrawerOpened = false;
                WindowsController.getInstance().onCloseExplorationEditor();

            };


            self.openOrCloseWindowsDrawer = function () {

                if (!self.isWindowsDrawerOpened) {
                    self.windowsDrawer.addClass('open');
                    self.movingWindowsDrawer(!self.isWindowsDrawerOpened);

                } else {
                    $(exUtils.windowsDrawerContent).fadeOut(500);
                    self.movingWindowsDrawer(!self.isWindowsDrawerOpened);

                }
                self.isWindowsDrawerOpened = !self.isWindowsDrawerOpened;
                exUtils.explorationKoModel.currentEditedRegion.valueHasMutated();
            };


            /**
             *
             * @param {boolean} toOpen
             */
            self.movingWindowsDrawer = function (toOpen) {
                var movedWindow = self.windowsDrawer.find('>div')[0];
                var moveCounter = 0;

                var moveWindowsDrawerByInterval = setInterval(function () {
                        moveCounter++;
                        if (moveCounter < WINDOWS_DRAWER_WIDTH) {
                            movedWindow.style.left = (toOpen ? (100 - moveCounter) : (100 - WINDOWS_DRAWER_WIDTH + moveCounter)) + '%';
                        } else {
                            self.finishMovingWindowsDrawer(toOpen, moveWindowsDrawerByInterval);
                        }
                    },
                    WINDOW_OPENING_TIME_INTERVAL);
            };


            /**
             *
             * @param {boolean} toOpen
             * @param moveWindowDrawerByInterval  - interval function
             */
            self.finishMovingWindowsDrawer = function (toOpen, moveWindowDrawerByInterval) {
                var movedWindow = self.windowsDrawer.find('>div')[0];

                movedWindow.style.left = (toOpen ? (100 - WINDOWS_DRAWER_WIDTH) : (100)) + '%';


                clearInterval(moveWindowDrawerByInterval);

                if (toOpen) {
                    $(exUtils.windowsDrawerContent).fadeIn(500);

                } else {
                    self.windowsDrawer.removeClass('open');

                }
            };
        }


        /**
         * Get instance of singleton
         *
         * @static
         * @return {ExplorationsController}
         */
        WindowsDrawerController.getInstance = function () {
            if (!this.instance) {
                this.instance = new WindowsDrawerController();
            }
            return this.instance;
        };

        return WindowsDrawerController;

    }
);

