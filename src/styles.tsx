import type { ViewStyle } from 'react-native';
import type { ImageRequireSource } from 'react-native';
import { seatHeightConst, seatSleeperHeightConst } from './component/Seat';
import type { ImageStyle } from 'react-native';
import type { TextStyle } from 'react-native';

export const marginHorizontal = {
  booked: 2,
  available: 2,
  emptySpace: 2,
  door: 2,
  driver: 2,
  blocked: 2,
  women: 2,
};

export const disableButton = {
  booked: false,
  available: false,
  emptySpace: true,
  door: true,
  driver: true,
  blocked: true,
  women: false,
};

export const borderWidth = {
  booked: 0.5,
  available: 0.5,
  emptySpace: 0,
  door: 0.5,
  driver: 0.5,
  blocked: 0,
  women: 0.5,
};

export const seatSize = {
  booked: '90%',
  available: '90%',
  emptySpace: '90%',
  door: '85%',
  driver: '75%',
  blocked: '95%',
  women: '95%',
};

export const selectedSeatColor = {
  booked: '#5FBB80',
  available: '#B2B2B2',
  emptySpace: 'transparent',
  door: 'skyblue',
  driver: '#696969',
  blocked: '#B2B2B2',
  women: '#EE96B4',
};

export const seatheight = {
  booked: seatSleeperHeightConst,
  available: seatSleeperHeightConst,
  emptySpace: seatHeightConst,
  door: seatHeightConst,
  driver: seatHeightConst,
  blocked: seatSleeperHeightConst,
  women: seatSleeperHeightConst,
};

export const layoutImage = {
  booked: require('./assets/seat.png'),
  available: require('./assets/seat.png'),
  emptySpace: require('./assets/seat.png'),
  door: require('./assets/seat.png'),
  driver: require('./assets/steer.png'),
  blocked: require('./assets/seat.png'),
  women: require('./assets/seat.png'),
};
export const blockedSource: ImageRequireSource = require('./assets/block.png');

export const seatContainerStyle: ViewStyle = {
  flexDirection: 'row',
  margin: 5,
  justifyContent: 'space-evenly',
};

export const mainContainerStyle: ViewStyle = {
  marginHorizontal: 5,
  borderWidth: 1,
  borderRadius: 5,
  borderColor: 'gray',
  backgroundColor: 'rgba(1,1,1,0.1)',
  padding: 10,
  height: '100%',
  // alignSelf: 'center',
  // justifyContent: 'center',
};

export const instructionSeatLayout: ViewStyle = {
  marginBottom: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginHorizontal: 10,
};

export const bgImageStyle: ViewStyle = {
  height: 40,
  width: 40,
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 5,
};

export const imgHeaderStyle: ImageStyle = {
  height: '40%',
  width: '40%',
};
export const seatImageStyle: ImageStyle = {
  height: 40,
  width: 40,
  marginRight: 5,
};

export const seatNumberStyle: TextStyle = {
  textTransform: 'capitalize',
  marginRight: 5,
};
