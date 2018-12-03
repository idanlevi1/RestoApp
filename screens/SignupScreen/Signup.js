import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Flamingo } from "../../constants/Colors";
import {MonoText} from '../../components/StyledText'
import { company } from "../../assets/data/company";
import windowSize from '../../constants/Layout';
import {TextInputMono} from '../../components/StyledTextInput';

const levels = [
   {number:1 , status: true},
   {number:2 , status: false},
   {number:3 , status: false},
   {number:4 , status: false},
   {number:5 , status: false},
   {number:6 , status: false},
   {number:7 , status: false},
   {number:8 , status: false},
   {number:9 , status: false},
   {number:10 , status: false},
]
export default class Signup extends React.Component {
    state = {
        name: '',
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <MonoText style={styles.title}>Sign Up!</MonoText>
                <MonoText style={styles.subtitle}>We Make It Easy.</MonoText>
            </View>
            <View style={styles.fieldContainer}>
                <MonoText style={styles.label}>Your Name?</MonoText>
                <TextInputMono
                value={this.state.name} 
                onChangeText={(name) => this.setState({name})}
                style={styles.input}
                />
            </View>
            <View style={styles.levelsContainer}>
                <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                data={levels}
                horizontal
                renderItem={({item,index}) => 
                <MonoText style={[styles.level,item.status && styles.levelComplete]}>{item.number}</MonoText>
                }
                keyExtractor={(item) => item.number.toString()}
                refreshing={true}
                />
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Flamingo.one,
    },
    headerContainer:{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: windowSize.window.width * .1,
        paddingVertical: windowSize.window.height * .05,
    },
    title: {
        fontSize: 48,
        color: Flamingo.four,
        fontWeight: "500",
        paddingHorizontal: 15,
        borderLeftWidth: 5,
        borderLeftColor: Flamingo.three,
    },
    subtitle: {
        fontSize: 20,
        color: Flamingo.two,
        paddingHorizontal: 15,
        borderLeftWidth: 5,
        borderLeftColor: Flamingo.three,
    },
    fieldContainer:{
        paddingTop: windowSize.window.height * .1,
        flex:2,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    label: {
        paddingBottom: 22,
        fontSize: 22,
        color: Flamingo.three
    },
    input:{
        borderBottomWidth: 2,
        borderBottomColor: Flamingo.three,
        width: windowSize.window.width * .75,
        height: 45,
        fontSize:26,
        color: Flamingo.four,
        paddingHorizontal: 15,
    },
    levelsContainer:{
        flex: 0.5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 15,
    },
    level:{
        fontSize: 14,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginHorizontal: 3,
        borderRadius: 50,
        color: Flamingo.one,
        backgroundColor: Flamingo.three,
    },
    levelComplete:{
        backgroundColor: Flamingo.two,
    },
});
