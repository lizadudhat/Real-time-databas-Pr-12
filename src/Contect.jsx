import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './contect.css'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from './dbConfige'


const Contect = () => {

    const db = getDatabase(app)

    const [name,setName] = useState("")
    const [company,setCompany] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMassge] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        let userId = Math.floor(Math.random()*10000)
        set(ref(db,"contect"+userId),{
            name : name,
            company : company,
            email : email,
            phone : phone,
            message : message
        })

        setName("")
        setCompany("")
        setEmail("")
        setPhone("")
        setMassge("")
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-5 mx-auto">
                    <form onSubmit={handleSubmit} >
            <div className="d-flex ">
            <div className="ms-5 me-5">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold"> Name</label>
              <input type="name" className="form-control  mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold"> Company</label>
              <input type="text" className="form-control" id="exampleInputPassword1" 
              onChange={(e) => setCompany(e.target.value)} value={company} 
              />
            </div> 
            </div>

            <div className="d-flex ">
            <div className="ms-5 me-5">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">         Email address</label>
              <input type="email" className="form-control mb-3 " id="exampleInputEmail1" aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)} value={email} 
              />
            </div>
            <div className="">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">            Phone Number</label>
              <input type="text" className="form-control" id="exampleInputPassword1" 
                onChange={(e) => setPhone(e.target.value)} value={phone} 
              />
            </div> 
            </div>

            <div className="ms-5 me-5">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">              Message</label>
              <textarea className='rounded' id="w3review" name="w3review" rows={2} cols={48} defaultValue={""} 
                onChange={(e) => setMassge(e.target.value)} value={message} 
              />
            </div>
            <button type="submit" className="btn btn-success  mt-4 fw-bold mx-auto d-block">  Submit</button>
          </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contect
