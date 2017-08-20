/*
 *  jquery-plugin-boilerplate - v4.2.0
 *  Modified version of jquery-boilerplate (http://jqueryboilerplate.com)
 *  
 *  https://github.com/fmp777/jquery-plugin-boilerplate
 *  
 *  Originally Made by Zeno Rocha
 *  Under MIT License
 */
;( function( $, window, document, undefined ) {

    "use strict";

    // undefined is used here as the undefined global variable in ECMAScript 3 is
    // mutable (ie. it can be changed by someone else). undefined isn't really being
    // passed in so we can ensure the value of it is truly undefined. In ES5, undefined
    // can no longer be modified.

    // window and document are passed through as local variable rather than global
    // as this (slightly) quickens the resolution process and can be more efficiently
    // minified (especially when both are regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = "defaultPluginName",
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = element;

        // jQuery has an extend method which merges the contents of two or
        // more objects, storing the result in the first object. The first object
        // is generally empty as we don't want to alter the default options for
        // future instances of the plugin
        this.settings = $.extend( true, {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend( Plugin.prototype, {
        init: function() {

            // Place initialization logic here
            // You already have access to the DOM element and
            // the options via the instance, e.g. this.element
            // and this.settings
            // you can add more functions like the one below and
            // call them like the example bellow
            this.yourOtherFunction( "jQuery Boilerplate" );
        },
        yourOtherFunction: function( text ) {

            // some logic
            $( this.element ).text( text );
        }
    } );

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" +
                    pluginName, new Plugin( this, options ) );
            }
        } );
    };

    // A lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations and allows calling of plugin functions with arguments
    // You can instantiate your plugin first passing options, then subsequent calls will allow calling your functions
    // OR you can instantiate and call function at the same time if you have no options to pass
    // EXAMPLES:
    //      $(element).defaultPluginName({optin: value}) // instantiate
    //      $(element).defaultPluginName('method', [arg1, arg2, arg3]) will call yourOtherFunction(arg1, arg2, arg3)
    //      $(element).defaultPluginName('method', singleArgument) will call yourOtherFunction(singleArgument)

    $.fn[ pluginName ] = function( options, args ) {
        return this.each( function() {
            var $plugin = $.data( this, "plugin_" + pluginName );

            if (!$plugin) {
                var pluginOptions = (typeof options === 'object') ? options : {};
                $plugin = $.data( this, "plugin_" + pluginName, new Plugin( this, pluginOptions ) );
            }

            if (typeof options === 'string')
            {
                if (typeof $plugin[options] === 'function')
                {
                    if (typeof args !== 'object') args = [args];
                    $plugin[options].apply($plugin, args);
                }
            }
        } );
    };

} )( jQuery, window, document );
