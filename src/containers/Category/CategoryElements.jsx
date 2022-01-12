import styled from "styled-components";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'


export const CategoryCarouselContainer = styled.div`
  display: flex;
  margin: 46px 0;
  width: 100%;
  overflow-x: scroll;
  scroll-behavior: smooth;

  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const CategoryButtonWrapper = styled.div`
  display: none;

  @media screen and (min-width: 800px){
    float: right;
    display: flex;
    justify-content: space-between;
    width: 250px;
    margin-bottom: 2vw;
  }
`

export const CategoryIconArrowLeft = styled(IoIosArrowDropleftCircle)`
  font-size: 40px;
  margin-right: 5px;
`

export const CategoryIconArrowRight = styled(IoIosArrowDroprightCircle)`
  font-size: 40px;
  margin-left: 5px;
`