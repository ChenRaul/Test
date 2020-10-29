import React from 'react';
import {StyleSheet,FlatList,View, Text} from 'react-native';
import ColorsSelect from './ColorsSelect';
import Datas from './Datas';

/**
 * 主页面，数据显示页面
 */
export default class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            dataList:Datas,
        };
    }
    /**
     * 列表头部  显示星期
     */
    renderHeader() {
        const weekList=['Mon','Tues','Wed','Thur','Fri','Sat','Sun'];
        const weekView = weekList.map((item,index)=>
            <View key={index} style={styles.averageView}>
                <Text style={styles.weekText}>{item}</Text>
            </View>
        );
        return(
            <View style={styles.listHeader}>
                {weekView}
            </View>
        )
    }
    /**
     * 提交的数量 列表item
     * @param item 数据
     */
    renderItem(item){
        //构建 提交的数量 方块
        const borderViews = item.map((mItem,index)=>
            <View key={index} style={styles.averageView}>
                <View
                    style={[styles.borderView,{backgroundColor:ColorsSelect.selectColorByNum(mItem.commits)}]}
                />
            </View>
        );
        return(
            <View style={[styles.listHeader,{marginTop:5,marginBottom:5}]}>
               {borderViews}
            </View>
        )
    }
    render() {
        return(
            <FlatList
                style={{flex:1}}
                keyExtractor={(item,index) => `${index}`}
                data={this.state.dataList}
                ListHeaderComponent={()=>this.renderHeader()}
                renderItem={({item,index}) => this.renderItem(item)}
            />
        )
    }
}
const styles = StyleSheet.create({
    flatList:{
        flex:1,
    },
    listHeader:{
        flex:1,
        flexDirection:'row',
    },
    averageView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    weekText:{
        fontSize:16,
        color:'black',
        marginTop:10,
        marginBottom:5
    },
    borderView:{
        borderRadius:2,
        width:20,
        height:20
    }
});