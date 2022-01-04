const app = Vue.createApp({
    //template: "<h1>Hello {{firstName}}!</h1>", 
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@gmail.com",
            gender: "male",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        async getUser() {
            const res = await fetch("https://randomuser.me/api");
            //const data = await res.json();
            //data will return an array of objects but we are interested in the results object so deconstruct
            const {results} = await res.json();
            //console.log(results);
            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.picture = results[0].picture.large
        }
        //this will refer to the data object in all methods
    }
});
//The template can be defined here or in the "app" component in the html page itself

app.mount("#app");