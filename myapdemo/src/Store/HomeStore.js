import {observable,action} from 'mobx'


// class HomeStore {
//   @observable count:number = 10
//   @observable useObj:Array<User> = []

//   @action addUser(useObj:User){
//     console.log(this.useObj)
//     this.useObj.push(useObj)
//   }
//   @action add(){}
// }

// export default new HomeStore()

const store = observable({
  count: 10,
  useObj: [],
  addUser: (opt) => {
    store.useObj.push(opt);
  },
  setCount: (num) => {
    store.count = num;
  }
})

export default store;
