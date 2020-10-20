
function User(firstName, lastName, status) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.status = status;
};
const newUser = (User) => {
  return new Promise((resolve) => {
    const userLocation = "location";
    setTimeout(() => {
      resolve(userLocation)
    }, 1000);
  })
  .then((result) => {
    User.location = result;
    return new Promise((resolve) => {
      const getUserEmail = () => {
        switch (User.status) {
          case "Admin": 
            return `${User.firstName}${User.lastName}@admin.com`;
          case "User":
            return `${User.firstName}${User.lastName}@user.com`;
          case "Guest":
            return `${User.firstName}${User.lastName}@guest.com`;
        }
      };
      setTimeout(() => {
        resolve(getUserEmail())
        },4000)
    });
  })
  .then((result) => {
    User.email = result;
    return new Promise((resolve) => {
    const getUserId = () => {
      let id = 0; 
        switch (User.status) {
          case "Admin":
            return id = 3;
          case "User":
            return id = 2; 
          case "Guest":
            return id = 1;   
      }
    };
    setTimeout(() => {
      resolve(getUserId())
        },2000)  
    });
  })
  .then((result) => {
    User.id = result;
    const userGroup = () => {
      const group = [];
      const groupErr = () => {
        throw new Error("group array too large")
      };
      const statusErr = () => {
        throw new Error("You are not an admin, the group is blocked")
      };
      group.length = User.id*3;
        if (User.status!=="Admin") { 
          return statusErr()
        }
        if (group.length>12) { 
          return groupErr()
        }
        return group;
    };
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(userGroup())
        }, 1000)
    });
  })
  .then((result) => {
    User.group = result;
  })
  .catch((err) => {
    console.error(err)
  })
};