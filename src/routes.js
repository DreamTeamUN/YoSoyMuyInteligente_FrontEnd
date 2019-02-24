import { createStackNavigator } from 'react-navigation';

import Main from './components/Main';

// SignUp Folder
import SignUpMain from './components/SignUp/SignUpMain';
import SignUpAdult from './components/SignUp/SignUpAdult';
import SignUpTeacher from './components/SignUp/SignUpTeacher';

// LogIn Folder
import LogInTypeUser from './components/LogIn/LogInTypeUser';
import LogIn from './components/LogIn/LogIn';

import HomeAdult from './components/HomeAdult';
import HomeStudent from './components/HomeStudent';

// Games Folder
import Games from './components/Games/Games';
import GameProgress from './components/Games/GameProgress';
import PalabraImagen from './components/Games/PalabraImagen';
import NivelesPalabraImagen from './components/Games/NivelesPalabraImagen';
import WeekProgress from './components/Games/WeekProgress';

// Practices Folder
import Practices from './components/Practices/Practices';
import Sentence from './components/Practices/Sentence';

// AdminStudents Folder
import AddStudent from './components/AdminStudents/AddStudent';
import AdminStudentsTutor from './components/AdminStudents/AdminStudentsTutor';

// EditProfile folder
import EditProfile from './components/EditProfile/EditProfile';
import ChangeFullname from './components/EditProfile/ChangeFullname';
import ChangePassword from './components/EditProfile/ChangePassword';
import ChangeBirthdate from './components/EditProfile/ChangeBirthdate';
import ChangePhoto from './components/EditProfile/ChangePhoto';

// Forum folder
import ForumScreen from './components/Forum/ForumScreen';
import HomeForum from './components/Forum/HomeForum';
import CardForum from './components/Forum/CardForum';

// ClassRoom Folder
import ClassRoom from './components/ClassRoom/Classroom';
import AddClassRoom from './components/ClassRoom/AddClassRoom';
import ClassroomView from './components/ClassRoom/ClassroomView';

export const AppStack = createStackNavigator(
    {
        HomeAdult: HomeAdult,
        AddClassRoom: AddClassRoom,
        ClassroomView: ClassroomView,
        NivelesPalabraImagen: NivelesPalabraImagen,
        HomeStudent: HomeStudent,
        WeekProgress: WeekProgress,
        GameProgress: GameProgress,
        ClassRoom: ClassRoom,
        Sentence: Sentence,
        Games: Games,
        PalabraImagen: PalabraImagen,
        Practices: Practices,
        AdminStudentsTutor: AdminStudentsTutor,
        AddStudent: AddStudent,
        EditProfile: EditProfile,
        ChangeFullname: ChangeFullname,
        ChangePassword: ChangePassword,
        ChangeBirthdate: ChangeBirthdate,
        ChangePhoto: ChangePhoto,
        ForumScreen: ForumScreen,
        HomeForum: HomeForum,
        CardForum: CardForum,
    },

    {
        initialRouteName: 'HomeAdult',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5D99C6',
                height: 50,
            },
            headerTintColor: '#E9E9EF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);


export const AuthStack = createStackNavigator(
    {
        Main: Main,
        SignUpMain: SignUpMain,
        SignUpAdult: SignUpAdult,
        SignUpTeacher: SignUpTeacher,
        LogInTypeUser: LogInTypeUser,
        LogIn: LogIn,
    },
    {
        initialRouteName: 'Main',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5D99C6',
                height: 50,
            },
            headerTintColor: '#E9E9EF',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);
