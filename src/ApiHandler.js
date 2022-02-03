import {send, sendPromise, senPromise} from './utils';

export default class ApiHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getCatalog(onSuccess, onError) {
    sendPromise(`${this.apiUrl}/catalog`)
        .then(data=>onSuccess(data))
        .catch(err=>onError(err))
    //send(onError, onSuccess, `${this.apiUrl}/catalog`)
  }

  getCart(onSuccess, onError) {
    return sendPromise(`${this.apiUrl}/cart`)
      .then((data) => {
        return JSON.stringify(data)
      })
  }

  addToCart(onSuccess, onError, data) {
    fetch(`${this.apiUrl}/cart`,{
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
        .then(response=>response.json())
        .then(json=>onSuccess(json))
        .catch(err=>onError(err))
    //send(onError, onSuccess, `${this.apiUrl}/cart`, 'POST', JSON.stringify(data), {"Content-Type": "application/json"})
  }

  removeFromCart(onSuccess, onError, data) {
    fetch(`${this.apiUrl}/cart`,{
      method: 'DELETE',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify(data)
    })
        .then(response=>response.json())
        .then(json=>onSuccess(json))
        .catch(err=>onError(err))
    //send(onError, onSuccess, `${this.apiUrl}/cart`, 'DELETE', JSON.stringify(data), {"Content-Type": "application/json"})
  }

}
