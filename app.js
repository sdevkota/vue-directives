var app = new Vue({
    el: "#app",
    data: {
        fontSize:1,
   title:"Directives",
   isError:true,
   show:true,
   link:"https://012.vuejs.org/api/directives.html",
   linkHTML: "<a href='https://www.google.com'>Go to google.com</a>"
    },
    methods:{
        changeTitle:function(){
         this.title="End of the line"
         return this.title;
        },
        increaseFont:function(){
            this.fontSize=this.fontSize*1.2;
        },
        decreaseFont:function(){
            this.fontSize=this.fontSize/1.2;
        },
        toggleClass:function(){
          this.isError=!this.isError;
        }
    }
});