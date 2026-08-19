import {Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity} from "react-native"; 
import {LinearGradient} from "expo-linear-gradient";

export default function Welcome() {
    return(
        
            <ImageBackground style={styles.backgroundImage} source={require("../../assets/welcome-background-rem.png")}>      
              <LinearGradient  colors={["transparent", 
              "#79165780",
              "#16447980",
              "#410f6580",
              "#16447980",
              "#79165780",
              "#410f6580",
              "#10102080",]} 
              start={{ x: 0, y: 0 }} 
              end={{ x: 2, y: 2 }}
              style={styles.gradient}> 

              <View style={styles.logoContainer}> 
                <Image source={require("../../assets/logo-rezero.png")} style={styles.logo} />\
              </View>

              <View style={styles.container}>
                <TouchableOpacity>
                  <Text style={styles.text}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
              </View>
            
            
              </LinearGradient>    
            </ImageBackground>    

    );
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },

    backgroundImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'stretch',
        margin: 0,
    },

    logoContainer: {
        marginTop: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eca8ff4a",
        borderRadius: 20,
        width: 400,
        height: 200,
        
    },
    logo: {
        width: 450,
        height: 350,
        resizeMode: "stretch",
    
    },

    gradient: {
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: "black",   
        fontWeight: "bold",
        fontSize: 22,
        backgroundColor: "#61c6fc4a",
        borderRadius: 20,
        width: 150,
        padding: 10,
    }

});