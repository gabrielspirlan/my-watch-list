import {
    GenreText,
    DetailsContainer,
    GenreContainer,
    DateText,
    CompaniesContainer,
    CompanieText,
    DetailsText,
    DateVoteContainer,
    VoteAverageText,
    VoteText
} from "../../styles/styles"

export default function Details({ genres, date, productionCompanies, vote_average}) {
    return (
        <DetailsContainer>
            <GenreContainer>
                <DetailsText>
                    Genres
                </DetailsText>
                {
                    genres.map((genre, index) => (
                        <GenreText key={index}>
                            {genre.name}
                        </GenreText>
                    ))
                }
            </GenreContainer>

            <CompaniesContainer>
                <DetailsText>
                    Production
                </DetailsText>
                {
                    productionCompanies.map((companie, index) => (
                        <CompanieText key={index}>
                            {companie.name}
                        </CompanieText>
                    ))
                }
            </CompaniesContainer>
            <DateVoteContainer>
                <DateText>/{date.split("-")[0]}</DateText>
                <VoteText>Vote</VoteText>
                <VoteAverageText>{vote_average.toFixed(2)}</VoteAverageText>
            </DateVoteContainer>
        </DetailsContainer>
    )
}