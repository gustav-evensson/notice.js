# Notice.js

Notice.js is a very simple notification library built with JS and CSS. It provides a callable function where you with arguments can customize the natification to some degree.

## Getting started

### Using the vanilla JS version

1. Copy the [notice](https://github.com/gustav-evensson/notice.js/tree/main/notice) folder containing the notice.js and notice.css files. 
2. Import the files in your HTML file.
3. Add a div with the id of "notice-container".(Optionally add classes to customize position and styling, see customizations).

```
<div id="notice-container" class="top-center"></div>
```

4. Now you can use the createNotice() function anywhere in your code to send a notification.
```
<button onclick="createNotice('Passwords does not match', 'error')">Create notice</button>
```

### Using the Vue.js component

1. Copy and add the component file to your vue project.
2. 
