import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("sent successfully")

    emailjs
      .sendForm('service_lzwslet', 'template_ca3eueg', form.current, {
        publicKey: 'jN1b9J2pNRa6kQrDs',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
    <div className='flex bg-gray-100'>
        <div>
          <iframe className='w-[800px] h-[600px] mL-6 p-8' src={map}></iframe>
        </div>
        <div className='mL-6 p-8'>
        <form ref={form} onSubmit={sendEmail}>
  <div>
  <input className='p-2 border-2 border-black mr-12 mb-6' placeholder='Enter Your Name' type="text" name="from_name" id="name" />
  <input className='p-2 border-2 border-black' placeholder='Enter Your Email' type="email" name="from_email" id="email"/>
  </div>
  <div>
  <textarea className='p-2 border-2 border-black w-[449px] h-[150px]' placeholder='Type Your Message' name="message" id="message"/>
  </div>
  <div>
  <input className='bg-black text-white py-2 px-6 text-lg hover:opacity-85 cursor-pointer rounded-sm w-40 my-8' type="submit" value="Send" name='message' />
  </div>
</form>
        </div>
    </div>
    <div className='text-center'>
    <h1 className='tracking-wider text-3xl text-gray-500 my-4'>
      FOLLOW US ON SOCIAL MEDIA
    </h1>
    <div className='inline-block mx-4 h-7'><a className='' href="#" class="fa fa-facebook"></a></div>
    <div className='inline-block mx-4 h-7'><a  className='' href="#" class="fa fa-twitter"></a></div>
    <div className='inline-block mx-4 h-7'><a className='' href="#" class="fa fa-youtube"></a></div>
    <div className='inline-block mx-4 h-7'><a  className='' href="#" class="fa fa-instagram"></a></div>
    <div className='inline-block mx-4 h-7 mb-8'><a className='' href="#" class="fa fa-pinterest"></a></div>
  </div>

</>
    
  );
};

export default Contact;