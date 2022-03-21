import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { createSwitchNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import DynamicAppStyles from '../DynamicAppStyles';
import DrawerContainer from '../components/DrawerContainer/DrawerContainer';
import { IMChatScreen } from '../Core/chat';
import { IMFriendsScreen, IMCreateGroupScreen } from '../Core';
import {
  IMEditProfileScreen,
  IMUserSettingsScreen,
  IMContactUsScreen,
} from '../Core/profile';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../Core/onboarding/LoginScreen/LoginScreen';
import SignupScreen from '../Core/onboarding/SignupScreen/SignupScreen';
import WelcomeScreen from '../Core/onboarding/WelcomeScreen/WelcomeScreen';
import WalkthroughScreen from '../Core/onboarding/WalkthroughScreen/WalkthroughScreen';
import LoadScreen from '../Core/onboarding/LoadScreen/LoadScreen';
import MyProfileScreen from '../screens/MyProfileScreen/MyProfileScreen';
import SmsAuthenticationScreen from '../Core/onboarding/SmsAuthenticationScreen/SmsAuthenticationScreen';
import ChatConfig from '../config';
import styles from './styles';

const LoginStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: SignupScreen },
    Welcome: { screen: WelcomeScreen },
    Sms: { screen: SmsAuthenticationScreen },
  },
  {
    initialRouteName: 'Welcome',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: ChatConfig,
    },
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    PersonalChat: { screen: IMChatScreen },
    CreateGroup: { screen: IMCreateGroupScreen },
  },
  {
    initialRouteName: 'Home',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
    },
    headerMode: 'float',
    headerLayoutPreset: 'center',
    navigationOptions: ({ navigation }) => ({
      // headerTintColor:
      //   DynamicAppStyles.navThemeConstants[colorScheme].mainThemeForegroundColor,
      headerTitleStyle: styles.headerTitleStyle,
    }),
    cardStyle: { backgroundColor: '#FFFFFF' },
  },
);

const FriendsStack = createStackNavigator(
  {
    Friends: { screen: IMFriendsScreen },
  },
  {
    initialRouteName: 'Friends',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      showDrawerMenuButton: true,
    },
    headerMode: 'float',
    // backgroundColor:
    //   DynamicAppStyles.navThemeConstants[colorScheme].mainThemeBackgroundColor,
  },
);

const MyProfileStack = createStackNavigator(
  {
    MyProfile: { screen: MyProfileScreen },
    AccountDetails: { screen: IMEditProfileScreen },
    Settings: { screen: IMUserSettingsScreen },
    ContactUs: { screen: IMContactUsScreen },
  },
  {
    initialRouteName: 'MyProfile',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      showDrawerMenuButton: true,
    },
    headerMode: 'float',
    headerLayoutPreset: 'center',
    navigationOptions: ({ navigation }) => ({
      // headerTintColor:
      //   DynamicAppStyles.navThemeConstants[colorScheme].mainThemeForegroundColor,
      headerTitleStyle: styles.headerTitleStyle,
    }),
    cardStyle: {
      // backgroundColor:
      //   DynamicAppStyles.navThemeConstants[colorScheme].mainThemeForegroundColor,
    },
  },
);

// drawer stack
const DrawerStack = createDrawerNavigator(
  {
    HomeStack,
    FriendsStack,
    MyProfileStack,
  },
  {
    drawerPosition: 'left',
    initialRouteName: 'HomeStack',
    drawerWidth: 270,
    contentComponent: DrawerContainer,
  },
);

// Manifest of possible screens
const RootNavigator = createSwitchNavigator(
  {
    LoadScreen: { screen: LoadScreen },
    Walkthrough: { screen: WalkthroughScreen },
    LoginStack: { screen: LoginStack },
    MainStack: { screen: DrawerStack },
  },
  {
    initialRouteName: 'LoadScreen',
    initialRouteParams: {
      appStyles: DynamicAppStyles,
      appConfig: ChatConfig,
    },
    cardStyle: {
      // backgroundColor:
      //   DynamicAppStyles.navThemeConstants[colorScheme].mainThemeBackgroundColor,
    },
  },
);

const AppContainer = createReduxContainer(RootNavigator);

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppContainer);

export { RootNavigator, AppNavigator };
