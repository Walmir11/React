import React from "react";
import { FiThumbsUp as FiThumbsUpIcon } from "react-icons/fi";

import { CardContainer, ImageBackgoround, Content, UserInfo, UserPicture, PostInfo, HasInfo } from "./styles";

const FiThumbsUp = FiThumbsUpIcon as any;

const Card = () => {
  return (
    <CardContainer>
      <ImageBackgoround src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5fTvBqEpyLmHNzZVx0YlKR5wOxFoLRAtZxA&s" alt="Imagem de fundo do card" />
      <Content>
        <UserInfo>
          <UserPicture src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0-4qmD27Rn4XkKEFX-DP33MIi-3ZOVdT1zQ&s" />
          <div>
            <h4>Walmir Neto</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto de Site Institucional</h4>
          <p>Projeto desenvolvido para a empresa ACME com o objetivo de apresentar seus serviços de forma clara e objetiva na web...<strong>Saiba mais</strong></p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };