
/**
Steps
1. Use the Array.prototype.some() method to check if any object in the registered users list has a matching username and password.
2. The some() method takes a function that checks if the given username and password match any object in the array.
3. Return true if a matching user is found; false otherwise.
 */


function validateUserCredentials(users, inputUsername, inputPassword) {
    return users.some(user => user.username === inputUsername && user.password === inputPassword);
    }
    
    // Example usage
    const registeredUsers = [
        { username: "user1", password: "password123" },
        { username: "user2", password: "secretword" },
        { username: "admin", password: "admin123" }
    ];
    const username = "user1";
    const password = "password123";
    console.log(validateUserCredentials(registeredUsers, username, password)); // Output: true
    

    
// another practice

const userList = [{username:"sunshine", password:"1234"},{username:"shine", password:"5678"}]


function login(userList, n, p) {
  for (let i=0; i<userList.length; i++){
    const user = userList[i];
//     console.log(user)
    if(user.username===n && user.password===p){
      return true;
    }
return false;
  }
}

console.log(login(userList, "sunshine", "1234"))
console.log(login(userList, "sunshine", "134"))