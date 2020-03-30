/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddTask from './src/pages/AddTask';
import MapPage from './src/pages/MapPage';
import {Provider} from 'react-redux';
import store from './src/store/index';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{
                    showIcon: false,
                    labelStyle: {
                        fontSize: 27,
                        alignSelf: 'center',
                        paddingBottom: 7,
                    },
                    activeBackgroundColor: '#000',
                    activeTintColor: '#fff',
                }}>
                    <Tab.Screen name="ADD" component={AddTask}/>
                    <Tab.Screen name="MAP" component={MapPage}/>
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
};


export default App;
