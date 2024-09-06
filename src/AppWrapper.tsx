
import { Provider } from 'react-redux';
import store from './store';
import AppNavigationWrapper from './AppNavigationWrapper';

interface AppProps {

}

const AppWrapper: React.FC<AppProps> = (props: AppProps) => {
    return (
        <>
            <Provider store={store}>
                <AppNavigationWrapper />
            </Provider>
        </>
    )
}

export default AppWrapper;
