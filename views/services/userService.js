

class UserService{

    constructor(){
   this.URI =  'http://localhost:3010/api/users';
    }

    async getUsers(){
        const response = await fetch(this.URI)
        const userss = await response.json()
        return userss;
    }
    async postUsers(user){
     const res = await fetch(this.URI, {
         method:'POST',
         body: user
     });
     const data = await res.json();
     console.log(data)

    }
   async deleteUser(userId){
     const res = await fetch(`${this.URI}/${userId}`, {
          headers:{
              'Content-Type': 'Application/json'
          },
          method: 'DELETE'

      })
     const data = await res.json();
     console.log(data)
    }
}

export default UserService;