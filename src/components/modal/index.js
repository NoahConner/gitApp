import React, { useEffect } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from 'react-native';

const UserModal = ({ modalVisible, setModalVisible, userData, loading }) => {
    useEffect(() => {
        console.log(userData, 'userData')
    }, [userData])
    return (
        <Pressable  onPress={() => setModalVisible(!modalVisible)}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(false);
                }}>
                <Pressable style={styles.centeredView} onPress={() => setModalVisible(false)}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image
                                style={styles.logo}
                                source={{
                                    uri: userData?.avatar_url
                                }}
                            />
                            <Text>{userData?.name}</Text>
                            <Text>Username: {userData?.login}</Text>
                            <Text>Company: {userData?.company}</Text>
                            {userData?.bio && <Text>Bio: {userData?.bio}</Text>}
                            <Text>Followers: {userData?.followers}</Text>
                            <Text>Following: {userData?.following}</Text>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(false)}>
                                <Text style={styles.textStyle}>Close Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Pressable>
            </Modal>
        </Pressable>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#0000008f',
        // marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    logo: {
        width: 66,
        height: 58,
        marginRight: 10
    },
    button: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: '#00205b',
        marginTop: 10

        // elevation: 2,
    },
    textStyle: {
        color: '#fff'
    },
});

export default UserModal;