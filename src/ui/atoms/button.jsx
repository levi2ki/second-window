import React, { memo } from 'react'
import styled from 'styled-components'

export const Button = memo(styled.button`
  background-color: blue;
  color: #fff;
  width: 172px;
  height: 67px;
  font-size: 14px;
  text-align: center;
  border-radius: 6px;
  border: 0;
  margin: 5px;
  outline: none;
  :hover {
    box-shadow: 1px 1px 3px black;
    cursor: pointer;
  }
`)
