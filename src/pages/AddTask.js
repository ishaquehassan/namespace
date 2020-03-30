import React, { useEffect,useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity,ActivityIndicator } from 'react-native';

export default function AddTask() {
    const [isFetching, setIsFetching] = useState(false);
    const [text, setText] = useState(null);

    if(isFetching){
        return <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <View style={{alignItems:'center'}}>
                <ActivityIndicator size={50} color={"#000"}/>
                <Text>Saving Data...</Text>
            </View>
        </View>
    }

    return (
        <View style={ {
            padding:20,
            paddingTop:50,
            flex: 1,
            justifyContent:"center",
            alignItems:"center"
        }} >
            <View style={{width:"90%",elevation:10,backgroundColor:"white",padding:20,borderRadius:20}}>
                <Text style={{
                    fontSize:35,
                    fontWeight:'bold',
                    textAlign:"center",
                    marginBottom:10
                }}>Add Task</Text>
                <TextInput
                    placeholder='Address'
                    onChangeText={(text) => setText(text)}
                    value={text}
                    style={{
                        marginBottom: 20,
                        fontSize:19,
                        borderWidth:1,
                        paddingHorizontal:15,
                        borderRadius:30,
                    }}
                />
                <View style={{alignSelf:"center",alignItems:"center",transform:[
                        {scale:1}
                    ]}}>
                    <TouchableOpacity
                        style={{
                            backgroundColor:"#1962bf",
                            paddingHorizontal:20,
                            paddingVertical:10
                        }}
                        onPress={() =>
                            text ? alert("DONE") : null
                        }
                    >
                        <Text style={{fontSize:20,color:"#fff"}}>ADD TASK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
