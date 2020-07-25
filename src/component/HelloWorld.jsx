import React from 'react';
import '../assets/styles/App.scss'


const HellowWorld = () =>(
    <h1>Hola mundo</h1>
);

 export default HellowWorld;

 import React, { Component } from 'react'
 import { Text, View } from 'react-native'
 
 export default class HelloWorld extends Component {
     render() {
         return (
             <View>
                 <Text> textInComponent </Text>
             </View>
         )
     }
 }
 
