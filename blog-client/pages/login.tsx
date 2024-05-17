// pages/login.tsx
import { FormEvent, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{

      const res = await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + 'auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      router.push('/dashboard');
    }catch(e:any){
      if(e?.response && e?.response.status === 401){
        toast.error("Invalid Credentials");
      }else{
        toast.error("Server Error")
      }
      
      
    }
  };

  return (
    <div >

      <form onSubmit={(e) => handleLogin(e)}>
        <div className={styles.container}>
          <h1>Login</h1>
          <input required type="email" className={styles.input} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input required type="password" className={styles.input} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button type='submit' className={styles.button}>Login</button>
        </div>

      </form>
      <Link href={'/signup'}>
        <h1 className={styles.link}>Not Registered?</h1>
      </Link>
    </div>
  );
};

export default Login;
