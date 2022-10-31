import React from 'react'

import { Btn } from "./styles";

const Buttons = ({buttonColor, label, onClick}) => {
  return (
    <>
      <Btn buttonColor={buttonColor} onClick={onClick}>
        {label}
      </Btn>
    </>
  )
}

export { Buttons }