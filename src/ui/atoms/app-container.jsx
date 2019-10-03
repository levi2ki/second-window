import React, { memo } from 'react'
import styled from 'styled-components'

const AppContainerView = styled.div`
  width: 100%;
  max-width: 860px;
  margin: auto;
  background-color: #eee;
`
export const AppContainer = memo(AppContainerView)
