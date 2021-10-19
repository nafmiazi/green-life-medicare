import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile} from "firebase/auth";
import {useState, useEffect} from 'react';   
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'; 

initializeAuthentication();

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();
    // Regular Sign In
    const handleRegistration = e => {
        e.preventDefault();
        
        if(password.length < 6){
          setError('**Password must be at least 6 characters');
          return;
        }
    
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setError('**Password must contain atleast 2 upper case');
          return;
        }
    
        isLogin ? processLogin() : registerNewUser();
      }
    
      const processLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          console.log(result.user)
          setError('');
        })
        .catch((error) => {
          setError(error.message);
        });
      }
    
      const registerNewUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setError('');
          verifyEmail();
          setUserName();
        })
        .catch((error) => {
          setError(error.message);
        });
      }
    
      const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name})
        .then(() => {})
      }
      
      const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {});
      }
    
      const handleEmailChange = e => {
        setEmail(e.target.value);
      }
      
      const handlePasswordChange = e => {
        setPassword(e.target.value);
      }
    
      const handleNameChange = e => {
        setName(e.target.value);
      }
    
      const toggleLogin = e => {
        setIsLogin(e.target.checked);
      }
    
      const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {})
      }


    // Google Sign In
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

       return signInWithPopup(auth, googleProvider);
    }

    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user);
            }
            else{
                setUsers({});
            } 
            setIsLoading(false);
          });
          return () => unsubscribed
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUsers({});
        }).finally( () => setIsLoading(false))
    }

    return {users, setUsers, signInUsingGoogle, logOut, isLoading, error, handleRegistration, handleEmailChange, handlePasswordChange, handleNameChange, toggleLogin, handleResetPassword, isLogin}
}

export default useFirebase;