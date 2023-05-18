let curUser 

const getUsers = () => {
  return fetch('https://what-s-cookin-starter-kit.herokuapp.com/api/v1/users')
  .then((res) => {
    return res.json()
  })
  .then((data)=> {
    // console.log(data)
    return data
  })
}

export {getUsers}