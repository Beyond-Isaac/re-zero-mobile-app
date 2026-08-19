import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
    return (
        <View style={styles.mainContainer}> 
       
              
                
          

            <View style={styles.container}>
                <View style={styles.div2}>
                    <View style={styles.area}>
                        <TextInput style={styles.textdisplay} placeholder="email" />
                        <TextInput style={styles.textdisplay} placeholder="senha" />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => console.log("Cadastro")}>
                        <Text style={styles.textos}>Logar</Text>
                    </TouchableOpacity>  
           
                </View>                     
            </View>     
        </View>     
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#101020",
    },
    gradientTop: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageStyle: {
        width: 320, 
        height: 320,      
        marginTop: 145,
        
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000079",
    }, 
    textdisplay: {
        backgroundColor: "#77777728",  
        borderRadius: 16,
        padding: 8,
        width: 160,
    }, 
    zero: {    
        color: "white",
        fontSize: 42,      
        fontWeight: "700", 
    },
    div2: {
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },
    button: {
        backgroundColor: "#6565b3a9",   
        width: 200,    
        borderRadius: 16,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
    }, 
    textos: {
        color: "black",   
        fontWeight: "bold",
        fontSize: 22,
    },
    area: {
        backgroundColor: "white",   
        width: 200,
        height: 100,    
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        gap: 9,
    },
});