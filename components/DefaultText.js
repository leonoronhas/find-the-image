import React from 'react';
import {Text, StyleSheet} from 'react-native';

/*===============================================
= DefaultText will replace the <Text> with the applied
= custom fonts
=============================================== */
const DefaultText = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>;

const styles = StyleSheet.create({
   body:{
      fontFamily: 'mouseMemoirs',
      textAlign: 'center',
   }
});

export default DefaultText;