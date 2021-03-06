import React from "react";
import { StyleSheet, View, TouchableOpacity, Animated, Easing } from "react-native";
import { QED_Group } from "../../constants/Colors";
import {MonoText} from '../../components/StyledText'
import windowSize from '../../constants/Layout';
import { ButtonMono } from '../../components/StyledButton';
import {createAnimation, createInterpolate, createSpringAnim} from '../../components/Animation';
import {handleSignupReq} from './SignupService'
import { connect } from 'react-redux';
import { signup } from '../../store/modules/user/userActions'
import LoaderThreeDots from '../../components/LoaderThreeDots'

const adorableAvatarsAPI = 'https://api.adorable.io/avatars/'

class ImagePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarUrl: null,
            userDetails: null,
            processReq: false,
        }

        this.opacityAnim = new Animated.Value(0);
        this.springAnim = new Animated.Value(4);
        this.colorAnim = new Animated.Value(0);
        this.colorValue = createInterpolate(this.colorAnim, [0, 300], [QED_Group.two, QED_Group.one]);
        this.playAnimations()
      }
    
    componentDidMount() {
        const avatarSize = 200;
        const userDetails = this.props.navigation.state.params.userDetails;
        const avatarUrl = adorableAvatarsAPI + avatarSize + userDetails.phone + ".png";
        this.setState({ avatarUrl, userDetails });
    }

    playAnimations = () => {
        Animated.parallel([
            createAnimation(this.opacityAnim, 1, 1200, Easing.bounce, 1200),
            createSpringAnim(this.springAnim, 1, 1000, Easing.ease),
            createAnimation(this.colorAnim, 300, 1000, Easing.linear, 200, false),
        ]).start()
    }

    onNextClick = () => {
        this.handleLodingView();
        const {userDetails, avatarUrl} = this.state;
        const allUserDetails = Object.assign(userDetails, {avatarUrl});
        console.log('all user details:', allUserDetails);
        setTimeout( async() => {
            this.props.navigation.navigate("Home");
            await handleSignupReq(allUserDetails, this.props.onSignup);
        }, 3500);
    }

    onAvatarClick = () => {
        //TODO: handle imagePicker with expo tool
        console.log('On Avatar Click!')
    }

    handleLodingView = () => {
        this.setState({processReq:true})
    }

    render() {
        const {avatarUrl} = this.state;
        return (
        <Animated.View style={[styles.container,{backgroundColor: this.colorValue}]}>
            <View style={styles.headerContainer}>
                <MonoText style={[styles.title,{
                    color: QED_Group.four,
                    borderLeftColor: QED_Group.two}]}>Take a Picture!</MonoText>
                <Animated.View style={{opacity: this.opacityAnim}}>
                    <MonoText style={[styles.subtitle,{
                        color: QED_Group.three,
                        borderLeftColor: QED_Group.two,
                    }]}>If You Want...{"\n"}Click The Image</MonoText>
                </Animated.View>
            </View>
                <View style={styles.avatarContainer}>
                    {avatarUrl ?
                    <React.Fragment>
                        <MonoText style={[styles.subtitle,{
                            color: QED_Group.two,
                            borderLeftColor: QED_Group.four
                        }]}>Hello {this.state.userDetails.name}!</MonoText>
                        <TouchableOpacity
                        onPress={this.onAvatarClick}>
                            <Animated.Image
                            source={{uri:avatarUrl}} 
                            style={[styles.avatar,{
                                backgroundColor: QED_Group.two,
                                borderColor: QED_Group.four,
                                transform: [{ scale: this.springAnim}]
                            }]}/>
                        </TouchableOpacity>
                     </React.Fragment>
                     : 
                     <MonoText style={{color:QED_Group.four}}>Loading...</MonoText>
                    }
                </View>
                {!this.state.processReq ?
                <View style={styles.navigationContainer}>
                    <ButtonMono 
                    _backgroundColor={QED_Group.two} 
                    _color={QED_Group.one}
                    _fontSize={28} 
                    _text={'⇦'}
                    _padding={5}
                    onClick={()=>this.props.navigation.goBack()}
                    />
                    <ButtonMono 
                    _backgroundColor={QED_Group.two} 
                    _color={QED_Group.one}
                    _fontSize={20} 
                    _text={'Next'}
                    _padding={10}
                    onClick={this.onNextClick}
                    />
                </View>
                :
                <LoaderThreeDots colors={['#364','#360','#362']} dotSize={25}/>
                }
                
        </Animated.View>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user //We don't need 'user' for now, we can return {} if we want 
    }
}

const mapActionsToProps = {
    onSignup: signup,
}

export default connect(mapStateToProps,mapActionsToProps)(ImagePicker);

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
        fontSize: 46,
        fontWeight: "500",
        paddingHorizontal: 15,
        borderLeftWidth: 5,
    },
    subtitle: {
        fontSize: 18,
        paddingHorizontal: 15,
        borderLeftWidth: 5,
        paddingBottom: 5,
    },
    avatarContainer:{
        flex: 1.75,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 15
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
        flex: 0.75
    },
    loadingContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.75
    },
    loading:{
        fontSize: 40,
        paddingHorizontal: 15,
    },
});
