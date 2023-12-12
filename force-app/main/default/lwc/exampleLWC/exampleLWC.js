import { LightningElement } from "lwc";

export default class ExampleLWC extends LightningElement {
  connectedCallback() {
    console.log("this is poorly formatted");
  }
}
