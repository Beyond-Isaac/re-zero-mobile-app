import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
    return (
        <View style={styles.mainContainer}> 
            <LinearGradient 
                colors={["#101020", "#204860", "#302050", "#702050", "#101020"]}  
                start={{ x: -3, y: 0.4 }} 
                end={{ x: 2, y: 0.4 }}
                style={styles.gradientTop}
            >
                <Image source={require("../../assets/rem.png")} style={styles.imageStyle} />
                <Text style={styles.zero}>Zero</Text>  
            </LinearGradient>

            <View style={styles.container}>
                <View style={styles.div2}>
                    <View style={styles.area}>
                        <TextInput style={styles.textdisplay} placeholder="email" />
                        <TextInput style={styles.textdisplay} placeholder="senha" />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => console.log("Cadastro")}>
                        <Text style={styles.textos}>Entrar</Text>
                    </TouchableOpacity>  

                    <TouchableOpacity style={styles.button} onPress={() => console.log("Logar")}>
                        <Text style={styles.textos}>Cadastrar</Text>
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
        width: 120, 
        height: 120,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
    }, 
    textdisplay: {
        backgroundColor: "#D3D3D3",  
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
        backgroundColor: "#6565b3",   
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