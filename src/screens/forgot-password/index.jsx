import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { styles} from "./style.js"

const ForgotPassword = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground 
            style={styles.backgroundImage} 
            source={require("../../assets/welcome-background-rem.png")}
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

                                <Text style={styles.textosRegister}>E-mail</Text>
                                <TextInput 
                                    style={styles.textdisplay} 
                                    placeholder="Digite seu e-mail" 
                                    placeholderTextColor="#888" 
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            </View>

                            <TouchableOpacity style={styles.button} onPress={() => console.log("Recuperar")}>
                                <Text style={styles.textButton}>Enviar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate("SingIn")}>
                                <Text style={styles.link}>Voltar para o login</Text>
                            </TouchableOpacity>
                        </View>            
                    </View>    
                </View>  
            </LinearGradient>           
        </ImageBackground>   
    );
};

export default ForgotPassword;