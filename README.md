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

1. Copy and add the [component file](https://github.com/gustav-evensson/notice.js/blob/main/vue/noticeComponent.vue) to your vue project.
2. Import the component to your parent file.
3. To call the createNotice() function from the parent the best way is to create a ref on the child component and then point to the function on that ref.
```
<notice-component ref="noticeContainer" class="dark bottom-center"/>
<button @click="$refs.noticeContainer.createNotice('test from parent', 'alert', 'persisted')">Create Notice</button>
```
You can also access the ref from the script part of the parent file if you want to do something more thn just send th notification.
```
const noticeContainer = ref()

function sendNotice(){
  // Do before notification
  noticeContainer.value.createNotice('test from parent', 'alert', 'persisted')
}
```
