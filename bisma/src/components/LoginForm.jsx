import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const validate = () => {
        const errors = {};

        if (!username.trim()) {
            errors.username = 'ERROR ON USERNAME | user status is inactive';
        }

        if (!password) {
            errors.password = 'ERROR ON PASSWORD | user status is inactive';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Simulate successful login and navigate to /dashboard
            navigate('/dashboard');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white border-2 border-gray-200 rounded-xl shadow-lg">
                <div className="w-full bg-bluef-100 rounded-t-xl py-5 px-8">
                    <h3 className="text-sm text-bluef-600">
                        Selamat Datang Di Aplikasi BISMA
                    </h3>
                    <h3 className="text-sm text-bluef-600">
                        Basis informasi penelitian dan pengabdian kepada masyarakat
                    </h3>
                </div>
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="w-full">
                        <div className="mb-4">
                            <label className="inter-semiBold text-sm pb-2 block">
                                Username
                            </label>
                            <input
                                type="text"
                                className={`text-sm p-2 w-full border rounded shadow focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Masukkan Username"
                            />
                            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="inter-semiBold text-sm pb-2 block">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className={`text-sm p-2 w-full border rounded shadow pr-10 focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Masukkan Password"
                                />
                                <div
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <FaEye className="h-5 w-5 text-gray-600" />
                                    ) : (
                                        <FaEyeSlash className="h-5 w-5 text-gray-600" />
                                    )}
                                </div>
                            </div>
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                className="mr-2"
                                
                            />
                            <label
                                htmlFor="rememberMe"
                                className="text-sm inter-semiBold"
                            >
                                Remember me
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="inter-semiBold text-lg text-center text-white bg-bluef-500 py-2 w-full rounded-xl shadow-lg hover:bg-bluef-200"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-xs text-neutral-900">
                    © 2024 LPPM SINUS
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
