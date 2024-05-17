
# Personal Blog using Next.js and Typescript , Express.js




## Set-Up

Clone the repo

```bash
 git clone https://github.com/shayan-cyber/AttackCapitalTask.git
```
Navigation
```bash
  cd AttackCapitalTask
```


### Backend
Navigation
```bash
    cd api
```

Install
```bash
    npm i
```
#### Make .env file and declare

```bash
    PORT=3000
    JWT_SECRET=your_jwt_secret
    MONGO_URI=your_mongoDB_URL

```
Run
```bash
    node app.js
```



### Frontend

Navigation
```bash
    cd blog-client
```

Install
```bash
    npm i
```


#### Make .env file and declare

```bash
    NEXT_PUBLIC_SERVER_URL=http://localhost:3000/
```

Run
```bash
    npm run dev
```






## Features

- Signup(JWT)
- Login(JWT)
- Adding Blog Post
- Responsive





## Decisions


* For Authentication purpose JWT is used for extra layer of security
* MongoDB(NoSQL) is used with mongoose for ORM.
* Server Side Rendering is used for Home page because we need better SEO functionality in home page and we need updated data.
* CSS modules are used for styling for code readability and useablity.
* React Toastify is used for showing notification for each form submission

## Deployed Links


### Client
- [https://attack-capital-task-client.vercel.app/](https://attack-capital-task-client.vercel.app/)


#### Pages
```bash
    /
    /login
    /signup
    /dashboard
```

### API

- [https://attack-capital-task.vercel.app/posts](https://attack-capital-task.vercel.app/posts)


#### Endpoints

```bash
    POST /signup.
    POST /login
    POST /post
    GET /posts
    GET /posts?author=userId

```
## Authors

- [@shayan-cyber](https://github.com/shayan-cyber)
- [debroyshayan@gmail.com]()

