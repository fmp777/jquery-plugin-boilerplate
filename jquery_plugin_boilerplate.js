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

    // Create the defaults once
    var pluginName = "defaultPluginName",   // set your plugin name here ie: $(el).yourPlugin();
        defaults = {
            propertyName: "value"           // add all your default options/settings
        };

    // The actual plugin constructor - typically don't need to touch this
    function Plugin ( element, options ) {
        this.element = element;

        this.settings = $.extend( true, {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    // where your plugin lives! modify init and add all other functions you need!
    $.extend( Plugin.prototype, {
        
        init: function() {

            // Place initialization logic here
            // Access element via this.element
            // Access options/settings via this.settings
            
            
            // you can add more functions like the one below and
            // call them like the example bellow
            this.yourOtherFunction( "jQuery Plugin Boilerplate" );
        },
        
        yourOtherFunction: function( text ) {

            // some logic
            $( this.element ).text( text );
        }
    } );

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
