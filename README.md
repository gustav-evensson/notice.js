# Notice.js

Notice.js is a very simple notification library built with JS and CSS. It provides a callable createNotice() function where you with arguments can customize the natification to some degree.

## Getting started

### Using the vanilla JS version

1. Copy the [notice](https://github.com/gustav-evensson/notice.js/tree/main/notice) folder containing the notice.js and notice.css files.

> Download the notice.tar.gz file <a href="https://github.com/gustav-evensson/notice.js/blob/main/notice.tar.gz?raw=true" download>here</a>

2. Import the files in your HTML file.
3. Add a div with the id of "notice-container".(Optionally add classes to customize position and styling, see [customizations](https://github.com/gustav-evensson/notice.js#customization)).

```html
<div id="notice-container" class="top-center"></div>
```

4. Now you can use the createNotice() function anywhere in your code to send a notification.
```html
<button onclick="createNotice('Passwords does not match', 'error')">Create notice</button>
```

### Using the Vue.js component

1. Copy and add the [component file](https://github.com/gustav-evensson/notice.js/blob/main/vue/noticeComponent.vue) to your vue project.

> Download the vue.tar.gz file <a href="https://github.com/gustav-evensson/notice.js/blob/main/vue.tar.gz?raw=true" download>here</a>

2. Import the component to your parent file.
3. To call the createNotice() function from the parent the best way is to create a ref on the child component and then point to the function on that ref.
```vue
<script setup>
import noticeComponent from './components/noticeComponent.vue';

import { ref } from 'vue' 
const noticeContainer = ref()

function sendNotice(){
  noticeContainer.value.createNotice('Hello from parent', 'error', 5000)
}

</script>

<template>
  <div class="home">
    <notice-component ref="noticeContainer" class="top-right slide-left"/>
    <button @click="sendNotice()">Create Notice Function</button>
  </div>
</template>
```

## Customization

### With class attribute

You can customize the notification using the class attribute on the container div.

```html
<div id="notice-container" class="..."></div>
```

If you do not add any class the notifications will show in the top left corner on the viewport. It will also have the light theme and slightly rounded edges. 

To change the position of the notifications you have 6 options.

1. top-left (standard position)
2. top-middle
3. top-right
4. bottom-left
5. bottom-middle
6. bottom-right

To chanfe the way the notification slides in you can add the classes:

1. slide-left
2. slide-right
3. slide-up
4. slide-down

There is also the options of adding the classes *dark* and *rounded*;

The dark class gives the notifications a dark theme

The rounded class gives the notification completely rounded edges.

### With function arguments

The function createNotice() can take 3 arguments. 

```js
createNotice(Arg1, Arg2, Arg3)
```

1. The first argument is the text content of the notification, what the notification should say.
2. The second argument is the type of notification. There are 4 options wich changes the icon of the notification. This argument defaults to alert if nothing else is provided. The options are:
   * error
   * warning
   * success
   * alert
3. The third argument is the duration, it defaults to 3000 wich is the value in ms. It can take a number value or the string value of *"persisted"*. The persisted value adds a close button to the notification and the notification will then stay untill the button is clicked.


```js
createNotice("Hello from NoticeJS", "alert") // Defaults to 3000ms
```
```js
createNotice("Hello from NoticeJS", "alert", 2000) // Duration of 2000ms
```
```js
createNotice("Hello from NoticeJS", "alert", "persisted") // Duration persisted
```

### CSS variables

If you want more comtomization you can with the CSS varaibles change the color and also the wall gap of the notification.

In vanillaJS the varaibles are located in a seperate [varaibles.css](https://github.com/gustav-evensson/notice.js/blob/main/notice/variables.css) file.

Where as in the vue component the variables are located in the style tag of the component.
