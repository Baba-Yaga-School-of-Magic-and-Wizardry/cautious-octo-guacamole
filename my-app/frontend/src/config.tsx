import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";
import Session from "supertokens-auth-react/recipe/session";

export function getApiDomain() {
    const apiUrl = process.env.REACT_APP_API_URL || `https://3001-babayagasch-cautiousoct-l0z8hclctb6.ws-eu107.gitpod.io/`;
    return apiUrl;
}

export function getWebsiteDomain() {
    const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `https://3000-babayagasch-cautiousoct-l0z8hclctb6.ws-eu107.gitpod.io/`;
    return websiteUrl;
}

export const SuperTokensConfig = {
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: getApiDomain(),
        websiteDomain: getWebsiteDomain(),
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [EmailPassword.init(), Session.init()],
};

export const recipeDetails = {
    docsLink: "https://supertokens.com/docs/emailpassword/introduction",
};

export const PreBuiltUIList = [EmailPasswordPreBuiltUI];

export const ComponentWrapper = (props: { children: JSX.Element }): JSX.Element => {
    return props.children;
};
