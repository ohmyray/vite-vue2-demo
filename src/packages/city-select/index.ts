import { Vue } from "vue-property-decorator";
import main_view from "./view/Main.vue";
export class CitySelect {
  public CardConstructor!: any;

  public _map: any = null;

  constructor() {
    this.CardConstructor = Vue.extend(main_view);
  }
  public install(map: any, defalutOption: any) {}

  public init(store: any) {
    const instance = new this.CardConstructor();
    const container = document.createElement("div");
    container.id = "temp-id";
    const widgetArea: HTMLDivElement = store.getters["App/getWidgetArea"];
    widgetArea.appendChild(container);
    instance.$mount("#temp-id");
    instance.$store = store;
  }
}
