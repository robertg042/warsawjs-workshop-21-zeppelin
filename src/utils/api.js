import Net from './Net';

export default {
  user: {
    login: ({username, password}) => Net.post({
      url: 'auth',
      data: {
        username,
        password
      }
    })
  },
  posts: {
    fetchAll: () => Net.get({
      url: 'posts'
    })
  }
}
