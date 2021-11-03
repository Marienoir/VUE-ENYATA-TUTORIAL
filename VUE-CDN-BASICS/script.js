const app = new Vue({
    el: "#app",
    data:{
        formData:{
            name: "",
            email:""
        },
        tableData:[]
    },
    methods:{
        submit(){
            console.log(this.formData);
            console.log(this.tableData)
            this.tableData.push({...this.formData})
        }
    }
    // data:{
    //     products: [
    //         {
    //             name: 'T-shirts',
    //             quantity: 0
    //         },
    //         {
    //             name: 'Tops',
    //             quantity: 3
    //         },
    //         {
    //             name: 'Shirts',
    //             quantity: 3
    //         },
    //         {
    //             name: 'Sneakers',
    //             quantity: 9
    //         }
    //     ]
    // },
    // computed: {
    //     totalProducts(){
    //         return this.products.reduce((sum, product ) =>{
    //             return sum + product.quantity
    //         }, 0)
    //     }
    // }
})