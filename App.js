import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Image source={require("./src/assets/icon.png")} style={{width: 120, height: 120}} />
      <Text style={styles.title}>App Teste</Text>
      <View style={styles.btnWrapper}>        
        <Pressable onPress={() => console.log("Pressable")}>
          <Text style={styles.btnPrimary} >Não tem cadastro</Text>
        </Pressable>
        <TouchableOpacity style={styles.btnSecondary} onPress={() => console.log("TouchableOpacity")}>
          <Text style={{color: "black", textDecorationLine: "bold"}}>Login</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32
  },
  title: {
    fontSize: 52
  },
  btnWrapper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 24
  }, // ele empacota os botões e deixa em linha.
  btnPrimary: {
    textDecorationLine: "underline",
    color: "black"
  }, // esse tem estilo com cor e underline
  btnSecondary: {
    backgroundColor: "#00ac2b",
    borderRadius: 16,
    padding: 10,
  }, // esse tem cor de fundo e bordas...
});
