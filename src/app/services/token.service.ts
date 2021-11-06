import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs, query, where, setDoc, doc } from 'firebase/firestore/lite';
import { Get_conection } from '../firebase/fireConfig';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  async getTokens() {
    const taskCol = collection(Get_conection(), 'tokens');
    const taskSnapshot = await getDocs(taskCol);
    const taskList = taskSnapshot.docs.map(doc => doc.data());
    // console.log(taskList);
    return taskList;
  }

  async getTokenByActive(active:boolean) {

    const tokCol = collection(Get_conection(), 'tokens');
    let token = {};
    await getDocs(query(tokCol, where("active", "==", active)))
          .then((data) =>{
            data.forEach((doc) => {
              token = {
                id:doc.id,
                active: doc.data().active,
                creation_dt: doc.data().creation_dt,
                token: doc.data().token
              };
            });
          })
          .catch(err => console.log(err));
    
    return token;
  }

  // async getActiveToken() {
  //   const taskCol = collection(Get_conection(), 'tokens');
  //   const taskSnapshot = await getDocs(taskCol);
  //   const taskList = taskSnapshot.docs.map(doc => doc.data());
  //   // console.log(taskList);
  //   return taskList;
  // }

  async setToken(token:any) {
    
    this.getTokenByActive(true)
        .then((data) => {
          data['token']

          const tokenRef = collection(Get_conection(), "tokens");
          setDoc(doc(tokenRef, data['id']), {
            token: data['token'],
            creation_dt: data['creation_dt'],
            active: false
          });
        })
        .catch(err => console.log(err));

    const docRef = await addDoc(collection(Get_conection(), 'tokens'), {
      token: token.token,
      creation_dt: new Date,
      active: true
    });

    return docRef.id
  }
}
