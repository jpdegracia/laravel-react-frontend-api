import { useContext, useState } from "react"
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Create() {

    const navigate = useNavigate()
    const {token} = useContext(AppContext)
    const [formData, setFormData] = useState({
        title: "",
        body: "",
    });

    const [errors, setErrors] = useState({})

    async function handleCreate(e){
        e.preventDefault();

        const res = await fetch('api/posts', {
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.errors) {
            setErrors(data.errors)
        } else 
            navigate('/');
        
    }

    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-6 mt-6">Create a Task:</h1>

            <form 
                onSubmit={handleCreate} 
                className="card"
            >
                {/* Title Input */}
                <div>
                    <input 
                        type="text" 
                        placeholder="Post Task..." 
                        value={formData.title}
                        onChange={e => setFormData({...formData, title: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title[0]}</p>}   
                </div>

                {/* Description Textarea */}
                <div>
                    <textarea 
                        rows="6" 
                        placeholder="Post Description..." 
                        value={formData.body}
                        onChange={e => setFormData({...formData, body: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.body && <p className="text-red-500 text-sm mt-1">{errors.body[0]}</p>}
                </div>

                {/* Submit Button */}
                <button 
                    className="w-full bg-blue-600 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-700 transition"
                >
                    Create
                </button>
            </form>
        </>
    );
}