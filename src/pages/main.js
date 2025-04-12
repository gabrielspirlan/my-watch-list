import React, { Component } from "react";
import { Keyboard, ActivityIndicator } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FilmCard from "../components/FilmCard";
import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    Film,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText,
} from "../../styles/styles.js";
export default class Main extends Component {
    state = {
        newFilm: "",
        films: [],
        loading: false,
    };

    async componentDidMount() {
        const films = await AsyncStorage.getItem("films");
        if (films) {
            this.setState({ films: JSON.parse(films) });
        }
    }

    componentDidUpdate(_, prevState) {
        const { films } = this.state;
        if (prevState.films !== films) {
            AsyncStorage.setItem("films", JSON.stringify(films));
        }
    }

    handleAddFilm = async () => {
        try {
            const { films, newFilm } = this.state;
            this.setState({ loading: true });
            let responses = await api.get(`/search/multi?query=${newFilm}&include_adult=false&language=en-US&page=1/`);
            responses = responses.data.results

            const response = responses.find((film) => {
                const filmName = film.name || film.title;
                return filmName.toLowerCase() === newFilm.toLowerCase();
            });

            if (films.find((film) => film.id === response.id)) {
                alert("Filme/Série já adicionado!");
                this.setState({ loading: false });
                return;
            }

            const data = {
                id: response.id,
                name: response.name ? response.name : response.title,
                image: `https://image.tmdb.org/t/p/original${response.backdrop_path || response.poster_path}`,
                poster: `https://image.tmdb.org/t/p/original${response.poster_path || response.backdrop_path}`,
                media_type: response.media_type
            };

            this.setState({
                films: [...films, data],
                newFilm: "",
                loading: false,
            });
            Keyboard.dismiss();
        } catch (error) {
            alert("Filme/Série não encontrado!");
            this.setState({ loading: false });
        }
    };

    render() {
        const { films, newFilm, loading } = this.state;
        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Adicionar filme/série"
                        value={newFilm}
                        onChangeText={(text) => this.setState({ newFilm: text })}
                        returnKeyType="send"
                        onSubmitEditing={this.handleAddFilm}
                    />
                    <SubmitButton loading={loading} onPress={this.handleAddFilm}>
                        {loading ? (
                            <ActivityIndicator color="#fff" />
                        ) : (
                            <Icon name="add" size={20} color="#fff" />
                        )}
                    </SubmitButton>
                </Form>
                <List
                    showsVerticalScrollIndicator={false}
                    data={films}
                    keyExtractor={(film) => film.id}
                    renderItem={({ item }) => (
                        <FilmCard film={item}
                            verDetalhes={() => {
                                this.props.navigation.navigate("Film", { film: item });
                              }}
                            
                            excluir={() => {
                                console.log("Excluir")
                                this.setState({
                                    films: this.state.films.filter((film) => film.id !== item.id)
                                })
                            }}
                        />
                    )}
                />
            </Container>
        );
    }
}
