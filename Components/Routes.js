import StudentList from './StudentList';
import Post from './Post';
import Info from './Info';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const Students = createStackNavigator({
    StudentList: {
    screen: StudentList
    },
    Info: {
        screen: Info
    }, 
});

const BottomTab = createBottomTabNavigator({
    Students: {
        screen: Students
    },
    AddStudents: {
        screen: Post
    }

});

export default Routes = createAppContainer(BottomTab);