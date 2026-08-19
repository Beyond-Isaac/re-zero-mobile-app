import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ForgotPassword() {
    return (
        <ImageBackground 
            style={styles.backgroundImage} 
            source={require("../../assets/rem-background-profile.jpg")} 
        >      
            <LinearGradient  
                colors={[
                    "transparent", 
                    "#79165780",
                    "#16447980",
                    "#410f6580",
                    "#16447980",
                    "#79165780",
                    "#410f6580",
                    "#10102080"
                ]} 
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            > 
                <View style={styles.mainContainer}> 
                    <View style={styles.container}>
                        <View style={styles.div2}>
                            <View style={styles.area}>
                                <Text style={styles.tituloForm}>Recuperar Senha</Text>
                                <Text style={styles.subtitulo}>Insira seu e-mail para receber as instruções de redefinição.</Text>

                                <Text style={styles.textos_register}>E-mail</Text>
                                <TextInput 
                                    style={styles.textdisplay} 
                                    placeholder="Digite seu e-mail" 
                                    placeholderTextColor="#888" 
                                    keyboardType="email-address"
                                />
                            </View>

                            <TouchableOpacity style={styles.button} onPress={() => console.log("Recuperar")}>
                                <Text style={styles.textButton}>Enviar</Text>
                            </TouchableOpacity>  
                        </View>             
                    </View>     
                </View>  
            </LinearGradient>            
        </ImageBackground>   
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    gradient: {
        flex: 1,
        width: "100%",
    },
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000040",
    }, 
    div2: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        width: "100%",
    },
    area: {
        backgroundColor: "white",   
        width: "85%",
        maxWidth: 320,
        padding: 20,    
        borderRadius: 16,
        justifyContent: "center",
        gap: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    tituloForm: {
        color: "black",   
        fontWeight: "bold",
        fontSize: 22,
        alignSelf: "center",
        marginBottom: 5,
    },
    subtitulo: {
        color: "#666",
        fontSize: 13,
        textAlign: "center",
        marginBottom: 10,
    },
    textdisplay: {
        backgroundColor: "#77777715",  
        borderRadius: 8,
        padding: 10,
        width: "100%",
        borderWidth: 1,
        borderColor: "#ddd",
    }, 
    textos_register: {
        color: "#333",   
        fontWeight: "600",
        fontSize: 14,
    },
    button: {
        backgroundColor: "#6565b3",   
        width: "85%",
        maxWidth: 320,
        borderRadius: 16,
        paddingVertical: 12,
        justifyContent: "center",
        alignItems: "center",
    }, 
    textButton: {
        color: "white",   
        fontWeight: "bold",
        fontSize: 16,
    },
});