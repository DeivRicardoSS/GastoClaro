import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import NotificationScreen from "../screens/NotificationScreen";

import { House, User, Bell } from "phosphor-react-native";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerTitleAlign: "center",
                tabBarShowLabel: true,
                tabBarIcon: ({color, size}) => {
                    if(route.name === "Home") {
                        return <House size={size} color={color} />
                    } else if (route.name === "Profile") {
                        return <User size={size} color={color} />
                    } else if (route.name === "Notifications") {
                        return <Bell size={size} color={color} />
                    }
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                
                tabBarStyle: {
                    backgroundColor: "#F5F5F5"
                }
            })
            }
        >
            <Tab.Screen name="Notifications" component={NotificationScreen} />
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            
        </Tab.Navigator>
    );
}