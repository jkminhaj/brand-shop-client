import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
    const {loading , createUser,connectGoogle} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        let photoUrl = e.target.photo.value;

        if(!photoUrl){
            photoUrl = 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='
        }

         // sweet toast
         const errorNotify = (e) => toast(e,
            {
                icon: '⚠',
                style: {
                    borderRadius: '50px',
                    background: 'white',
                    color: 'red',
                },
            } );
        
    
        // password validation
        if(password.length<5){
            errorNotify('Password is less than 6 characters')
            return
        } else if (!/[A-Z]/.test(password)) {
            errorNotify('Password should have at least 1 capital letter');
            return
        } else if (!/[^A-Za-z0-9]/.test(password)) {
            errorNotify('Password should have at least 1 special character');
            return
        }
        

        createUser(email , password)

        .then(res=>{
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photoUrl
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
              
            console.log(res.user)})
        .catch(err=>console.log(err))
    }

    // connect with google 
    const handleGoogle = () =>{
        connectGoogle().then(res=>{
            console.log(res.user)
        }).catch(err=>{
            console.log(err)
        })
    }



    return (
        <div className="flex  flex-col items-center md:gap-32 w-11/12 md:w-full mx-auto">
            <div className='flex justify-center mt-11 md:mt-28'>
                <div>
                    <div className="bg-white px-9 py-5 rounded-md shadow-sm border space-y-5">
                        <h1 className="text-center text-2xl font-semibold mb-7">Register new account</h1>
                        <form onSubmit={handleRegister}>
                            <input required name="name" type="text" className="w-full md:w-60  py-1 mb-5 outline-none border-b-2 " placeholder="User name" /><br />
                            <input name="photo" type="text" className="w-full md:w-60  py-1 mb-5 outline-none border-b-2 " placeholder="Photo URL  (optional)" /><br />
                            <input required name="email" type="email" className="w-full md:w-60  py-1 mb-5 outline-none border-b-2 " placeholder="Enter email" /><br />
                            <input required name="password" className=" mb-4 border-b-2 py-1 outline-none w-full" type="password" placeholder="Password" /><br />
                            
                            <button className="w-full bg-black hover:bg-slate-700 font-semibold rounded-full px-4 py-2  pt-3 shadow text-white" >{loading ? <span className="loading loading-dots loading-xs"></span>


                                : 'Sign Up'}</button>
                        </form>
                        <p>Or sign up with  <button onClick={handleGoogle} className="hover:border rounded-full hover:transform hover:bg-slate-100  hover:px-2 py-1 ">Google</button></p>
                        <NavLink to='/login'><button className=" mt-4 text-black">Aready have an account? Login</button></NavLink>
                        <Toaster></Toaster>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;