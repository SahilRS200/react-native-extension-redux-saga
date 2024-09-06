import { Text, useColorScheme, View } from "react-native";
import { sectionStyles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { SectionProps } from "../../utils/types";



export const Section: React.FC<SectionProps> = ({children, title}: SectionProps) => {

    const isDarkMode = useColorScheme() === 'dark';
    return (
      <View style={sectionStyles.sectionContainer}>
        <Text
          style={[
            sectionStyles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            sectionStyles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
}