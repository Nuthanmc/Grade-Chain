import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContactUs = () => {
  const [agreed, setAgreed] = useState(false)

  return (
    // contact us section
    <div className=" flex justify-center min-w-full">
      <motion.div className="antialiased flex bg-gray-900 w-fit rounded-md p-4 m-5" >
        <motion.div className="flex w-fit min-h-fit justify-center iteam-center ">
          <div className="flex flex-col space-y-6 w—full max—w-4xl p—8 rounded—xl shadow—lg text-white md:flex-row md:space-x-6 md:space-y">
            <div className="flex flex-col justify-between">
              <div className=" ">
                <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
                <h1 className='font-bold tracking-wide text-3xl'>Get In Touch</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="flex flex-col space-y-6 mt-6 ">
                <div className="inline-flex space-x-4 items-center">
                  <ion-icon name="call" class=" text-xl"></ion-icon>
                  <span>+91 86987 93479</span>
                </div>
                <div className="inline-flex space-x-4 items-center">
                  <ion-icon name="mail" class="text-xl"></ion-icon>
                  <span>certi-block@gmail.com</span>
                </div>
                <div className="inline-flex space-x-4 items-center">
                  <ion-icon name="location" class="text-xl"></ion-icon>
                  <span>Pune</span>
                </div>
              </div>
              <div className='flex space-x-4 text-xl my-6 '>
                <a href=""><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
                <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
                <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
              </div>
            </div>
            <div>
              {/* form */}
              <form className="flex flex-col space-y-6" action="" method="POST">
                <div className="flex flex-col space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold">Name</label>
                  <input type="text" name="name" id="name" placeholder="Your Name" className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold">Company</label>
                  <input type="email" name="email" id="email" placeholder="Your Company name" className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold">Email</label>
                  <input type="email" name="email" id="email" placeholder="name@mail.com" className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none" />
                </div>

                <div className="flex flex-col space-y-1">
                  <label htmlFor="email" className="text-sm font-semibold">Phone Number</label>
                  <input type="email" name="email" id="email" placeholder="+91 01234 5678" className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="flex flex-col space-y-1">
                  <label htmlFor="message" className="text-sm font-semibold">Message</label>
                  <textarea name="message" id="message" placeholder="Your Message" rows="4" className="px-4 py-2 rounded-lg bg-gray-800 border focus:border-blue-500 focus:outline-none"></textarea>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" name="agreement" id="agreement" checked={agreed} onChange={() => setAgreed(!agreed)} className="rounded border-gray-300 focus:ring-blue-500 h-4 w-4 text-blue-600" />
                  <label htmlFor="agreement" className="text-sm">I agree to the <span className="underline">privacy policy</span></label>
                </div>
                <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
                  <button type="submit" className="bg-blue-600 py-2 px-6 rounded-lg text-white text-sm tracking-wide hover:bg-blue-500 transition ease-in-out duration-300">Submit</button>
                  <p className="text-sm text-gray-400 pb-4">We usually respond within 24 hours</p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>

  )
}

export default ContactUs
