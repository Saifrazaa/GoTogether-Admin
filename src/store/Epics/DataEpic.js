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
}