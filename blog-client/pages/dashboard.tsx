// pages/dashboard.tsx
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { jwtDecode } from 'jwt-decode';
import styles from '../styles/Dashboard.module.css';
import { DecodedToken } from '@/types/Auth';
import { Post } from '@/types/Post';
import Card from '@/components/Card';
import { toast } from 'react-toastify';
const Dashboard = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState<Post[]>([]);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, []);

    const handlePost = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const token = localStorage.getItem('token');
        if(!token){
            toast.error("Not Authorized!!");
            return ;
        }

        try{
            await axios.post('http://localhost:3000/posts', { title, content }, {
            headers: { Authorization: `Bearer ${token}` }
            });
            fetchPosts();
            toast.success("Posted Successfully !!");

        }catch(e:any){
            toast.error("Server Error !!")
        }
        
    };

    const fetchPosts = async () => {
        const token = localStorage.getItem('token');
        if (token) {

            const { userId } = jwtDecode<DecodedToken>(token);
            const res = await axios.get(`http://localhost:3000/posts?author=${userId}`);
            let posts: Post[] = res.data;
            setPosts(posts);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>

            <form className={styles.form} onSubmit={(e) => handlePost(e)}>
                <input  type="text" required className={styles.input} value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                <textarea className={styles.input} rows={6} required value={content} onChange={e => setContent(e.target.value)} placeholder="Content"  />
                <div className={styles.flex}>
                    <button className={styles.button} type='submit'>Post</button>

                </div>

            </form>

            <ul className={styles.postList}>
                {posts.map((post,key) => (
                    <Card post={post} key={key} />
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
