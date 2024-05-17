// pages/signup.tsx
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Signup.module.css';
import { toast } from 'react-toastify';
import Link from 'next/link';
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      await axios.post(process.env.NEXT_PUBLIC_SERVER_URL+'auth/signup', { email, password });
      router.push('/login');
    }catch(e:any){
      if(e?.response && e?.response.status === 400){
        toast.error(e?.response?.data?.message);
      }else{
        toast.error("Server Error")
      }
    }
    
  };

  return (
    <div>
      <form onSubmit={(e) => handleSignup(e)}>
        <div className={styles.container}>
          <h1>Sign Up</h1>
          <input type="email" required className={styles.input} value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
          <input type="password" required className={styles.input} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button className={styles.button} type='submit'>Sign Up</button>
        </div>
      </form>
      <Link href={'/login'}>
        <h1 className={styles.link}>Already Signed up?</h1>
      </Link>
    </div>
  );
};

export default Signup;
