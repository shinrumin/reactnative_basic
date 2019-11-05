import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import MainScreen from './screens/Main';

const MainNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  Main: { screen: MainScreen },
});

const App = createAppContainer(MainNavigator);

export default App;