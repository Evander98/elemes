import React, { useRef } from "react";
import { Container } from "../../assets/styles";
import { Button } from "../../components/Button";
import Card from "../../components/Card";
import Title from "../../components/Title";
import {
  CategoryButtonWrapper,
  CategoryCarouselContainer,
  CategoryIconArrowLeft,
  CategoryIconArrowRight,
} from "./CategoryElements";

const cardData = [
  {
    icon: require("../../assets/images/cupcake.png"),
    title: "Cupcake",
    amount: 22,
  },
  {
    icon: require("../../assets/images/pizza.png"),
    title: "Pizza",
    amount: 25,
  },
  {
    icon: require("../../assets/images/kebab.png"),
    title: "Kebab",
    amount: 12,
  },
  {
    icon: require("../../assets/images/salmon.png"),
    title: "Salmon",
    amount: 22,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
  {
    icon: require("../../assets/images/doughnut.png"),
    title: "Doughnut",
    amount: 11,
  },
];

const Category = () => {
  const carouselRef = useRef();

  const renderCategory = () =>
    cardData.map((item, index) => <Card key={index} item={item} />);

  const scroll = (scrollOffSet) => {
    carouselRef.current.scrollLeft += scrollOffSet;
  };

  return (
    <Container fitContent>
      <Title titleText="Browse Our Category" subTitle="Receipt" />
      <CategoryCarouselContainer ref={carouselRef}>
        {renderCategory()}
      </CategoryCarouselContainer>
      <CategoryButtonWrapper>
        <Button onClick={() => scroll(-744)}>
          <CategoryIconArrowLeft />
          PREV
        </Button>
        <Button onClick={() => scroll(744)}>
          NEXT
          <CategoryIconArrowRight/>
          </Button>
      </CategoryButtonWrapper>
    </Container>
  );
};

export default Category;
