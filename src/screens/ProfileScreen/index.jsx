import { GearSix, Globe, Sun, SignOut } from "phosphor-react-native";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <View>
                    <Text>UserName</Text>
                    <Text>user@email.com</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.optButton}>
                    <GearSix weight="fill"/>
                    <Text>
                        Settings
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optButton}>
                <Sun weight="fill" />
                    <Text>
                        Theme
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optButton}>
                    <Globe weight="fill" />
                    <Text>
                        Language
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.optButton}>
                    <SignOut weight="fill" />
                    <Text>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}