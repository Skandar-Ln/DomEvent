# DomEvent
便利地注册dom事件，如document上的事件 (visibilitychange)

```
npm install dom-lisener --save
```

```js
import {oneVisible} from 'dom-lisener' // 注意这里的拼写本身就是错的

oneVisible(() => console.log('once visible'));
```
