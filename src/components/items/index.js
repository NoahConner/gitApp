import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking, Alert } from 'react-native';

const Item = ({ item, openModal }) => {

    const openLink = async (url) => {
        await Linking.openURL(url);
    }

    return (
        <View>
            <View style={styles.list}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: item?.avatar_url,
                    }}
                />
                <View>
                    <TouchableOpacity  onPress={() => openModal(item)}><Text style={styles.name}>{item?.login}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.url} onPress={() => openLink(item?.html_url)}>
                        <Text>{item?.html_url}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 66,
        height: 58,
        marginRight: 10
    },
    list: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#f1f1f1',
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        alignItems: 'center'
    },
    name: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500'
    },
    url: {

    }
});


export default Item;