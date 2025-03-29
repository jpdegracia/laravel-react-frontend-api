import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Home() {

    const [posts, setPosts] = useState([])
    async function getPosts() {
        const res = await fetch('/api/posts');
        const data = await res.json();

        if (res.ok) {
            setPosts(data)
        };
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <h1 className="title text-3xl font-bold mb-6">Tasks:</h1>

            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} className="card-home">
                        <div className="mb-4 flex items-start justify-between"> 
                            <div>
                                <h2 className="font-bold text-xl text-gray-900">{post.title}</h2>
                                <small className="text-xs text-gray-500">
                                    Created by {post.user.name} on{" "}
                                    {new Date(post.created_at).toLocaleString()}
                                </small>
                            </div>
                            <Link to={`posts/${post.id}`} className="bg-blue-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-blue-700 transition">
                                Read More
                            </Link>
                        </div>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-600 text-center">There are no tasks available!</p>
            )}
        </div>
    );
}