import { useContext } from "react"
import Mycontext from "../context"

const Details = () => {
    const {formdata}:any= useContext(Mycontext)
    return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h2>Name: {formdata.name} </h2>
        <h2>Username: {formdata.email} </h2>
        <h2>Password: {formdata.password} </h2>
        <h2>ConfirmPassword: {formdata.confirm_password} </h2>
        <h2>Number: {formdata.number} </h2>

    </div>
  )
}

export default Details