import { View, Text, Image, TouchableOpacity } from "react-native"

export default function FilmCard({ film }, assistido, excluir) {


    const palavras = film.name.split(" ");

    let tituloPrincipal = ""
    let ultimaPalavra

    if (palavras.length >= 2) {
        tituloPrincipal = palavras.slice(0, -1).join(" "); // Todas menos a última
        ultimaPalavra = palavras[palavras.length - 1]; // Última palavra
    } else {
        tituloPrincipal = film.name
    }

    return (
        <View className='flex bg-sand-200 px-6 py-6 '>

            {
                ultimaPalavra ?
                    <View className="mt-3">
                    <Text className="text-sm font-poppins-light flex-wrap max-w-[200px] text-gray-800">
                        {tituloPrincipal}
                    </Text>
                    <Text className="text-5xl font-poppins-bold flex-wrap max-w-[200px] text-gray-800">
                        {ultimaPalavra}
                    </Text> </View>: 
                    <Text className="text-3xl mt-3 font-poppins-bold flex-wrap max-w-[200px] text-gray-800">
                        {tituloPrincipal}
                    </Text>
            }

            <Image source={{ uri: film.image }}
                className="w-[200px] h-[230px] mt-1"
                resizeMode="cover"
            />

            <TouchableOpacity className='bg-deepblue-500 px-4 py-1 mt-2' onPress={assistido}>
                <Text className="text-sand-200 font-poppins-light text-sm">Ver detalhes</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-deepred-400 px-4 py-1 mt-2' onPress={excluir}>
                <Text className="text-sand-200  font-poppins-light text-sm">Excluir</Text>
            </TouchableOpacity>

        </View>
    )
}