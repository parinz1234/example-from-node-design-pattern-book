module.exports = (db, tokenSecret) => {
  const users = db.sublevel('users');
  const authService = {};

  authService.login = (username, password, callback) => {
    users.get(username, function(err, user) {
      // ... 
    }); 
  }; 
  
  authService.checkToken = (token, callback) => {
    // ... 
    users.get(userData.username, function(err, user) { 
      // ... 
    }); 
  };

  return authService
}
