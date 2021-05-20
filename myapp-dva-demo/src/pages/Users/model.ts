import { Effect, Reducer, Subscription, ImmerReducer } from 'umi';
import {getShowList} from './service'
import key from 'keymaster';
import {message} from 'antd'

interface UserModelType {
  namespace: 'userdemo';
  state: {
    count: number;
    uses: Array<object>;
    demoList:Array<object>;
  };
  reducers: {
    getList: Reducer;
    asyncGetList: Reducer;
    setDemoList:Reducer;
  };
  effects: {
    queryList: Effect;
    queryDemoList:Effect;

  };
  subscriptions: {
    setup: Subscription;
    keyEvent:Subscription;
  };
}

const UserModel: UserModelType = {
  namespace: 'userdemo',
  state: {
    count: 0,
    uses: [],
    demoList:[]
  },
  reducers: {
    // getList(state:any, action:any){
    getList(state: any, { type, playload }: any) {
      // users Model中的 初始state
      // console.log('getList', state);
      // type 是类型 也就是 users/getList
      // console.log('getList', type);
      // 传递过来的值
      // console.log('getList', playload);
      state.uses.push(playload);
      return state;
    },
    // 同步的调用
    asyncGetList(state: any, { type, playload }: any) {
      console.log(playload);
      return {
        ...state,
        uses:playload
      }
    },
    setDemoList(state:any,{playload}:any){
      return {
        ...state,
        demoList:playload
      }
    }
  },
  effects: {
    // *function_name(action:any, effects:any){
    *queryList({ type, playload }: any, effects: any) {
      // console.log('function_name', effects);
      // put 是调用同步的函数 来进行赋值操作
      yield effects.put({
        type:"asyncGetList",
        playload
      });
    },
    *queryDemoList({playload}:any,{call,put}:any){
     const result = yield call(getShowList,{
        type:1,
        cityid:1
      })
      console.log(result);
      
      yield put({
        type:"setDemoList",
        playload:result
      })
      
    }
  },
  subscriptions: {
    setup({ dispatch, history }: any, done: any) {
      // console.log('setup',dispatch);
      // console.log('setup',history);
      // console.log('setup',done);
      return history.listen((location: any) => {
        // 如果当前的页面url 是/users
        if (location.pathname === '/users') {


          /**
           * 这里面可以做 路由拦截 判断有没有权限什么的
           */
          const token = window.sessionStorage.getItem('token')
          if(token){
            message.error("没有登录")
            history.push('/')
            console.log("没有 token")
            return
          }
          //  同步的加载数据
          // dispatch({
          //   type:"getList",
          //   playload:{
          //     name:"adasd"
          //   }
          // })

          // 异步的加载数据然后显示到页面上
          setTimeout(() => {
            dispatch({
              type: 'queryList',
              playload: [
                {
                  name: 'adasd1',
                },
                {
                  name: 'adasd2',
                },
                {
                  name: 'adasd3',
                },
              ],
            });
          }, 2000);
        }
      });
    },

    // 监听键盘事件 
    keyEvent({dispatch,history}) {
      key('⌘+up, ctrl+up', () => { 
        // 挑战页面
        history.push('/')
        console.log(1111) 
      });

      key('⌘+down, ctrl+down', () => { 
        history.push('/users')
        console.log(1111) 
      });
    }
  },
};

export default UserModel;
