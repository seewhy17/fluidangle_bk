// import { swal } from 'vue-swal'

// export default function ({ $axios, store }) {
//   // const { token } = store.state.auth
//   // const $swal = swal
//   // $axios.onRequest(config => {
//   //   // ...
//   //   // Refresh JWT token if needed
//   //   // ...
//   //   // if (token) {
//   //   //   // eslint-disable-next-line dot-notation
//   //   //   config.headers['Authorization'] = `Bearer ${token}`
//   //   // }
//   //   return config
//   // })
//   // $axios.onResponse(response => {
//   //   const { msg, payload } = response.data
//   //   // eslint-disable-next-line
//   //   console.log({ msg, payload, response })
//   // })
//   $axios.onError(err => {
//     // eslint-disable-next-line
//     console.log({ err })
//     if (err.request) {
//       // $swal({
//       //   text: 'Attempt failed. Please check your internet',
//       //   icon: 'error'
//       // })
//     }
//     if (err.response) {
//       // const { msg } = err.response.data
//       // if (msg) {
//       //   $swal({
//       //     text: msg,
//       //     icon: 'error'
//       //   })
//       // }
//       console.log('response', err.response)
//     }
//   })
// }
