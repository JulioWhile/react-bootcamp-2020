export const user = {
  id: '1234',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export const login = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        resolve(user);
      } else {
        reject(new Error('User or Password Invalid'));
      }
    }, 1000);
  });
};
