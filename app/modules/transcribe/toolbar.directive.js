'use strict';

require('./transcribe.module.js')
    .directive('transcribeToolbar', transcribeToolbar);

// @ngInject
function transcribeToolbar(ToolsFactory) {
    var directive = {
        link: transcribeToolbarLink,
        restrict: 'A',
        replace: true,
        scope: true,
        templateUrl: 'transcribe/toolbar.html'
    };
    return directive;

    function transcribeToolbarLink(scope) {
        var vm = scope.vm;
        vm.tools = ToolsFactory;
    }
}
