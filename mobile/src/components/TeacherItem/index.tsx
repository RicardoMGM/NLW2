import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';


function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} 
                    source={{uri: 'https://github.com/diego3g.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Diego Fernandes</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Teste de bio, não copiei a bio de exempolo sem graça.
                {'\n'} {'\n'}
                1,2,3, testando...
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>
                
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                     {/*   <Image source={heartOutLineIcon} /> */}
                        <Image source={unFavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsAppIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;