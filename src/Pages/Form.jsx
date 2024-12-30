import { useState } from 'react'
import '../App.css'
function Form(){
  const defaultValues = {
    firstName : {
      id:'firstName',
      label :'First Name',
      type :'text',
      placeholder : 'Enter your first Name ',
      value : '',
      isError:false,
      errorMsg:'First Name is compulsory'
    },
    lastName : {
      id:'lastName',
      label :'Last Name',
      type :'text',
      placeholder : 'Enter your last Name ',
      value : '',
      isError:false,
      errorMsg:'Last Name is compulsory'
    },
    email : {
      id:'email',
      label :'Email',
      type :'email',
      placeholder : 'Enter your Email ',
      value : '',
      isError:false,
      errorMsg:'Email is compulsory'
    },
    password : {
      id:'password',
      label :'Password',
      type :'password',
      placeholder : 'Enter your Password ',
      value : '',
      isError:false,
      errorMsg:'Password is compulsory'
    },
    confirmPassword : {
      id:'confirmPassword',
      label :'Confirm Password',
      type :'password',
      placeholder : 'Confirm your Password ',
      value : '',
      isError:false,
      errorMsg:' Password dont match'
    }
  } 
  const [formData,setFormData] = useState(defaultValues)
  const [isPasswordMatch,setIsPasswordMatch] = useState(true)
  const handleInputChange = (e)=> {
     const key = e.target.id
     const value = e.target.value
    //   
     const copyFormData  = {...formData}
     copyFormData[key].value = value
     setFormData(copyFormData)
     isValidForm()
  }
  // console.log(formData)


 const passwordMatch = () => {
  const copyFormData = {...formData}
  const password = copyFormData['password'].value
  const confirmpassword = copyFormData['confirmPassword'].value
  if (password != confirmpassword){
    setIsPasswordMatch(false)
  }else {
    setIsPasswordMatch(true)
  }
 }


  const isValidForm = () => {
    const copyFormData  = {...formData}
    Object.keys(copyFormData)
    .forEach((key) => {
      const obj = copyFormData[key]
      // console.log(obj)
      obj.isError = !obj.value ? true : false
      passwordMatch()
    } )
    setFormData(copyFormData)
  }

  const handleFormSubmit = (e) => {
   e.preventDefault()
   isValidForm()
  }

  return (
    <>
     
     <div className="App" >
        <div className='container' >
                 <form onSubmit={handleFormSubmit} >
                   {
                    Object.keys(formData)
                    .map((key) => {
                      const {id,label,type,placeholder,value,isError,errorMsg} = formData[key]
                      return <div className='form-item' >
                            <label> {label} </label>
                            <input
                            onChange={handleInputChange}
                            id={id}
                            placeholder={placeholder}
                            type={type}
                            value={value}
                            className={
                              isError && 'error-border'
                            }
                            />
                            {
                              isError && <span className='error' > {errorMsg} </span>
                            }
                            {
                              key==='confirmPassword'  && !isPasswordMatch &&
                              <span className='error' >
                                      Password does not match
                              </span>
                            }
                      </div>
                    } )
                   }
                   <div className='form-item' >
                          <button> Submit </button>
                   </div>
                 </form>
        </div>
     </div>
    
    </>
  )
}
export default Form