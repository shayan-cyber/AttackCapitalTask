import React from 'react'
import styles from '../styles/components/Card.module.css'
import { Post } from '@/types/Post'
import ReactTimeAgo from 'react-time-ago'
function Card({ post }: { post: Post }) {
    return (
        <div>
            <div key={post.id} className={styles.card}>
                <h2 className='cardHeading'>{post.title}</h2>
                <p className='cardContent'>{post.content}</p>

                <span className={styles.time}><ReactTimeAgo date={new Date(post.createdAt)} locale="en-US"/></span>
            </div>
        </div>
    )
}

export default Card