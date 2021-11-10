//import {StyleSheet, Dimensions} from 'react';
import Color from './colors';
import CommonProperties from './commonProperties';
//const {width} = Dimensions.get('screen');
const width = window.innerWidth
const box = {
  flex: 1,
  backgroundColor: Color.white,
  ...CommonProperties.mx3,
  ...CommonProperties.my2,
  ...CommonProperties.borderRadius,
};

const CommonStyles = {
  ...CommonProperties,
  height: {
    height: 50
  },
  divider:{
    borderBottomWidth: 1, 
    width: (width * 80) / 100,
    borderBottomColor: '#dddddd'
  },

  caja:{
    width: width/2,
    backgroundColor: Color.green,
    borderBottom: '1px solid',
    borderBottomColor: Color.green
  },

  touch:{
    justifyContent: 'center',
    height: 50, 
    ...CommonProperties.mt2, 
    ...CommonProperties.mb2
  },
  box: {
    ...box,
  },
  boxShadow: {
    ...box,
    ...CommonProperties.boxShadow,
  },
  flex1: {
    flex: 1,
  },
  flexGrow1: {
    flexGrow: 1,
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: Color.gris,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerBox: {
    backgroundColor: Color.grisLight,
    borderRadius: 10,
    ...CommonProperties.p5,
    ...CommonProperties.boxShadow,
  },
  title: {
    ...CommonProperties.bold,
    ...CommonProperties.mt3,
    ...CommonProperties.h3,
    color: Color.primary,
    textTransform: 'uppercase',
  },
  colorPrimary: {
    color: Color.primary,
  },
  inputWidth: {
    width: (width * 85) / 100,
  },
};

export default CommonStyles;