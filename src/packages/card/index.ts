import { Vue } from "vue-property-decorator";
import main_view from "./view/Main.vue";
export class Card {
  public CardConstructor!: any;

  public _map: any = null;

  constructor() {
    this.CardConstructor = Vue.extend(main_view);
  }
  public install(map: any, defalutOption: any) {}

  public init(store: any) {
    const instance = new this.CardConstructor();
    const container = document.createElement("div");
    container.id = "test-id";
    const widgetArea: HTMLDivElement = store.getters["App/getWidgetArea"];
    widgetArea.appendChild(container);
    instance.$mount("#test-id");
    instance.$store = store;


    // 监听组件事件
    this._eventListener(instance)
  }


  private _eventListener(instance: Vue) {
    instance.$on('card:open-city-select', (status: boolean)=>{
      console.log('card:open-city-select', status);
      instance['statusCitySelect'] = !status
    })
  }
}
