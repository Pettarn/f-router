##  从简单的开始，慢慢来。

#### 如何匹配渲染区域和组件，渲染区域是如何确定的 也就是说<router-view>如何实现的？                
#### 如何匹配 hash字符串 和 component ，如果存在子路由的时候怎么办？ 把每一条路径都遍历一遍，每一条路径对应单独地一个组件，或者利用'/'搞事情         
#### 如果用户手动更改 hash 后面字符串的值，怎么实时地更新视图？ getter和setter  或者直接用 Vue.observable(obj)      
#### 如果router-view里面套了router-view 怎么办？ 也就是如何在vue组件里面挂载多个不同的router-view？  因此不要注册全局的router-view , 而是用Vue.extend创建Vue子类，挂载到以当前路由路径为id的dom节点上
#### this.$router 和 this.$route 是怎么实现的？首先判断这是路由的工作还是Vue自己的工作，如果是this.$router的话让Vue比较好实现，如果是this.$route的话，把它写成router实例原型的一个方法，然后vue去获取这个方法返回的当前路由的所有信息，包括path、component等等
