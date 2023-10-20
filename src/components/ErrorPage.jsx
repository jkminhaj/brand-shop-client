import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='flex justify-center md:mt-7'>
            <div className='flex flex-col items-center gap-8'>
                <img src='https://cdn.dribbble.com/users/1129101/screenshots/3513987/404.gif' alt="" />
                <Link className='text-lg border border-gray-600 rounded-full px-4 py-2 hover:text-white hover:bg-gray-600' to='/'>Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;