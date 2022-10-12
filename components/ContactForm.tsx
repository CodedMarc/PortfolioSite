import { useState }from 'react'
import styles from '../styles/Contact.module.scss';
import { Button, Input, Stack, Textarea } from "@chakra-ui/react";
const ContactForm = (props: any) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const {submitted, func} = props;
  // Encoder from Netlify Docs
  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const myForm = e.target;
    const formData = new FormData(myForm);
    const isEmail = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (name.length > 0 && isEmail && message.length > 0) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": e.target.getAttribute("name")
        }),
      })
      .then(() => func(true))
      .catch((error) => alert(error));
    };
    if (name.length === 0 || message.length === 0 || email.length === 0) return setError('Missing Input!');
    if (!isEmail) return setError('Invalid Email');
  }
  return (
    <form className={styles.form} style={submitted ? {display: 'none'} : {display: 'block'}} name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <Stack spacing={4}>
        <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="FullName"
        required
          placeholder="Full Name"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
        />
        <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        required
        name="Email"
          placeholder="Email Address"
          bg={'gray.100'}
          border={0}
          color={'gray.500'}
          _placeholder={{
            color: 'gray.500',
          }}
        />
        <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="Message" 
        required
        placeholder="Enter Message" 
        bg='gray.100' 
        border={0} 
        color={'gray.500'}
        _placeholder={{color: 'gray.500'}}/>
        <Button type="submit" onClick={handleSubmit} fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
          Submit
        </Button>
        <p style={{color: 'yellow', textAlign: 'center'}} className={styles.errorMessage}>{error}</p>
      </Stack>
      </form>
  )
}

export default ContactForm