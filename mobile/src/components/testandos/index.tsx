import { View, Text, Pressable } from 'react-native';
import { s } from "./styles";

export function Testandos() {
  return (
    <View style={{ padding: 50 }}>
      <Pressable
        onPress={() => console.log('Funcionou!')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#6c5ce7' : 'blue',
            padding: 10,
            borderRadius: 8,
          },
        ]}
      >
        <Text style={{ color: 'white' }}>
          {/** Dá pra até mostrar o estado pressionado aqui também se quiser */}
          Teste
        </Text>
      </Pressable>
    </View>
  );
}