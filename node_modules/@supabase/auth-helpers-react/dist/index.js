var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  UserProvider: () => UserProvider,
  useUser: () => useUser
});
module.exports = __toCommonJS(src_exports);

// src/components/UserProvider.tsx
var import_react = __toESM(require("react"));
var import_auth_helpers_shared = require("@supabase/auth-helpers-shared");
var import_auth_helpers_shared2 = require("@supabase/auth-helpers-shared");
var networkRetries = 0;
var refreshTokenTimer;
var UserContext = (0, import_react.createContext)(void 0);
var handleError = async (error) => {
  if (typeof error.json !== "function") {
    return String(error);
  }
  const err = await error.json();
  return {
    message: err.msg || err.message || err.error_description || err.error || JSON.stringify(err),
    status: (error == null ? void 0 : error.status) || 500
  };
};
var userFetcher = async (url) => {
  const response = await fetch(url).catch(() => void 0);
  if (!response)
    return { user: null, accessToken: null, error: "Request failed" };
  return response.ok ? response.json() : { user: null, accessToken: null, error: await handleError(response) };
};
var UserProvider = (props) => {
  const {
    supabaseClient,
    callbackUrl = "/api/auth/callback",
    profileUrl = "/api/auth/user",
    user: initialUser = null,
    fetcher = userFetcher,
    autoRefreshToken = true
  } = props;
  const [user, setUser] = (0, import_react.useState)(initialUser);
  const [accessToken, setAccessToken] = (0, import_react.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react.useState)(!initialUser);
  const [error, setError] = (0, import_react.useState)();
  const checkSession = (0, import_react.useCallback)(async () => {
    try {
      networkRetries++;
      const { user: user2, accessToken: accessToken2, error: error2 } = await fetcher(profileUrl);
      if (error2) {
        if (error2 === "Request failed" && networkRetries < import_auth_helpers_shared2.MAX_RETRIES) {
          if (refreshTokenTimer)
            clearTimeout(refreshTokenTimer);
          refreshTokenTimer = setTimeout(checkSession, import_auth_helpers_shared2.RETRY_INTERVAL ** networkRetries * 100);
          return;
        }
        setError(new Error(error2));
      }
      networkRetries = 0;
      if (accessToken2) {
        supabaseClient.auth.setAuth(accessToken2);
        setAccessToken(accessToken2);
      }
      setUser(user2);
      if (autoRefreshToken) {
        if (user2) {
          let timeout = 20 * 1e3;
          const expiresAt = user2.exp;
          if (expiresAt) {
            const timeNow = Math.round(Date.now() / 1e3);
            const expiresIn = expiresAt - timeNow;
            const refreshDurationBeforeExpires = expiresIn > import_auth_helpers_shared2.TOKEN_REFRESH_MARGIN ? import_auth_helpers_shared2.TOKEN_REFRESH_MARGIN : 0.5;
            timeout = (expiresIn - refreshDurationBeforeExpires) * 1e3;
          }
          setTimeout(checkSession, timeout);
        }
      }
      if (!user2)
        setIsLoading(false);
    } catch (_e) {
      const error2 = new import_auth_helpers_shared.CallbackUrlFailed(profileUrl);
      setError(error2.toObj());
    }
  }, [profileUrl]);
  const handleVisibilityChange = async () => {
    if ((document == null ? void 0 : document.visibilityState) === "visible") {
      setIsLoading(true);
      await checkSession();
      setIsLoading(false);
    }
  };
  (0, import_react.useEffect)(() => {
    handleVisibilityChange();
    if (autoRefreshToken)
      window == null ? void 0 : window.addEventListener("visibilitychange", handleVisibilityChange);
    const { data: authListener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
      if (event === "TOKEN_REFRESHED")
        return;
      setIsLoading(true);
      await fetch(callbackUrl, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        credentials: "same-origin",
        body: JSON.stringify({ event, session })
      }).then((res) => {
        if (!res.ok) {
          const error2 = new import_auth_helpers_shared.CallbackUrlFailed(callbackUrl);
          setError(error2);
        }
      });
      await checkSession();
      setIsLoading(false);
    });
    return () => {
      window == null ? void 0 : window.removeEventListener("visibilitychange", handleVisibilityChange);
      authListener == null ? void 0 : authListener.unsubscribe();
    };
  }, []);
  const value = {
    isLoading,
    user,
    accessToken,
    error,
    checkSession
  };
  return /* @__PURE__ */ import_react.default.createElement(UserContext.Provider, __spreadValues({
    value
  }, props));
};
var useUser = () => {
  const context = (0, import_react.useContext)(UserContext);
  if (context === void 0) {
    throw new Error(`useUser must be used within a UserProvider.`);
  }
  return context;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserProvider,
  useUser
});
//# sourceMappingURL=index.js.map