/*
 *  jquery-plugin-boilerplate NO COMMENTS - v4.2.0
 *  Modified version of jquery-boilerplate (http://jqueryboilerplate.com)
 *  
 *  https://github.com/fmp777/jquery-plugin-boilerplate
 *  
 *  Originally Made by Zeno Rocha
 *  Under MIT License
 */
;( function( $, window, document, undefined ) {

    "use strict";

    var pluginName = "defaultPluginName",   
        defaults = {
            propertyName: "value"           
        };

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( true, {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }


    $.extend( Plugin.prototype, {
        init: function() {
            this.yourOtherFunction( "jQuery Plugin Boilerplate Initialized" );
        },
        
        yourOtherFunction: function( text ) {
            $( this.element ).text( text );
        },
        
        callMeWithShortcut: function ( arg1, arg2, arg3 ) {
            alert('callMeWithShortcut '+arg1+' '+arg2+' '+arg3);
            console.log([arg1, arg2, arg3], 'callMeWithShortcut');
        }
    } );


    $.fn[ pluginName ] = function( options, args ) {
        return this.each( function() {
            var $plugin = $.data( this, "plugin_" + pluginName );
            if (!$plugin) {
                var pluginOptions = (typeof options === 'object') ? options : {};
                $plugin = $.data( this, "plugin_" + pluginName, new Plugin( this, pluginOptions ) );
            }
            
            if (typeof options === 'string') {
                if (typeof $plugin[options] === 'function') {
                    if (typeof args !== 'object') args = [args];
                    $plugin[options].apply($plugin, args);
                }
            }
        } );
    };

} )( jQuery, window, document );
