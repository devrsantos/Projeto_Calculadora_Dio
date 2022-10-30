import React from 'react'

import { Btn } from "./styles";

const Buttons = ({buttonColor, label, className}) => {
  return (
    <>
      <Btn buttonColor={buttonColor} className={className}>
        {label}
      </Btn>
    </>
  )
}

export { Buttons }