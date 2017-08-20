# jquery-plugin-boilerplate
Slightly modified version of [jquery-boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate).  This version makes your life easier by allowing direct calling of plugin functions with arguments and recursive options/settings extension whereas the original will overwrite your multidimensional settings.

Also removed all the coffeescript compile and minification bloat.  Its a boilerplate not a plugin.  Copy, paste, and modify!

### Explanation of the differences

In the original to call your function, you had to have the plugin object saved to variable OR you needed to get it by calling 
```js
$(element).data('plugin_YourPluginName').yourFunciton(arg1,arg2,arg3)
```
This version allows for this short-hand instead without any measurable performance issue.
```javascript
// instantiate with deep options that don't overwrite at the roots
$(element).defaultPluginName({
  option: value, 
  option2: {
    opt1: val1,
    opt2: val2
    // default opt3 defined in your plugin will still be as defined in plugin
  }
});

// instantiate if needed and call function with multiple arguments
$(element).defaultPluginName('method', [arg1, arg2, arg3]); // will call yourOtherFunction(arg1, arg2, arg3)

// instantiate if needed and call function with single argument
$(element).defaultPluginName('method', singleArgument); // will call yourOtherFunction(singleArgument)
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

3. Call the plugin:

	```javascript
	$("#element").defaultPluginName({
		propertyName: "a custom value"
	});
	```
