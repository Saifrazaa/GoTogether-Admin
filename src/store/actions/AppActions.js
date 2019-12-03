export default class AppActions {
  static MENU_CHANGE = "MENU_CHANGE";
  static onChangeMenu(payload) {
    return {
      type: this.MENU_CHANGE,
      payload
    }
  }
}
