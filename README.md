# jquery-plugin-boilerplate
Slightly modified version of jquery-boilerplate.  This version makes your life easier by allowing direct calling of plugin functions with arguments.  It also allows for recursive options/settings extension whereas the original will overwrite your multidimensional settings.

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


### A jump-start for jQuery plugins development (original description)

So, you've tried your hand at writing jQuery plugins and you're comfortable putting together something that probably works. Awesome! Thing is, you think there might be better ways you could be writing them - you've seen them done a number of different ways in the wild, but aren't really sure what the differences between these patterns are or how to get started with them.

This project won't seek to provide a perfect solution to every possible pattern, but will attempt to cover a simple template for beginners and above. By using a basic defaults object, simple constructor for assigning the element to work with and extending options with defaults and a lightweight wrapper around the constructor to avoid issues with multiple instantiations.

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
