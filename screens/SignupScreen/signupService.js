import { AsyncStorage } from "react-native"

export const handleSignupReq = async(newUserData, signupAction) => {
    //TODO: add to DB 
    await _storeData(newUserData)
    await signupAction(newUserData);
};

_storeData = async(newUserData) => {
    delete newUserData['password'];
    try {
      await AsyncStorage.setItem('@MyStorage:user', JSON.stringify(newUserData));
    } catch (error) {console.log('async storage error:', error)}
  }