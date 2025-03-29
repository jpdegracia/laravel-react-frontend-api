import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

export default function Login() {

    const {setToken} = useContext(AppContext)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const [errors, setErrors] = useState({})
    
    async function handleLogin(e) {
        e.preventDefault();
        const res = await fetch(`api/login`, {
            method: "post",
            body: JSON.stringify(formData),
        });

        const data = await res.json();
    

        if (data.errors) {
            setErrors(data.errors)
        } else
            localStorage.setItem('token', data.token);
            setToken(data.token);
            navigate('/');
    
    }


    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-6 mt-6">Login:</h1>  

            <form 
                onSubmit={handleLogin} 
                className="card"
            >
                {/* Email Input */}
                <div>  
                    <input 
                        type="text" 
                        placeholder="Email..."
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div> 

                {/* Password Input */}
                <div className="relative">
                    <input 
                        type="password" 
                        placeholder="Password..."
                        value={formData.password} 
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Login Button */}
                <button 
                    className="w-full bg-blue-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </>
    );
}