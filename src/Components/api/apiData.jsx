export const loginUser = async (credentials) => {

  const users = [
    {
      username: "ibrar",
      password: "123456",
      name: "Ibrar Iqbal",
      email: "ibrar@gmail.com",
    },
    {
      username: "ahmad",
      password: "123456",
      name: "AhmadIqbal",
      email: "ahmad@gmail.com",
    },
    {
      username: "Basit",
      password: "123456",
      name: "Basit Iqbal",
      email: "basit@gmail.com",
    },

  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(
        (u) => u.username === credentials.username && u.password === credentials.password
      );

      if (user) {
        const token = "fake-jwt-token-1234567890"; 
        resolve({ token, user }); 
      } else {
        reject({ message: "Invalid Credentials!" }); 
      }
    }, 500);
  });
};
