import React from 'react'
import Contact from './Contact'

import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Contact",
  };

const contact = () => {
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default contact
