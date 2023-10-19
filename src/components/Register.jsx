import { NavLink } from "react-router-dom";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        let photoUrl = e.target.photo.value;}
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
                            {/* {error && <p className="text-sm mb-7 text-red-500">⚠  {error}</p>} */}
                            {/* <button className="w-full bg-black hover:bg-slate-700 font-semibold rounded-full px-4 py-2  pt-3 shadow text-white" >{loading ? <span className="loading loading-dots loading-xs"></span>


                                : 'Sign Up'}</button> */}
                        </form>
                        <p>Or sign up with  <button className="hover:border rounded-full hover:transform hover:bg-slate-100  hover:px-2 py-1 ">Google</button></p>
                        <NavLink to='/login'><button className=" mt-4 text-black">Aready have an account? Login</button></NavLink>
                    
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;