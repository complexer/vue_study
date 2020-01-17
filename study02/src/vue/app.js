//申明组件
//组件化必须div包裹
//组件化data为函数
const App = {
    template:`
    <div>
        <p>{{message}}</p>
        <button @click="button_click">wocao</button>
    </div>
    `,
    data(){
        return {
            message: "hello"
        }
    },
    methods:{
        button_click(){
            alert("wocao")
        }
    }
}
