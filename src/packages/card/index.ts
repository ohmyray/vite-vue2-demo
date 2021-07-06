import { Vue } from "vue-property-decorator";
// import Vue from 'vue';
import main_view from './view/Main.vue';
export class Card {
  public CardConstructor!: any;

  public _map: any = null;

  constructor() {
    // this.CardConstructor = Vue.extend(import("./view/Main.vue"));
    this.CardConstructor = Vue.extend(main_view);
  }
  public install(map: any, defalutOption: any) {}

  public init() {
    const instance = new this.CardConstructor();
    const container = document.createElement('div');
    container.id = 'test-id';
    document.body.appendChild(container);
    instance.$mount('#test-id');
  }
}
