import LogIn from "./LogIn"

async function LoginPost() {
    let res = await fetch('/data/login', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email: 'exempel@nodehilll.com',
            password: 'abc123'
        })
    })
    console.log(res)
    console.log("LoginPost got called")
}

/* 
email: 'exempel@nodehilll.com',
            password: 'abc123' 
email: props.email,
            password: props.pass
            */
export default LoginPost