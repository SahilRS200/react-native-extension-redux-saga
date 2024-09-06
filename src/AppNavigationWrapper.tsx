import { NavigationContainer } from "@react-navigation/native"
import App from "./App"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Authenticate from "./containers/Authentication";

const Stack = createNativeStackNavigator();
interface AppNavProps {

}

const AppNavigationWrapper: React.FC<AppNavProps> = (props: AppNavProps) => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="NoLogin"
                    component={Authenticate}
                    options={{title: 'Welcome'}}
                />
                <Stack.Screen
                    name="Home"
                    component={App}
                    options={{title: 'Home'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigationWrapper;