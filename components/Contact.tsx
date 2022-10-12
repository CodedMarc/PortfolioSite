import { Box, Button, Input, Stack, Textarea } from "@chakra-ui/react";
import { useState } from "react"
import styles from '../styles/Contact.module.scss';
const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const isEmail = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (name.length > 0 && isEmail && message.length > 0) return setSubmitted(true);
    if (name.length === 0 || message.length === 0 || email.length === 0) return setError('Missing Input!');
    if (!isEmail) return setError('Invalid Email');
  }
  return (
    <section id='Contact'>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contactContainer}>
        <div className={styles.contactText}>
          <h1>Let&apos;s get in touch!</h1>
          <h2>
            If you have a project in mind, job opportunity, or just want to chat, 
            send me a message!
          </h2>
        </div>
        <div className={styles.contactForm}>
        <h1 className={styles.submittedForm} style={submitted ? {display: 'block'} : {display: 'none'}}>Submitted!</h1>
        <form className={styles.form} style={submitted ? {display: 'none'} : {display: 'block'}} name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <Stack spacing={4}>
              <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Full Name"
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
        </div>
      </div>
    </section>
  )
}

export default Contact