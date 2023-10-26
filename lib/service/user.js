export function login ({username, password}) {
   return  fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            username,
            password
        })
    })
        .then(res => {
            if (!res.ok) {
                console.log(res)
                throw new Error('Usuario y/o contraseña incorrecta')
            }

            return res.json()
        })
        .catch(e=>e)
}


export function register ({
    usernmae,
    lastname,
    email,
    password
}){
    return fetch('https://fakestoreapi.com/users',{
        method:"POST",
        body:JSON.stringify(
            {
                email,
                username,
                password,
                name:{
                    firstname,
                    lastname
                }
            }
        )
})
.then(res=>res.json())
.then(res=>json)
.catch(e=>e)
}