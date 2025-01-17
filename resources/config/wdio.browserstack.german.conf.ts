import { config as defaultConfig } from "./wdio.browserstack.conf";
import * as _ from "lodash";

const overrides = {
    // paylater button is not eligible in Germany
    exclude: ["tests/**/*paylater*.test.ts"],
    commonCapabilities: {
        "browserstack.geoLocation": "DE",
        locale: "de",
        language: "de",
    },
};

const tmpConfig = _.defaultsDeep(overrides, defaultConfig);

tmpConfig.capabilities.forEach(function (caps: { [x: string]: unknown }) {
    for (const i in tmpConfig.commonCapabilities)
        caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

export const config = tmpConfig;
