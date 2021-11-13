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

const CommonStyles = 
  {
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
    title:{
      ...CommonProperties.mb20,
      ...CommonProperties.textCenter,
      color: Color.grisDark
    },
    link : {
      textDecoration:'none', 
      color:'inherit'
    },
    colorPrimary: {
      color: Color.primary,
    },
    inputWidth: {
      width: (width * 85) / 100,
    },
    formControl :{
      width: '100%',
      ...CommonProperties.p2,
      ...CommonProperties.borderRadius,
      ...CommonProperties.mb1,
      color:Color.grisDark,
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      backgroundColor: Color.white,
      backgroundClip: 'padding-box',
      border: '1px solid #949ba0',
      webkitAppearance: 'none',
      mozAppearance: 'none',
      appearance: 'none',
      transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
    },
    label:{
      ...CommonProperties.pb0,
      ...CommonProperties.pt0,
      ...CommonProperties.textLeft
    },
    formControlFile :{
      width: '100%',
      backgroundColor: Color.white,
      color: Color.grisLight,
      border: '1px solid #949ba0',
      borderStyle: 'dashed',
      padding:'4% 2%',
      borderRadius: 8,
      overflow: 'hidden',
      transition: 'ease-out 120ms background-color',
      marginBottom: '1em',

      "&:hover": {
          border: '1px solid #2A3B47',
          borderStyle: 'dashed',
          color:'#2A3B47'
        },
    },
  }


export default CommonStyles;
