import { useEffect, useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();    

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        
        .finally(() => setIsLoading(false));
        
    }

    // observe user state change
    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, user => {
          if (user) {
              setUser(user);
          }
          else {
            setUser({})
          }
          setIsLoading(false);
      });
      return () => unsubscribe;
  }, []);

    const signout = () => {
      setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => setIsLoading(false));
    }




    return {
        user,        
        signInWithGoogle,
        error,
        signout,
        isLoading,
        setError
    }
        
    
};

export default useFirebase;