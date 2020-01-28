import StudentList from './StudentList';
import Post from './Post';
import Edit from './Edit';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const Students = createStackNavigator({
    StudentList: {
    screen: StudentList
    },
    Edit: {
        screen: Edit
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