// import { useForm, SubmitHandler } from "react-hook-form"



function ContactForm() {

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form >
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test"  />


      {/* include validation with required or other standard HTML validation rules */}
      <input  />
      {/* errors will return when field validation fails  */}


      <input type="submit" />
    </form>
  )
}

export default ContactForm