##  从简单的开始，慢慢来。

#### 如何匹配渲染区域和组件，渲染区域是如何确定的 也就是说<router-view>如何实现的？                
#### 如何匹配 hash字符串 和 component ，如果存在子路由的时候怎么办？ 把每一条路径都遍历一遍，每一条路径对应单独地一个组件，或者利用'/'搞事情         
#### 如果用户手动更改 hash 后面字符串的值，怎么实时地更新视图？ getter和setter  或者直接用 Vue.observable(obj)      
#### 如果router-view里面套了router-view 怎么办？ 也就是如何在vue组件里面挂载多个不同的router-view？  因此不要注册全局的router-view , 而是用Vue.extend创建Vue子类，挂载到以当前路由路径为id的dom节点上  可是这样依旧不行，因为平级别的路由肯定会更换，这就要保证router-view组件是需要做到响应式的，但是这时候如果出现了子路由，那么就会造成父级别的router-view和子级别的router-view状态相同，甚至有可能造成递归  这时候我突然想到 vue 是如何实现组件复用的？也许会得到启发。vue每个.vue文件相当于一个构造函数，所以每个组件实例根本不会互相影响。
#### this.$router 和 this.$route 是怎么实现的？首先判断这是路由的工作还是Vue自己的工作，如果是this.$router的话让Vue比较好实现，this.$route根本就不是vue的属性，this是当前组件的引用，所以每个组件实例都有自己的一个this.$route
