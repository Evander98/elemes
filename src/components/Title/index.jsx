import React from 'react'
import { TitleContainer, TitleText } from './TitleElements'

const Title = ({titleText, subTitle}) => {
  return (
    <TitleContainer>
      <TitleText>{titleText}</TitleText>
      <TitleText sub>{subTitle}</TitleText>
    </TitleContainer>
  )
}

export default Title
