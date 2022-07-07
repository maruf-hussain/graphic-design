import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";


const UseFirebase = () => {
const [user, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);

const auth = getAuth();

const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

signInWithPopup(auth, googleProvider)
.then(result => {
    setUser(result.user);
})
.finally(() => setIsLoading(false));

}

useEffect( () => {
 const unsubscribe = onAuthStateChanged(auth, user => {
    if (user){
        setUser(user);
    }
    else{
        setUser({})
    }
    setIsLoading(false);
 }); 
 return () => unsubscribe; 
}, [])


const logOut = (user) => {
    setIsLoading(true);
    signOut(auth)
    .then(() => {})
    .finally(() => setIsLoading(false) )
}

return {
user, 
isLoading,
signInUsingGoogle,
logOut

}
}

export default UseFirebase;