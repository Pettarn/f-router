##  从简单的开始，慢慢来,先搭一个一层的路由。
                
#### 如何匹配 hash字符串 和 component ，如果存在子路由的时候怎么办？ 把每一条路径都遍历一遍，每一条路径对应单独地一个组件，或者利用'/'搞事情  暂时先不考虑这个了，先写一层路由，跑起来再说。       
#### 如果用户手动更改 hash 后面字符串的值，怎么实时地更新视图？ getter和setter  或者直接用 Vue.observable(obj)      

    router-view实现思路：
    拿到当前的 hash 值
    和route表匹配，得到对应的组件
    渲染
    (问题：需要访问this.$router和this.$route)        

    vm.$router实现思路:
    install的时候register进去,但是$router只有在router实例生成之后才会产生beforeCreate


