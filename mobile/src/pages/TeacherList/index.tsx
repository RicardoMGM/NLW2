import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../services/api';


function TeacherList() {
    const [teathers, setTeachers] = useState([]);
    const [isFiltersVisible, setIsFilterVisible] = useState(false);

    const [ subject, setSubject ] = useState('');
    const [ week_day, setWeekDay ] = useState('');
    const [ time, setTime ] = useState('');    

    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFiltersVisible);
    }

    async function handleFilterSubmit() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })
        setIsFilterVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={styles.container} >
            <PageHeader title="Proffys disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible} >
                        <Feather name="filter" size={20} color="#FFF" /> 
                    </BorderlessButton>
                )}>
                {isFiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput 
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={week_day => setWeekDay(week_day)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"

                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    style={styles.input}
                                    value={time}
                                    onChangeText={time => setTime(time)}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"

                                />
                            </View>
                        </View>

                        <RectButton onPress={handleFilterSubmit}
                            style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>
                        </RectButton>
                    </View>
                )}   
            </PageHeader>    

            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}>
                    {teathers.map((teacher: Teacher) => {
                        return <TeacherItem key={teacher.id} teacher={teacher}/>
                    })}
            </ScrollView>
          
        </View>
    );    
}

export default TeacherList;