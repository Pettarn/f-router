#### router-view 如何知道它该渲染哪个组件？假设hash值是两层，第一层的router-view：hash.indexOf遍历一遍第一层的路由表, 只要值不等于 0 那么就排除掉，然后为该router-view设置 children表 ; 第二层的router-view：它能拿到父组件的 children表 , 直接hash.indexOf遍历一遍 children表 筛选出来一个数组matched<Array>，如果 hash.indexOf(它的父组件的path + 遍历matched) === -1 那么就淘汰


localhost:8080/#/a/b

`/a`
<router-view> 
    <child>
        `b`
        <router-view></router-view>
    </child>
</router-view>
