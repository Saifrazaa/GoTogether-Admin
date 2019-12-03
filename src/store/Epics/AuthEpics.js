import { of } from "rxjs";
import { AuthActions, failureActionOf, successActionOf } from "../actions";
import { HttpService } from "../../Services";
import { serverUrl } from "../../Config";
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from "redux-observable";

export default class Epic {
    static Login = action$ => {
        return action$.pipe(
            ofType(AuthActions.LOGIN),
            switchMap(({ payload }) => {
                console.log("Auth Login Epic", payload)
                return HttpService.post(`${serverUrl}/auth/login`, payload)
                    .pipe(
                        map(({ response }) => {
                            console.log("response",response)
                            if (response && response.success) {
                                return {
                                    type: successActionOf(AuthActions.LOGIN),
                                    payload
                                };
                            }
                            else {
                                return {
                                    type: failureActionOf(AuthActions.LOGIN),
                                    payload: response.error
                                }
                            }
                        }),
                        catchError(a => {
                            console.log("error",a.message)
                            return of({
                                type: failureActionOf(AuthActions.LOGIN),
                                payload: a.message
                            });
                        })
                    )

            })
        );
    };
}