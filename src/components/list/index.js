import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux'
import Item from '../items';
import UserModal from '../modal';
import { useGetUserQuery } from '../../services/user'
import { callApi } from '../../services/api';
import { add } from '../../redux/slicers/userSlicer'
import { useDispatch } from 'react-redux'

const List = () => {
    const filteredUsers = useSelector((state) => state.user.filtered)
    const noResult = useSelector((state) => state.user.noresult)
    const [modalVisible, setModalVisible] = useState(false);
    const { data, error, isLoading } = useGetUserQuery()
    const [loading, setLoading] = useState(false)
    const [userData, setuserData] = useState()
    const dispatch = useDispatch()

    const openModal = (item) => {
        getUser(item?.login)
    }
    const getUser = (name) => {
        setLoading(true);
        callApi('get', `users/${name}`, true)
            .then(response => {
                setModalVisible(true)
                setuserData(response)
                // dispatch(add(response))
            })
            .catch(error => {
                console.log(error, 'error')
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        dispatch(add(data))
    }, [data])

    return (
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
            {
                noResult ? (
                    <>
                    <Text>No data found</Text>
                    </>
                ) : (
                    <>
                        {error ? (
                            <Text>Oh no, there was an error</Text>
                        ) : isLoading ? (
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <ActivityIndicator size="large" color="#00205b" />
                            </View>
                        ) : data ? (
                            <>
                                <FlatList
                                    data={filteredUsers?.length > 0 ? filteredUsers : data}
                                    renderItem={({ item }) => <Item item={item} openModal={openModal} />}
                                    keyExtractor={item => item.id}
                                    contentContainerStyle={{ flexGrow: 1 }}
                                />
                                <UserModal modalVisible={modalVisible} setModalVisible={setModalVisible} userData={userData} loading={loading} />
                            </>
                        ) : null}
                    </>
                )
            }


        </View>
    )
}
export default List;