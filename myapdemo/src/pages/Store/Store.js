import { action, computed, observable } from 'mobx';

class DemoStore {
  @observable num = 10;
  @observable list = [];

  @action setNum(num) {
    this.num = num;
  }

  @action setList(list) {
    this.list = list;
  }
}
const store = new DemoStore()

export default store;