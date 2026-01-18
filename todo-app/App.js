import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Importando as novas telas do seu relatório
import IntroScreen from './screens/IntroScreen';
import GoalsScreen from './screens/GoalsScreen';
import DevGridScreen from './screens/DevGridScreen';
import DetailsScreen from './screens/DetailsScreen';
import ConclusionScreen from './screens/ConclusionScreen';
import ReferencesScreen from './screens/ReferencesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack para a aba de Desenvolvimento (permite ir da Grid para os Detalhes)
function DevStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="DevGrid" 
        component={DevGridScreen} 
        options={{ title: 'Desenvolvimento' }} 
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={({ route }) => ({ title: route.params.type })} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      
  <Tab.Navigator 
  screenOptions={{ 
    tabBarActiveTintColor: '#1A237E', 
    tabBarInactiveTintColor: '#9FA8DA',
    tabBarStyle: { 
      backgroundColor: '#FFFFFF', 
      borderTopWidth: 0, 
      height: 65,
      paddingBottom: 10,
      elevation: 15, // Sombra no Android
      shadowColor: '#1A237E', // Sombra azulada no iOS
      shadowOpacity: 0.1,
    },
    headerStyle: { 
      backgroundColor: '#1A237E',
      elevation: 0, // Remove a linha de separação
      shadowOpacity: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
  }}
>
        <Tab.Screen 
          name="Introdução" 
          component={IntroScreen} 
          options={{ 
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="information" color={color} size={26}/> 
          }}
        />
        <Tab.Screen 
          name="Objetivos" 
          component={GoalsScreen} 
          options={{ 
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="target" color={color} size={26}/> 
          }}
        />
        <Tab.Screen 
          name="Desenvolvimento" 
          component={DevStack} 
          options={{ 
            headerShown: false, // O Stack já tem seu próprio cabeçalho
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="code-tags" color={color} size={26}/> 
          }}
        />
        <Tab.Screen 
          name="Conclusão" 
          component={ConclusionScreen} 
          options={{ 
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="check-circle" color={color} size={26}/> 
          }}
        />
        <Tab.Screen 
  name="Referências" 
  component={ReferencesScreen} 
  options={{ 
    tabBarIcon: ({color}) => <MaterialCommunityIcons name="library-books" color={color} size={26}/> 
  }}
/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}