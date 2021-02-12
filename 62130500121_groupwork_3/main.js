const app ={
    data(){
        return{
            pictures:[
                {path: './images/picture1.jpg', description:'Picture 1', heart: false},
                {path: './images/picture2.jpg', description:'Picture 2', heart: false},
                {path: './images/picture3.jpg', description:'Picture 3', heart: false}
            ]
        }
    },
    methods:{
        like(index){
            this.pictures[index].heart = !this.pictures[index].heart
        }
    },
    computed:{
        countPic(){
            return this.pictures.length
        }
    }
}

Vue.createApp(app).mount('#app')