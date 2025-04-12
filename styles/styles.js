import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const FilmContainer = styled.View`
  display: flex;
  flex: 1;
  padding: 16px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
`;


export const DateVoteContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const DetailContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const CompaniesContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0px;
`

export const GenreContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0px;
`

export const DateText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 22px;
  margin-bottom: -10px;
  color: #333;
`
export const StatusText = styled.Text`
  font-family: 'Poppins_300Light';
  font-size: 18px;
`

export const TaglineText = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 20px;
  margin-bottom: 2px;
  text-align: justify;

`

export const CompanieText = styled.Text`
  font-family: 'Poppins_300Light';
  font-size: 12px;
`

export const GenreText = styled.Text`
  font-family: 'Poppins_300Light';
  font-size: 12px;
`

export const TextTitle = styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 20px;
`

export const DetailsContainer = styled.View`
  max-width: 380px;
  margin-top: 10px;
  width: 100%;
  flex: 1;
  max-width: 320px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`


export const DetailsText= styled.Text`
  font-family: 'Poppins_600SemiBold';
  font-size: 16px;
  margin-bottom: -2px;
`


export const CreatedByContainer = styled.View`
  flex: 1;
  padding: 30px;
  align-items: center;
  flex-direction: column;
`;

export const CreatedByText = styled.Text`
  font-size: 32px;
  color: #333;
  font-family: 'Poppins_600SemiBold';
`

export const CreatedByName = styled.Text`
  font-size: 24px;
  margin-top: -5px;
  color: #333;
  font-family: 'Poppins_400Regular';
`

export const CreatedByImage = styled.Image`
  margin-top: -32px;
  width: 160px;
  height: 160px;
`
export const ContainerFilm = styled.ScrollView`
  flex:1;
  padding: 30px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;


export const Container = styled.View`
  flex:1;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999",
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #ccc;
  max-width: 270px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #033ebc;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Header = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 10px;
`;


export const FilmImage = styled.Image`
  margin-top: -14px;
  width: 340px;
  height: 410px;
  background: #eee;
`;

export const VoteText = styled.Text`
  font-size: 18px;
  margin-top: -12px;
  margin-bottom: -16px;
  color: #333;
  margin-top: 10px;
  text-align: center;
  font-family: 'Poppins_600SemiBold';
`;

export const VoteAverageText = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  text-align: center;
  font-family: 'Poppins_400Regular';
`;

export const FilmName = styled.Text`
  font-size: 48px;
  color: #333;
  margin-top: 10px;
  margin-bottom: 4px;
  text-align: center;
  font-family: 'Poppins_700Bold';
`;

export const FilmDescription = styled.Text`
  width: 320px;
  font-size: 12px;
  color: #111;
  text-align: justify;
  font-family: "Poppins_300Light";
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const CardContainer = styled.View`
  align-self: flex-start;
  background-color: #f2ebdf;
  margin-bottom: 24px;
  padding: 32px 32px;
`;
export const TitleContainer = styled.View`
  margin-top: 16px;
`;
export const Subtitle = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_300Light';
  color: #1f2937;
  max-width: 260px;
  flex-wrap: wrap;
  margin-bottom: -16px;
`;

export const MainTitle = styled.Text`
  font-size: 43px;
  font-family: 'Poppins_700Bold';
  color: #1f2937;
  max-width: 260px;
  flex-wrap: wrap;
`;

export const SingleTitle = styled.Text`
  font-size: 44px;
  font-family: 'Poppins_700Bold';
  color: #1f2937;
  max-width: 260px;
  flex-wrap: wrap;
  margin-top: 16px;
`;

export const Poster = styled.Image`
  width: 260px;
  height: 300px;
  margin-top: -10px;
`;

export const DetailButton = styled.TouchableOpacity`
  background-color: #033ebc;
  padding: 4px 16px;
  margin-top: 8px;
`;

export const DeleteButton = styled.TouchableOpacity`
  background-color: #f26241;
  padding: 4px 16px;
  margin-top: 8px;
`;

export const ButtonText = styled.Text`
  color: #fef6e4;
  font-family: 'Poppins_300Light';
  font-size: 18px;
`;

export const SubtitleFilmPage = styled.Text`
  font-size: 18px;
  font-family: 'Poppins_300Light';
  color: #1f2937;
  max-width: 260px;
  flex-wrap: wrap;
  margin-bottom: -20px;
`;

export const TitleText = styled.Text`
  font-size: 72px;
  font-family: 'Poppins_700Bold';
  color: #1f2937;
  max-width: 260px;
  flex-wrap: wrap;
  margin-bottom: -6x;
`;