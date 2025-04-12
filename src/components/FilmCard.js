import React from "react";

import {
    CardContainer,
    TitleContainer,
    Subtitle,
    MainTitle,
    SingleTitle,
    Poster,
    DetailButton,
    DeleteButton,
    ButtonText,
  } from "../../styles/styles";
  

export default function FilmCard({ film, verDetalhes, excluir }) {
  const palavras = film.name.split(" ");

  let tituloPrincipal = "";
  let ultimaPalavra;

  if (palavras.length >= 2) {
    tituloPrincipal = palavras.slice(0, -1).join(" ");
    ultimaPalavra = palavras[palavras.length - 1];

    if (ultimaPalavra.length === 1) {
      tituloPrincipal = film.name;
      ultimaPalavra = undefined;
    }
  } else {
    tituloPrincipal = film.name;
  }

  return (
    <CardContainer>
      {ultimaPalavra ? (
        <TitleContainer>
          <Subtitle>{tituloPrincipal}</Subtitle>
          <MainTitle>{ultimaPalavra}</MainTitle>
        </TitleContainer>
      ) : (
        <SingleTitle>{tituloPrincipal}</SingleTitle>
      )}

      <Poster source={{ uri: film.image }} resizeMode="cover" />

      <DetailButton onPress={verDetalhes}>
        <ButtonText>Ver detalhes</ButtonText>
      </DetailButton>

      <DeleteButton onPress={excluir}>
        <ButtonText>Excluir</ButtonText>
      </DeleteButton>
    </CardContainer>
  );
}
