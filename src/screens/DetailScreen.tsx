import React, {FC, useLayoutEffect} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {deleteProducts} from "../store/actions/productAction";

const DetailScreen: FC = (props) => {
    const item = props.route.params.item
    const navigation =props.navigation

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => {
                    dispatch(deleteProducts(deleteId))
                    navigation.navigate('HomeScreen')
                }}>
                    <Text>DELETE</Text>
                </TouchableOpacity>
            ),
            headerTitle: item.name
        });
    }, [navigation])

    const deleteId = item.id

    return(
        <View style={{flex:1}}>
            <View style={{flex:1}}>
                <Image source={{uri: item.avatar}} style={{width:'100%', height: 250}} resizeMode={'stretch'}/>
            </View>
            <View style={{flex:1, height:300, backgroundColor: '#000000', borderTopRightRadius: 20, borderTopLeftRadius: 20}}>
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    alignItems: "flex-start",
                    paddingVertical: 20,
                    paddingHorizontal: 10,
                }}>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}>
                        {item.name}
                    </Text>
                    <Text style={{color: '#FFF', fontSize: 20, fontWeight: '700'}}>
                        {item.price} $
                    </Text>
                </View>
                <View style={{marginTop: 20, paddingHorizontal: 10,}}>
                    <Text style={{color: '#FFF', lineHeight: 20}}>
                        {item.description}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default DetailScreen;
