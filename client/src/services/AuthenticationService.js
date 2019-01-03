import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)

    //
    // Corresponds to
    //  

    // app.post('/register', (req, res) => {
    //   // response
    // })

  }
}

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })

// How this works: ------------------------------------------------------------

// imports initialized axios
// returns an object that has a register() function