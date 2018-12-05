import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { QED_Group } from "../../constants/Colors";
import {MonoText} from '../../components/StyledText'
import windowSize from '../../constants/Layout';
import { ButtonMono } from '../../components/StyledButton';

const adorableAvatarsAPI = 'https://api.adorable.io/avatars/'

export default class ImagePickerScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: null,
            userDetails: null
        }
      }
    
    componentDidMount() {
        const avatarSize = 200
        const userDetails = this.props.navigation.state.params.userDetails
        const avatarUrl = adorableAvatarsAPI + avatarSize + userDetails.email + '.png'
        this.setState({ avatarUrl, userDetails })
    }

    render() {
        const {avatarUrl} = this.state;
        return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <MonoText style={[styles.title,{
                    color: QED_Group.four,
                    borderLeftColor: QED_Group.two}]}>Take a Picture!</MonoText>
                <MonoText style={[styles.subtitle,{
                    color: QED_Group.three,
                    borderLeftColor: QED_Group.two,
                }]}>If You Want...</MonoText>
            </View>
            <React.Fragment>
                <View style={styles.avatarContainer}>
                    {avatarUrl ?
                    <React.Fragment>
                        <MonoText style={[styles.subtitle,{
                            color: QED_Group.two,
                            borderLeftColor: QED_Group.four
                        }]}>Hello {this.state.userDetails.name}!</MonoText>
                        <Image 
                        source={{uri:avatarUrl}} 
                        style={[styles.avatar,{
                            backgroundColor: QED_Group.two,
                            borderColor: QED_Group.four
                        }]}/> 
                     </React.Fragment>
                     : 
                     <MonoText style={{color:QED_Group.four}}>Loading...</MonoText>
                    }
                </View>
                <View style={styles.navigationContainer}>
                    <ButtonMono 
                    _backgroundColor={QED_Group.two} 
                    _color={QED_Group.one}
                    _fontSize={28} 
                    _text={'⇦'}
                    _padding={5}
                    onClick={this.onBackClick}
                    />
                    <ButtonMono 
                    _backgroundColor={QED_Group.two} 
                    _color={QED_Group.one}
                    _fontSize={20} 
                    _text={'Next'}
                    _padding={10}
                    onClick={this.onBackClick}
                    />
                </View>
            </React.Fragment>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: QED_Group.one
    },
    headerContainer:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: windowSize.window.width * .1,
        paddingVertical: windowSize.window.height * .05,
    },
    title: {
        fontSize: 48,
        fontWeight: "500",
        paddingHorizontal: 15,
        borderLeftWidth: 5,
    },
    subtitle: {
        fontSize: 20,
        paddingHorizontal: 15,
        borderLeftWidth: 5,
        paddingBottom: 5,
    },
    avatarContainer:{
        flex:2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    avatar:{
        width: 200, 
        height: 200,
        borderRadius: 100,
        borderWidth: 5,
        marginTop: 30,
    },
    navigationContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1
    }
});
