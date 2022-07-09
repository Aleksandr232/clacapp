import React,{useState} from 'react';
import {TouchableOpacity, Text } from 'react-native';
import { ThemeCotext } from '../context/ThemeCotext';
import { Styles } from '../styles/GlobalStyles';

interface ButtonProps{
    onPress: () => void ;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}