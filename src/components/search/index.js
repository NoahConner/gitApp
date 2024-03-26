import React, { useState , useEffect} from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { filter, noresult } from '../../redux/slicers/userSlicer'

const SearchBar = () => {
    const userState = useSelector((state) => state.user)
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch()

    const handleSearch = () => {
        console.log(searchText, 'searchText')
        const filteredUsers = userState?.value.filter(user =>
            user.login.toLowerCase().includes(searchText.toLowerCase())
        );
        dispatch(filter(filteredUsers))

        if(searchText.length > 0 && filteredUsers?.length == 0){
            dispatch(noresult(true))
        }else{
            dispatch(noresult(false))
        }
    }

    // useEffect(() => {
    //     console.log(userState?.filtered, 'userState?.filtered')
    //     console.log(userState?.value, 'userState?.value')
    // }, [userState?.filtered, userState?.value])

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSearch()
        }, 500)
    
        return () => clearTimeout(timer)
      }, [searchText])
    

    return (
        <TextInput
            style={styles.input}
            placeholder='Search by username ...'
            onChangeText={(v) => setSearchText(v)}
            value={searchText}
        />
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});

export default SearchBar;
