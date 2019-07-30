import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {ErrorHandlerService} from '../../shared/services/error-handler.service';

@Injectable()
export class HTTPStatus {
    private requestInFlight: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {
    }

    setHttpStatus(inFlight: boolean) {
        this.requestInFlight.next(inFlight);
    }

    getHttpStatus(): Observable<boolean> {
        return this.requestInFlight.asObservable();
    }
}

@Injectable()
export class APIInterceptor implements HttpInterceptor {

    constructor(private status: HTTPStatus, private errorHandlerService: ErrorHandlerService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.status.setHttpStatus(true);

        return next.handle(this.handlerRequest(request))
            .pipe(
                map((event: any) => {
                    return event;
                }),
                catchError((error: HttpErrorResponse) => {
                    this.errorHandlerService.error = error;
                    this.errorHandlerService.execute();
                    throw error;
                }),
                finalize(() => {
                    this.status.setHttpStatus(false);
                })
            );
    }

    private handlerRequest(request: HttpRequest<any>) {
        let token = localStorage.getItem(environment.localStorage.token);

        return request.clone({
            url: environment.apiUrl + request.url,
            headers: request.headers.set('Authorization', 'Bearer ' + token)
        });
    }
}
