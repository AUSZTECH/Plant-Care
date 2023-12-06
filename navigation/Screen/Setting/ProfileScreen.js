import { Box, Heading, Icon, ScrollView, Stack, Text } from 'native-base';
import React from 'react';
import { View, Image, Dimensions } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const Layout = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
}

const ProfileScreen = () => {

  return (
    <Box flex={1} backgroundColor={'secondary.200'}  >
      <ScrollView showsVerticalScrollIndicator={false} >
        <Box backgroundColor={'primary.400'} paddingBottom={Layout.height * 0.04} borderBottomLeftRadius={Layout.width * 0.1} borderBottomRightRadius={Layout.width * 0.1} >

          <View style={{ alignItems: "flex-end", paddingHorizontal: 32, marginVertical: 20 }}>
            <Icon as={AntDesign} name={'smileo'} size={'lg'} />
          </View>

          <View style={{ flexDirection: 'row', paddingHorizontal: 32, marginVertical: 36, alignItems: 'center', justifyContent: 'flex-start' }}>
            <Image source={require('../../../assets/images/profile-picture.jpg')} style={{ width: 125, height: 125, borderRadius: 25, marginRight: 16 }} />
            <View>
              <Heading>Hadia Manzoor</Heading>
              <Text color={'gray.600'} >Hypothetical Farmer</Text>
            </View>
          </View>

        </Box>

        {/* <View style={{ backgroundColor: Colors.white, marginHorizontal: 32, padding: 20, borderRadius: 20, elevation: 8, marginBottom: 16, marginTop: -Layout.height * 0.15 }}>
<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
  <Text>Bio</Text>
  <AntDesign name='user' size={20} />
</View>
<View style={{ marginVertical: 8 }}>
  <Text style={{ color: Colors.greyish }}>A doctor, like anyone else who has to deal with human beings, each of them unique, cannot be a scientist; he is either, like the surgeon, a craftsman, or, like the physician and the psychologist, an artist. This means that in order to be a good doctor a man must also have a good character, that is to say, whatever weaknesses and foibles he may have, he must love his fellow human beings in the concrete and desire their good before his own.</Text>
</View>
</View> */}


        <Stack space={4} px={5} paddingTop={5} paddingBottom={70} >
          <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 20, elevation: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
              <Text>Skill</Text>
              <Icon as={MaterialCommunityIcons} name={'pen'} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Icon as={Fontisto} name={'female'} color={'secondary.800'} size={'6xl'} />
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Agricultural Laborer</Text>
            </View>
          </View>

          <View style={{ backgroundColor: '#FFF', padding: 20, borderRadius: 20, elevation: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
              <Text>Stats</Text>
              <Icon as={MaterialCommunityIcons} name={'trending-up'} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 8, alignItems: 'flex-end' }}>
              <Heading size={'xl'} margin={2} >100</Heading>
              <Text>Plants to Grow</Text>
            </View>
          </View>
        </Stack>
      </ScrollView>
    </Box>
  );
}

export default ProfileScreen
