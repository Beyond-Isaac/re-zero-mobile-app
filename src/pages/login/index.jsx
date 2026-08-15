import { Text, View, StyleSheet, Pressable, TouchableOpacity, Image } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
    return (
    <LinearGradient colors={[
    "#101020",
    "#204860",
    "#302050",
    "#702050",
    "#101020",
    
]}  
  start={{ x: -3, y: 0.4 }} 
  end={{ x: 2, y: 0.4 }}
  style={styles.container}>
           
        <Image source={require("../../assets/rem.png")} style={{width: 120, height: 120, display: "flex", alignItems: "center"}} />
        <Text style={styles.zero}>Zero</Text>  
        <View style={styles.div2}>

         <TouchableOpacity style={styles.button} onPress={() => console.log("Cadastro")}>
            <Text style={[styles.logar]}>Entrar</Text>
         </TouchableOpacity>   
         <TouchableOpacity style={styles.button} onPress={() => console.log("Logar")}>
            <Text style={styles.cadastro}>Cadastrar</Text>
         </TouchableOpacity>
       
        </View>                     

    </LinearGradient>
    )
}
       
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
    }, 
      zero: {    
        color: "white",
        fontSize: 42,      
        fontWeight: "700", 
        
    },
      div2: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",  
        gap: 38
                       
    },
      button: {
        backgroundColor: "#6565b3",   
        width: 120,    
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center"
             
    }, 
      cadastro: {
        color: "black",      
        fontWeight: "300",
        fontSize: 22,   

    },
      logar: {     
        color: "black",
        fontWeight: "300",
        fontSize: 22,
        
    }
    
});
