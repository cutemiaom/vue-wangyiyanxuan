import {reqNavList} from '../../utils/index'
import {
	CHANGEINDEXDATA
} from '../mutation-type'
const state = {
	initData: 'index的初始化测试数据',
  indexData: {}, // index主页数据

}
const mutations = {
	[CHANGEINDEXDATA](state, indexData){
		state.indexData = indexData
	}
}
const actions = {
	async getIndexData({commit}){
		// 异步行为： 发送请求获取数据
    let indexData = await reqNavList()
    // console.log(indexData,"###")
		commit(CHANGEINDEXDATA, indexData.data)
	}
}
export default {
	state,
	mutations,
	actions,
}