

import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup} from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

export const UserContext = createContext();

const UserContextProvider = ({children}) => {

   const {user, setUser} = useState();
   const {logged, setLogged} = useState(false)

   const provider = new GoogleAuthProvider();

    const signup = (email,password) => {

        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{

            //signedIN
            const user = userCredential.user;
            console.log("Usuario generado correctamente")

        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.errorMessage;
            console.log(errorMessage)
        })

    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUser(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
      }

      const logout = () => {

        signOut(auth).then(()=> {
          alert("Goodbye...");
        }).catch ((error)=>{
          alert(error.message);
        })
    }

    const googleAuth = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(credential, token, user)
          setUser(user);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          alert(errorMessage);
          console.log(error);
          // ...
        });
      }
  
      useEffect (
          () => {
              onAuthStateChanged(auth, (user) => {
                  if (user) {
                    setUser(user);
                    setLogged(true);
                    // ...
                  } else {
                    // User is signed out
                    // ...
                    setLogged(false);
                  }
                });
          },
          []
      )




   
    return(
        <UserContext.Provider value = {{
            user,logged,login,logout,signup,googleAuth

        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;