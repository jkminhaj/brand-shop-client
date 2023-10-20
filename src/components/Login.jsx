import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Login = () => {
    const {logIn , loading } = useContext(AuthContext);
    const [error , setError] = useState('');
    const handleLogIn = e => {
        e.preventDefault();  
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password).then(res=>{
            console.log('logged in successfull',res.user)
        }).catch(err=>{
            console.log('login failed' , err)
        })
    }
    return (
        <div className="flex flex-col items-center md:gap-32">
            <div className='flex justify-center mt-16 md:mt-28'>
            <div>
                <div className="bg-white px-9 py-5 rounded-md border shadow-sm space-y-5">
                    <h1 className="text-center text-2xl font-semibold mb-7">USER LOGIN</h1>
                    <form onSubmit={handleLogIn}>
                        <input name="email" type="email" required className="w-full md:w-60  py-1 mb-5 outline-none border-b-2 " placeholder="Enter email" /><br />
                        <input name="password" required className=" mb-4 border-b-2 py-1 outline-none w-full" type="password" placeholder="Password" /><br />
                        {error?<p className="text-sm mb-7 text-red-500">⚠  {error}</p>:<p className="text-sm mb-7 text-gray-500"><Link>Forget password?</Link></p>}
                        <button className="w-full bg-black hover:bg-slate-700 font-semibold rounded-full px-4 py-2 shadow text-white" >{loading ? <span className="loading loading-dots loading-xs"></span>


                            : 'Login'}</button>
                    </form>
                    <p className="text-sm">Login with <button className="hover:border rounded-full hover:transform hover:bg-slate-100  hover:px-2 py-1 " href="" >Google</button></p>
                    <Link to='/register'><button className=" mt-4 text-black">Register new accout</button></Link>
                </div>

            </div>
        </div>

        </div>
    );
};

export default Login;