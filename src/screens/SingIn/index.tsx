import React from 'react'
import { View, Image, Text } from 'react-native'
import { styles } from './styles'
import Button from '../../components/Button'
import PesoImg from '../../assets/peso.png'

export default function SingIn() {
  return (
    <View>
      <View style={styles.container}>
        <Image source={PesoImg} style={styles.image} resizeMode="stretch" />
        <Button title="Entrar" activeOpacity={0.7} />
        <View style={styles.content}>
          <Text style={styles.title}>SINGIN</Text>
        </View>
      </View>
    </View>
  )
}
