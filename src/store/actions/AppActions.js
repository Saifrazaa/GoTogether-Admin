export default class AppActions {
  static CLICKED = "CLICKED";

  static buttonClicked(payload) {
    console.log(payload)
    return {
      type: AppActions.CLICKED,
      payload: payload
    };
  }
}
