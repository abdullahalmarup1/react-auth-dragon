import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../src/firebase/firebase.config";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null)

const auth = getAuth(app);

const FirebaseAuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true)

    /* Create User */

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    /* Sign in */

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    /* Logout */

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('here is the currentUser', currentUser);
            setUser(currentUser);
            setLoading(false);

        })
        return () => {
            unSubscribe();
            setLoading(true);
        }
    }, [])

    const authInfo =
    {
        user,
        loading,
        createUser,
        signIn,
        logOut,

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default FirebaseAuthProvider;


FirebaseAuthProvider.propTypes = {
    children: PropTypes.node
}