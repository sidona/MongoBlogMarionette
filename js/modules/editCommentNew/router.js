/**
 * Created by sidona on 7/26/2015.
 */
define(function(require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controller');

    module.exports = Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {
            // our default route
            "editCommentNew/(:id)":"showEditCommentNew"

        }
    });
});