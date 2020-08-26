import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler'; 

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

function Landing() {
    const {navigate} = useNavigation();

    const [ totalConnections, setTotalConnections] = useState(0);

    // UseEffect recebe dois parâmetros:
    // 1º A função que será executada
    // 2º Quando será executada a função, é uam array de dependências,
    // que verifica quando os valores foram alterados. Deixar vazio executa apenas uma vez. 
    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;
            console.log(response);
            setTotalConnections(total);
        });
    }, []);

    function hadnleNvigateToGiveClassesPage(){
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPage(){
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title} >
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigateToStudyPage} 
                    style={[styles.button, styles.buttonPrimary]}> 
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={hadnleNvigateToGiveClassesPage}
                    style={[styles.button, styles.buttonSecondary]}> 
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;