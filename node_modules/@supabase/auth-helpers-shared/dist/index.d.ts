import { User } from '@supabase/supabase-js';
export { ApiError, User } from '@supabase/supabase-js';
import { ServerResponse } from 'http';
import { NextApiResponse } from 'next';
import { NextRequest as NextRequest$1, NextResponse } from 'next/server';
import * as jose from 'jose';

interface ErrorPayload {
    type?: string;
    message: string;
    source?: string;
}
declare class AuthHelperError extends Error {
    errorType: string;
    source: string;
    constructor(message: string, errorType: string);
    toObj(): ErrorPayload;
    toString(): string;
}
declare class CookieNotFound extends AuthHelperError {
    constructor();
}
declare class CookieNotSaved extends AuthHelperError {
    constructor();
}
declare class AccessTokenNotFound extends AuthHelperError {
    constructor();
}
declare class RefreshTokenNotFound extends AuthHelperError {
    constructor();
}
declare class ProviderTokenNotFound extends AuthHelperError {
    constructor();
}
declare class CookieNotParsed extends AuthHelperError {
    constructor();
}
declare class CallbackUrlFailed extends AuthHelperError {
    constructor(callbackUrl: string);
}
declare class JWTPayloadFailed extends AuthHelperError {
    constructor();
}

declare type UserFetcher = (url: string) => Promise<{
    user: User | null;
    accessToken: string | null;
    error?: string | null;
}>;
declare type UserState = {
    user: User | null;
    accessToken: string | null;
    error?: ErrorPayload;
    isLoading: boolean;
    checkSession: () => Promise<void>;
};
interface CookieOptions {
    name?: string;
    lifetime?: number;
    domain?: string;
    path?: string;
    sameSite?: string;
}

interface RequestAdapter {
    getHeader(name: string): HeaderTypes;
    setRequestCookie(name: string, value: string): void;
}
interface ResponseAdapter {
    getHeader(name: string): HeaderTypes;
    setHeader(name: string, value: number | string | string[]): this | Response;
}

declare type NextRequest = NextApiRequest | (IncomingMessage & {
    cookies: NextApiRequestCookies;
});
declare class NextRequestAdapter$1 implements RequestAdapter {
    private req;
    constructor(request: NextRequest);
    setRequestCookie(name: string, value: string): void;
    getHeader(name: string): string | string[] | undefined;
}
declare class NextResponseAdapter$1 implements ResponseAdapter {
    private res;
    constructor(response: NextApiResponse | ServerResponse);
    getHeader(name: string): string | number | string[] | undefined;
    setHeader(name: string, value: string): this;
}

declare class NextRequestAdapter implements RequestAdapter {
    private req;
    constructor(request: NextRequest$1);
    setRequestCookie(name: string, value: string): void;
    getHeader(name: string): string | null;
}
declare class NextResponseAdapter implements ResponseAdapter {
    private res;
    constructor(response: NextResponse);
    getHeader(name: string): string | null;
    setHeader(name: string, value: string): this;
}

declare class SvelteKitRequestAdapter implements RequestAdapter {
    private req;
    constructor(request: Request);
    setRequestCookie(name: string, value: string): void;
    getHeader(name: string): string | null;
}
declare class SvelteKitResponseAdapter implements ResponseAdapter {
    private res;
    constructor(response: Response);
    getHeader(name: string): string | null;
    setHeader(name: string, value: string | string[]): Response;
}

declare const COOKIE_OPTIONS: {
    name: string;
    lifetime: number;
    domain: string;
    path: string;
    sameSite: string;
};
declare const TOKEN_REFRESH_MARGIN = 10;
declare const RETRY_INTERVAL = 2;
declare const MAX_RETRIES = 10;
declare const ENDPOINT_PREFIX = "/api/auth";

declare const jwtDecoder: (jwt: string) => jose.JWTPayload;

declare type Cookie = {
    name: string;
    value: string;
    maxAge: number;
    domain?: string;
    path?: string;
    sameSite?: string;
};
interface Objs {
    [key: string]: string | null;
}
declare const parseCookie: (str: string | null) => Objs;
/**
 * Set one or more cookies.
 */
declare function setCookies(req: RequestAdapter, res: ResponseAdapter, cookies: Array<Cookie>): void;
/**
 * Set one or more cookies.
 */
declare function setCookie(req: RequestAdapter, res: ResponseAdapter, cookie: Cookie): void;
declare function deleteCookie(req: RequestAdapter, res: ResponseAdapter, name: string): void;

export { AccessTokenNotFound, AuthHelperError, COOKIE_OPTIONS, CallbackUrlFailed, CookieNotFound, CookieNotParsed, CookieNotSaved, CookieOptions, ENDPOINT_PREFIX, ErrorPayload, JWTPayloadFailed, MAX_RETRIES, NextRequestAdapter$1 as NextRequestAdapter, NextRequestAdapter as NextRequestMiddlewareAdapter, NextResponseAdapter$1 as NextResponseAdapter, NextResponseAdapter as NextResponseMiddlewareAdapter, ProviderTokenNotFound, RETRY_INTERVAL, RefreshTokenNotFound, SvelteKitRequestAdapter, SvelteKitResponseAdapter, TOKEN_REFRESH_MARGIN, UserFetcher, UserState, deleteCookie, jwtDecoder, parseCookie, setCookie, setCookies };
