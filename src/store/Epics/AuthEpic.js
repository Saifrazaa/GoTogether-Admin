import { of } from "rxjs";
import { AuthActions, failureActionOf, successActionOf } from "../Actions";
import { HttpService } from "../../Services";
import { serverUrl } from "../../Config";
import { switchMap, map, catchError } from 'rxjs/operators';
import { ofType } from "redux-observable";

export default class Epic {
    static Login = action$ => {
        return action$.pipe(
            ofType(AuthActions.LOGIN),
            switchMap(({ payload }) => {
                return HttpService.post(`${serverUrl}/auth/login`, payload)
                    .pipe(
                        map(({ response }) => {
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