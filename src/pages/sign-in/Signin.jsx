import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Wrapper from '../../components/shared/Wrapper';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isUser, setIsUser] = useState(true); // Default as a user
    const [isManager, setIsManager] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleUserChange = () => {
        setIsUser(!isUser);
        setIsManager(false);
    };

    const handleManagerChange = () => {
        setIsManager(!isManager);
        setIsUser(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className='  justify-center flex items-center bg-[#EFF6F9] w-full p-5 md:p-20'>
                    <div className='max-w-screen-xl mx-auto mb-10 md:mb-0 mt-32 md:mt-0'>
                        <div className='bg-white md:w-[1240px] w-[320px] p-5 md:p-10 shadow-xl '>
                            <form onSubmit={handleSubmit} className="">


                                <div className="mb-5 md:mb-12">
                                    <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="md:mb-12 md:flex-row flex-col flex gap-5 md:gap-0">
                                    <div className=" md:mr-2 w-full">
                                        <label className="block text-gray-700 text-[16px] font-bold mb-2" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    
                                </div>

                                {/* <div className="mb-5">
                                    <label className="block text-gray-700 text-[16px] font-bold md:mt-0 mt-5 mb-4">User Type</label>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="user"
                                            name="userType"
                                            checked={isUser}
                                            onChange={handleUserChange}
                                            className='w-[20px] h-[20px] rounded'
                                        />
                                        <label htmlFor="user" className="ml-2">Signin as a User</label>
                                    </div>
                                    <div className="flex items-center mt-3">
                                        <input
                                            type="checkbox"
                                            id="manager"
                                            name="userType"
                                            checked={isManager}
                                            onChange={handleManagerChange}
                                            className='w-[20px] h-[20px] rounded'
                                        />
                                        <label htmlFor="manager" className="ml-2">Signin as a Manager</label>
                                    </div>
                                </div> */}

                                <div className="text-center md:text-left mt-10 md:mt-10">
                                    <button
                                        className="w-[216px] h-[50px] text-[18px] md:text-[20px] font-[500] flex-shrink-0 rounded-md bg-[#012B6D] text-white hover:bg-blue-800 focus:outline-none focus:-outline"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                                <p className='text-gray-700 text-center mt-3 md:mt-0'>Don't have an account?  <Link to="/sign-up" className='hover:underline text-[#012B6D]'>Register here</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signin;
