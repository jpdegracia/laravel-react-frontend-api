import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";

export default function Show() {
    const { id } = useParams();
    const { user, token } = useContext(AppContext);
    const navigate = useNavigate();

    const [post, setPost] = useState(null);


    async function getPost() {
        const res = await fetch(`/api/posts/${id}`);
        const data = await res.json();

        if (res.ok) {
            setPost(data.post);
        };
    }

    async function handleDelete(e) {
        e.preventDefault();

        if (user && user.id === post.user_id) {      
        const res = await fetch(`/api/posts/${id}`, {
            method: 'delete',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

            const data = await res.json();
            if (res.ok) {
                navigate('/');
            }
        }
    }


    useEffect(() => {
            getPost();
        }, []);

        return (
            <>
                {post ? (
                    <div key={post.id} className="card-home">
                        <div className="mb-4 flex items-start justify-between"> 
                            <div>
                                <h2 className="font-bold text-2xl text-gray-900">{post.title}</h2>
                                <small className="text-xs text-gray-500">
                                    Created by {post.user.name} on{" "}
                                    {new Date(post.created_at).toLocaleString()}
                                </small>
                            </div>
                        </div>
    
                        <p className="text-gray-700">{post.body}</p>
    
                        {user && user.id === post.user_id && (
                            <div className="flex items-center justify-end gap-4 mt-4">
                                <Link 
                                    to={`/posts/update/${post.id}`} 
                                    className="bg-green-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-green-700 transition"
                                >
                                    Update
                                </Link>
    
                                <form onSubmit={handleDelete}>
                                    <button 
                                        className="bg-red-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-red-700 transition"
                                    >
                                        Delete
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                ) : (
                    <p className="text-gray-600 text-center text-lg font-semibold">Task Not Found!</p>
                )}
            </>
        );
}