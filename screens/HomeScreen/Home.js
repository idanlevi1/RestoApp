import React from 'react';
import { Image, StyleSheet, View } from "react-native";
import { MonoText } from '../../components/StyledText';
import { QED_Group } from "../../constants/Colors";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MonoText style={[styles.title,{
          color: QED_Group.three,
          borderLeftColor: QED_Group.four}]}>Wolcome!</MonoText>
        <MonoText style={[styles.title,{
          borderLeftWidth: 0,
          color: QED_Group.one}]}>HomeScreen!</MonoText>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: QED_Group.two,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
    paddingHorizontal: 15,
    borderLeftWidth: 5,
  },
});
