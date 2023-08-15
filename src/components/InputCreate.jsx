import React, { useState } from "react"
import Button from "./ui/Button"
import Card from "./ui/Card"


const InputCreate = () => {

// first variant
  // const [name,setName]=useState('')
  // const [password,setPassword]=useState('')
  // const [email,setEmail]=useState('')

// const nameChangeHandler=(e)=>{
//   setName(e.target.value)
// }

// const passwordChangeHandler=(e)=>{
//   setPassword(e.target.value)
// }
// const emailChangeHandler=(e)=>{
//   setEmail(e.target.value)
// }


// second variant 

  // const [name,setName]=useState('')
  // const [password,setPassword]=useState('')
  // const [email,setEmail]=useState('')

// const inputchangeHandler=(e)=>{
// const current=e.target.name
// if(current==='name'){
//   setName(e.target.value)
// }
// if(current==='password'){
//   setPassword(e.target.value)
// }
// if(current==='email'){
//   setEmail(e.target.value)
// }
// }



// // theird vatiant

// const [input,setInput]=useState({
//   name:'',
//   password:'',
//   email:''

// })

// const nameChangeHandler=(e)=>{
//   setInput({
//     ...input,
//     name:e.target.value
//   })
// }

// const passwordChangeHandler=(e)=>{
//   setInput({
//     ...input,
//     password:e.target.value
//   })
// }
// const emailChangeHandler=(e)=>{
//   setInput({
//     ...input,
//     email:e.target.value
//   })
// }


// // four variant
// const [input,setInput]=useState({
//   name:'',
//   password:'',
//   email:''

// })

// const nameChangeHandler=(e)=>{
//   setInput((prevState)=>{
//     return{
//       ...prevState,  
//       name:e.target.value
//     }
  
//   })
// }

// const passwordChangeHandler=(e)=>{
//   setInput((prevState)=>{
//     return{
//     ...prevState,
//     password:e.target.value
//     }
//   })
// }
// const emailChangeHandler=(e)=>{
//   setInput((prevState)=> {
//     return{
//     ...prevState,
//     email:e.target.value
//  } })
// }

// five variant
// const [input,setInput]=useState({
//   name:'',
//   password:'',
//   email:''

// })
// const inputchangeHandler=(e)=>{
// const current=e.target.name
// setInput( {
//       ...input,
//       [current]:e.target.value
//     })
// }


const sumbitAdd=(e)=>{
e.preventDefault()

setName('')
setPassword('')
setEmail('')
}
    return (
        <form>
            <Card>
                <form onSubmit={sumbitAdd}>
                  <input name="name" value={name} type="text" placeholder="ФИО" onChange={inputchangeHandler} />
                </form>
                <div>
                  <input name="password" value={password} type="password" placeholder="Password" onChange={inputchangeHandler} />
                </div>
                <div>
                  <input name="email" value={email} type="email" placeholder="Email" onChange={inputchangeHandler}/>
                </div>
                <Button type='submit'>Summit</Button>
            </Card>
        </form>
    )

}
export default InputCreate