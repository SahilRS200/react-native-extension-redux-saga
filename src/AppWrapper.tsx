
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

interface AppProps {

}

const AppWrapper: React.FC<AppProps> = (props: AppProps) => {
    return (
        <>
            <Provider store={store}>
                <App />
            </Provider>
        </>
    )
}

export default AppWrapper;
