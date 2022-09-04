## 介绍 [🔗](https://cn.vuejs.org/api/sfc-script-setup.html#defineexpose)

- **组合式 API**  [setup](https://staging-cn.vuejs.org/api/sfc-script-setup.html)

  1. ```vue
     <script setup>
     	defineExpose({  a,  b })//暴露的对象
     </script>
     /* OR */
     <script>
     	export default { setup() {return {/*暴露对象*/} }//通过this访问setup暴露的对象
     </script>
     ```

  2. 完美取代`mixin`。



## 响应式

#### reactive() shallowReactive()

- `reactive()`**默认是深层响应式**(深代理);

- 浅响应使用 `shallowReactive()`

- 当你更改响应式状态后，DOM 也会自动更新. 

  (在更新周期的 “下个时机” 以确保无论你进行了多少次声明更改，每个组件都只需要更新一次。)

- `nextTick(func)`更新后的dom;

```javascript
import { reactive } from 'vue'
const state = reactive({ ... })//reactive() 返回一个原始对象的 Proxy
```

 `reactive()` [的局限性](https://staging-cn.vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive)

> 仅对引用类型有效

**`ref()` 定义响应式变量**

- `ref()` 使我们能创造一种**任意值的 “引用”** 并能够不丢失响应性地随意传递
-  ref 在作为组件模板顶层 property 被访问时，它们会被自动“解包(解构)”
- 在深层响应式对象内时，会发生 ref 解包;

```javascript
import { ref } from 'vue'
const count = ref(0);//{ value: 0 }
count.value = { xx: 0 };//{ value: { xx: 0 } }
```

- 响应性语法糖 `$ref()`
  1. 无需手动添加value
  2. **处于实验性阶段**

- reactive()入参一个代理会返回它自己(直接返回)

## [生命周期](https://cn.vuejs.org/api/composition-api-lifecycle.html)



## 自定义指令

```vue
<script setup>
// 在模板中注册 v-focus
const vFocus = {
    //el当前元素
  mounted: (el) => el.focus()
}
//OR
export default {
  directives: {
    // 在模板中启用 v-focus
    focus
  }
}
</script>
```

### [指令钩子](https://staging-cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks)

> 除了 `el` 外，你应该将这些参数都视为只读的。若你需要在不同的钩子间共享信息，推荐方法是通过元素的 [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) attribute。

**`简化形式`**

```javascript
//v-xxx 
// 这会在 `mounted` 和 `updated` 时都调用
app.directive('xxx', (/* 钩子参数 */) => {})
```

### el

```javascript
vnode.data.on.<someEvent>.apply(vnode.context,[参数...]);//触发并代理
el.event.appear.handler = () => {//修改代理
    vnode._vei.onAppear();//触发事件//vue3
    vnode.data.on.appear();//触发事件//vue2
}
```

------

> TIP

- 当所需功能只能通过直接 DOM 操作来实现时，才应该使用自定义指令。
- 自定义指令的参数也可以是动态的`v-example:[arg]="value"`
- 组件上使用自定义指令时，它会始终应用于组件的根节点

## [插件](https://staging-cn.vuejs.org/guide/reusability/plugins.html#introduction)

- use()必须提供 `install` 方法
- 该方法需要在调用 `new Vue()` 之前被调用。

```javascript
import { createApp } from 'vue'
const app = createApp({})
const Plugin = {
    install(app, options){}
}
app.use(Plugin, options)//options 对应上面的 options
```

## 路由

- [简单路由示例](https://staging-cn.vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch)

## [异步组件](https://staging-cn.vuejs.org/guide/components/async.html#async-components)

- 拆分应用为更小的块，并仅在需要时再从服务器加载相关组件

## $refs

- 视图渲染后赋值

```javascript
const content = ref<Element>();
//<div ref="content" />
//unref(content) -> isRef(val) ? val.value : val
```

## provide / inject

```javascript
provide(/* 注入名 */ 'message', /* 值 */ 'hello!')//提供
inject('message')//注入
```

## Props

```javascript
const post = { id: 1,title: 'Vue' }
<BlogPost v-bind="post" /> //等价于 ↓
//<BlogPost :id="post.id" :title="post.title" />
```

```typescript
type prop = {
  id?: string[]
}
const props = defineProps<prop>()
//prop属性
        prop: {
            type: [String, Number,...], //类型
            default: 0,//默认值
            required: true,//必填?
            validator: function(value) {//验证器
                return value >= 0//返回 false 的时抛出错误 
            }
        }
```

## $emit

```typescript
const emit = defineEmits(['inFocus', 'xx'])
emit('xx')
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
emit('change',1)
```

```javascript
const emit = defineEmits({ xx(payload){ /*返回值bool 判断验证是否通过*/ } })
```

> [配合 `v-model` 使用](https://cn.vuejs.org/guide/components/events.html#usage-with-v-model)

## slot

```javascript
//A.vue
<div>
    <slot name="header" xx="1"></slot>
</div>
//B.vue
<A v-slot="attr">
  <template v-slot:header>//#name // #[name] //#[name]="attr"
    <div>{{attr.xx}}</div>
  </template>
</A>
```

## setup函数

- ctx 上下文对象

```javascript
export default {
  emits: ['submit'],
  setup(props, ctx) {
    ctx.emit('submit')
  }
}
```

## 定义全局对象

```typescript
//最好在入口文件内
window.$foo = (...params) => { return '1' }
//declare.d.ts
declare function foo(params: number, d: string): string
//使用
$foo(1,'1')
```

> OR: provide / inject
>
> ...

## script setup

```js
 defineExpose({  a,  b })//导出对象
```

