import React from 'react'
import { Container } from '../../assets/styles'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import Title from '../../components/Title'
import { TrendingCardContainer } from './TrendingElements'

const trendingData = [
  {
    title: 'Pizza Paperoni',
    type: 'Pizza',
    rate: 4,
    icon: require('../../assets/images/pizza-paperoni.png')
  },
  {
    title: 'Pizza Meat',
    type: 'Pizza',
    rate: 3,
    icon: require('../../assets/images/pizza-meat.png')
  },
  {
    title: 'Doner Kebab',
    type: 'Kebab',
    rate: 5,
    icon: require('../../assets/images/doner-kebab.png')
  },
  {
    title: 'Salmon Roll',
    type: 'Salmon',
    rate: 4,
    icon: require('../../assets/images/salmon-roll.png')
  },
  {
    title: 'Cupcake Choco',
    type: 'Cupcake',
    rate: 5,
    icon: require('../../assets/images/cupcake-choco.png')
  },
  {
    title: 'Doughnut Milk',
    type: 'Doughnut',
    rate: 4,
    icon: require('../../assets/images/doughnut-milk.png')
  },
  {
    title: 'Doughnut Unicorn',
    type: 'Doughnut',
    rate: 4,
    icon: require('../../assets/images/doughnut-unicorn.png')
  },
  {
    title: 'Kathi Kebab',
    type: 'Kebab',
    rate: 4,
    icon: require('../../assets/images/kathi-kebab.png')
  },
]

const Trending = () => {

  const renderTrendingCard = () => (
    trendingData.map((item, index) => (
      <Card key={index} item={item} isTrending={true}/>
    ))
  )

  return (
    <Container>
      <Title titleText="Browse Our Trending" subTitle="Receipt" />
      <TrendingCardContainer>
        {renderTrendingCard()}
      </TrendingCardContainer>
      <Button center>All Receipt</Button>
    </Container>
  )
}

export default Trending
