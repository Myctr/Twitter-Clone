import {StyleSheet} from 'react-native';

export const logoStyles = StyleSheet.create({
  view: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 35,
    left: 0,
    right: 0,
  },
});
export const headerStyles = StyleSheet.create({
  welcomeView: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 30,
  },
  welcomeText: {
    color: '#000000',
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  view: {
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 30,
  },
  text: {
    color: '#000000',
    fontFamily: 'Helvetica',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export const logoButton = StyleSheet.create({
  touchableOpacity: {
    width: '85%',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D6DADB',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});
export const createAccountButton = StyleSheet.create({
  touchableOpacity: {
    width: '85%',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#D6DADB',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#1DA1F2',
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export const simpleButton = StyleSheet.create({
  view: {
    width: '90%',
    marginVertical: 10,
  },
  touchableOpacity: {
    borderRadius: 30,
    backgroundColor: '#1DA1F2',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    color: '#FFFFFF',
  },
});
export const cancelBar = StyleSheet.create({
  navBar: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
  },
  navTitle: {
    color: '#1DA1F2',
    fontSize: 18,
    fontFamily: 'Helvetica',
  },
});
export const textInputs = StyleSheet.create({
  view: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D6DADB',
  },
  textInput: {
    width: '100%',
    color: '#1DA1F2',
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 15,
  },
});
export const dualGroupBar = StyleSheet.create({
  navBar: {
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#FFFFFF',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
});
export const tweetStyles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D6DADB',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  name: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Helvetica',
    marginRight: 3,
  },
  username: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    marginHorizontal: 3,
  },
  time: {
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  dots: {
    position: 'absolute',
    right: 5,
    flex: 1,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Helvetica',
    color: '#000000',
  },
  tweetTool: {
    flexDirection: 'row',
    marginVertical: 15,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  tool: {
    flexDirection: 'row',
  },
  toolText: {
    fontSize: 15,
  },
  toolIcon: {
    marginRight: 10,
  },
});
