import React, { Component } from "react";
import api from "../services/api";
import {
    Container,
    Header,
    FilmImage,
    FilmName,
    FilmContainer,
    TaglineText,
    TitleContainer,
    SubtitleFilmPage,
    TitleText
} from "../../styles/styles.js";
import Details from "../components/Details.js";
import { Text } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";

export default class Film extends Component {
    state = {
        detalhes: {},
    };

    async componentDidMount() {
        const { route } = this.props;
        const { film } = route.params;

        let response;
        if (film.media_type == 'tv') {
            response = await api.get(`/tv/${film.id}`)
        } else {
            response = await api.get(`/movie/${film.id}`)
        }
        this.setState({
            detalhes: response.data
        });
    }

    render() {
        const { route } = this.props;
        const { film } = route.params;
        const { detalhes } = this.state;

        if (!detalhes || Object.keys(detalhes).length === 0) {
            return <Container><Text>Carregando...</Text></Container>;
        }

        const palavras = film.name.split(" ");

        let tituloPrincipal = ""
        let ultimaPalavra

        if (palavras.length >= 4) {
            tituloPrincipal = palavras.slice(0, -1).join(" ");

            ultimaPalavra = palavras[palavras.length - 1];
            if (ultimaPalavra.length == 1) {
                tituloPrincipal = film.name
                ultimaPalavra = undefined
            }
        } else {
            tituloPrincipal = film.name
        }

        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <FilmContainer>
                    <Header>
                        {ultimaPalavra ? (
                            <TitleContainer>
                                <SubtitleFilmPage>{tituloPrincipal}</SubtitleFilmPage>
                                <TitleText>{ultimaPalavra}</TitleText>
                            </TitleContainer>
                        ) : (
                            <FilmName>{film.name}</FilmName>
                        )}
                        <FilmImage source={{ uri: film.image }} />
                    </Header>

                    <TaglineText>
                        {detalhes.tagline}
                    </TaglineText>
                    <Details
                        genres={detalhes.genres}
                        date={detalhes.first_air_date || detalhes.release_date}
                        productionCompanies={detalhes.production_companies}
                        vote_average={detalhes.vote_average}
                    />
         
                </FilmContainer>
            </ScrollView>
        );
    }
}
