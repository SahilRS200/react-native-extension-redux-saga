import { Button, ScrollView, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import { connect, useDispatch, useSelector } from "react-redux";
import { getLoginStatus } from "../../actions/authActions";
import { useIsFocused } from "@react-navigation/native";
import { Section } from "../../components/Common/section";



const Authenticate: React.FC<any> = (props: any) => {
    const isDarkMode = useColorScheme() === 'dark';

    //trigger action dispatch
    const dispatch = useDispatch();

    /**
     * Required to handle back navigation properly
     * Without this, back navigation might not
     * trigger a render
     */
    const isFocused = useIsFocused()

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    const { navigation } = props;

    const { isLoggedIn, loading } = useSelector((state: any) => state.auth);


    const doLogin = () => {
        console.log('in do login');
        dispatch(getLoginStatus());
    }

    /**
     * The set timeout is optional.
     * Its added just to show an effect
     */

    if(isFocused && isLoggedIn) {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 100)
    }
    if(isLoggedIn) {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 100)
        return (
            <SafeAreaView style={backgroundStyle}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}
                >
                    <Header />
                        <View
                            style={{
                                backgroundColor: isDarkMode ? Colors.black : Colors.white,
                            }}
                        >
                            <Section title="Welcome">
                                <Text> Redirecting to Home </Text>
                            </Section>
                        </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
    if (loading) {
        return (
            <SafeAreaView style={backgroundStyle}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={backgroundStyle}
                >
                    <Header />
                    <View
                        style={{
                            backgroundColor: isDarkMode ? Colors.black : Colors.white,
                        }}
                    >
                        <Section title="Loading" />
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={backgroundStyle}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}
            >
                <Header />
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}
                >
                    <Section title="You are logged out">
                        <Text>
                            Please Login
                        </Text>
                    </Section>
                    <Section>
                        <Button
                            title="Login Here"
                            onPress={doLogin}
                        />
                    </Section>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default Authenticate;