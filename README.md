# jquery-plugin-boilerplate
Slightly modified version of [jquery-boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate).  This version makes your life easier by:
1. Direct calling of plugin functions without having to store plugin object or call the plugin object from data()
2. Recursive options/settings extension whereas the original will overwrite your multidimensional settings
3. More useful comments for beginners

Also removed all the coffeescript compile and minification bloat.  Its a boilerplate not a plugin.  Copy, paste, and modify!

### Explanation of the differences

In the original jquery-boilerplate, to call your function, you needed to have the plugin object saved to variable OR you needed to get it by calling 
```js
var plugin = $("#element").data('plugin_YourPluginName');
// before you could call
plugin.yourFunciton(arg1,arg2,arg3);
```

This version of boilerplate allows for a much shorter route to your plugin methods, even a shortcut to instantiate and call method in one go.  Below illustrates the difference and their usage:
```javascript
// instantiate with deep options that don't overwrite at the roots
$("#element").defaultPluginName({
  option: value, 
  option2: {
    opt1: val1,
    opt2: val2
    // default opt3 defined in your plugin will still be as defined in plugin
  }
});

// instantiate if needed and call function with multiple arguments
$("#element").defaultPluginName('callMeWithShortcut', [arg1, arg2, arg3]); // will call callMeWithShortcut(arg1, arg2, arg3)

// instantiate if needed and call function with single argument
$("#element").defaultPluginName('callMeWithShortcut', singleArgument); // will call callMeWithShortcut(singleArgument)
```

## Usage

1. Include jQuery:

	```html
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="jquery_plugin_boilerplate.js"></script>
	```

3. Instantiate the plugin:

	```javascript
	$("#element").defaultPluginName({
		propertyName: "a custom value"
	});
	```

4. Instantiate the plugin without options (if needed) AND call your function:

	```javascript
	$("#element").defaultPluginName('callMeWithShortcut', ['test1', {abc:123}, false]);
	```
