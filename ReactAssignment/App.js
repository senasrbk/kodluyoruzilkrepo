import axios from "axios";

 const getUsers = (id) =>{
   return new Promise((resolve, reject) =>{
     const {data: users} = axios(`https://jsonplaceholder.typicode.com/users/${id}`);
     resolve(users);
   });
 };

 const getPosts = (id) => {

     return new Promise((resolve, reject) =>{
       const {data: posts} = axios(`https://jsonplaceholder.typicode.com/posts/${id}`);
       resolve(posts);
     });

 };

 async function getData(id) {
     try {
         let users = await getUsers(id);
         let userPosts = await getPosts(id);

        users.posts = userPosts;
      
        return users;
        
       } catch (error) {
         console.log(error);
       }
 }
console.log(getData(1));
export default App;

