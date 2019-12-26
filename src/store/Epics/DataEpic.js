import { of } from "rxjs";
import { DataActions, failureActionOf, successActionOf } from "../Actions";
import { HttpService } from "../../Services";
import { serverUrl } from "../../Config";
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from "redux-observable";

export default class Epic {
    static GetUsersForApproval = action$ => {
        return action$.pipe(
            ofType(DataActions.GET_USERS_FOR_APPROVAL),
            switchMap(({ payload }) => {
                return HttpService.post(`${serverUrl}/data/getUsersForApproval`, payload)
                    .pipe(
                        map(({ response }) => {
                            if (response && response.success) {
                                return {
                                    type: successActionOf(DataActions.GET_USERS_FOR_APPROVAL),
                                    payload: response.response
                                };
                            }
                            else {
                                return {
                                    type: failureActionOf(DataActions.GET_USERS_FOR_APPROVAL),
                                    payload: response.error
                                }
                            }
                        }),
                        catchError(a => {
                            return of({
                                type: failureActionOf(DataActions.GET_USERS_FOR_APPROVAL),
                                payload: a.message
                            });
                        })
                    )

            })
        );
    };
    static HanldeUserRequest = action$ => {
        return action$.pipe(
            ofType(DataActions.HANDLE_USER_REQUEST),
            switchMap(({ payload }) => {
                return HttpService.post(`${serverUrl}/data/handleUserRequest`, payload)
                    .pipe(
                        map(({ response }) => {
                            if (response && response.success) {
                                return {
                                    type: successActionOf(DataActions.HANDLE_USER_REQUEST),
                                    payload: payload.userID
                                };
                            }
                            else {
                                return {
                                    type: failureActionOf(DataActions.HANDLE_USER_REQUEST),
                                    payload: response.error
                                }
                            }
                        }),
                        catchError(a => {
                            return of({
                                type: failureActionOf(DataActions.HANDLE_USER_REQUEST),
                                payload: a.message
                            });
                        })
                    )

            })
        );
    };
    static GetAllUsers = action$ => {
        return action$.pipe(
            ofType(DataActions.GET_ALL_USERS),
            switchMap(() => {
                return HttpService.get(`${serverUrl}/data/getAllUsers`)
                    .pipe(
                        map(({ response }) => {
                            if (response && response.success) {
                                return {
                                    type: successActionOf(DataActions.GET_ALL_USERS),
                                    payload: response.users
                                };
                            }
                            else {
                                return {
                                    type: failureActionOf(DataActions.GET_ALL_USERS),
                                    payload: response.error
                                }
                            }
                        }),
                        catchError(a => {
                            return of({
                                type: failureActionOf(DataActions.GET_ALL_USERS),
                                payload: a.message
                            });
                        })
                    )

            })
        );
    };
    static HandleUserListAction = action$ => {
        return action$.pipe(
            ofType(DataActions.HANDLE_USER_LIST_ACTION),
            switchMap(({ payload }) => {
                return HttpService.post(`${serverUrl}/data/handleUserListAction`, payload)
                    .pipe(
                        map(({ response }) => {
                            if (response && response.success) {
                                return {
                                    type: successActionOf(DataActions.HANDLE_USER_LIST_ACTION),
                                    payload: response.response || payload
                                };
                            }
                            else {
                                return {
                                    type: failureActionOf(DataActions.HANDLE_USER_LIST_ACTION),
                                    payload: response.error
                                }
                            }
                        }),
                        catchError(a => {
                            return of({
                                type: failureActionOf(DataActions.HANDLE_USER_LIST_ACTION),
                                payload: a.message
                            });
                        })
                    )

            })
        );
    };
    static GetAllOnGoingRides = action$ => {
        return action$.pipe(
            ofType(DataActions.GET_ALL_ONGOING_RIDES),
            switchMap(() => {
                return HttpService.get(`${serverUrl}/data/allOnGoingRides`)
                    .pipe(
                        map(({ response }) => {
                            if (response && response.success) {
                                return {
                                    type: successActionOf(DataActions.GET_ALL_ONGOING_RIDES),
                                    payload: response.onGoingRides
                                };
                            }
                            else {
                                return {
                                    type: failureActionOf(DataActions.GET_ALL_ONGOING_RIDES),
                                    payload: response.error
                                }
                            }
                        }),
                        catchError(a => {
                            return of({
                                type: failureActionOf(DataActions.GET_ALL_ONGOING_RIDES),
                                payload: a.message
                            });
                        })
                    )

            })
        );
    };
}