//link database
const database = firebase.database();
const messagesRef = database.ref("message");

new Vue({
    el:"#comment",
    data:{
        messageText:'heloooooooooooooool',
        messages:[],
        name:'kong'
    },
    methods:{
        storeMessage:function(){
            messagesRef.push({text:this.messageText, name:this.name})//ตรงนี้จะทำให้เราแก้databaseได้
            this.messageText=''
        }
    },
    create(){

    }
})