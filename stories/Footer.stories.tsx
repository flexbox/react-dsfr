import React from "react";
import { Footer } from "../dist/Footer";
import type { FooterProps } from "../dist/Footer";
import { sectionName } from "./sectionName";
import { getStoryFactory } from "./getStory";
import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";
import placeholder_9x16ImgUrl from "./assets/placeholder.9x16.png";
import placeholder_16x9ImgUrl from "./assets/placeholder.16x9.png";

const { meta, getStory } = getStoryFactory({
    sectionName,
    "wrappedComponent": { Footer },
    "description": `
- [See DSFR documentation](https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pied-de-page)
- [See source code](https://github.com/codegouvfr/react-dsfr/blob/main/src/Footer.tsx)`,
    "argTypes": {
        "brandTop": {
            "control": { "type": null }
        },
        "accessibility": {
            "options": (() => {
                const accessibility = [
                    "non compliant",
                    "partially compliant",
                    "fully compliant"
                ] as const;

                assert<Equals<typeof accessibility[number], FooterProps["accessibility"]>>();

                return accessibility;
            })(),
            "control": { "type": "radio" }
        },
        "websiteMapLinkProps": {
            "control": { "type": null }
        },
        "accessibilityLinkProps": {
            "control": { "type": null }
        },
        "termsLinkProps": {
            "control": { "type": null }
        },
        "personalDataLinkProps": {
            "control": { "type": null }
        },
        "cookiesManagementLinkProps": {
            "control": { "type": null }
        },
        "homeLinkProps": {
            "control": { "type": null }
        }
    }
});

export default meta;

export const Default = getStory({
    "brandTop": (
        <>
            INTITULE
            <br />
            OFFICIEL
        </>
    ),
    "accessibility": "fully compliant",
    "contentDescription": `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur. 
    `,
    "websiteMapLinkProps": {
        "href": "#"
    },
    "termsLinkProps": {
        "href": "#"
    },
    "personalDataLinkProps": {
        "href": "#"
    },
    "cookiesManagementLinkProps": {
        "href": "#"
    },
    "homeLinkProps": {
        "href": "/",
        "title": "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"
    }
});

export const FooterWithVerticalOperatorLogo = getStory({
    "brandTop": (
        <>
            INTITULE
            <br />
            OFFICIEL
        </>
    ),
    "accessibility": "fully compliant",
    "contentDescription": `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur. 
    `,
    "homeLinkProps": {
        "href": "/",
        "title": "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"
    },
    "operatorLogo": {
        "orientation": "vertical",
        "imgUrl": placeholder_9x16ImgUrl,
        "alt": "[À MODIFIER - texte alternatif de l’image]"
    }
});

export const FooterWithHorizontalOperatorLogo = getStory({
    "brandTop": (
        <>
            INTITULE
            <br />
            OFFICIEL
        </>
    ),
    "accessibility": "fully compliant",
    "contentDescription": `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
    eu fugiat nulla pariatur. 
    `,
    "homeLinkProps": {
        "href": "/",
        "title": "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)"
    },
    "operatorLogo": {
        "orientation": "horizontal",
        "imgUrl": placeholder_16x9ImgUrl,
        "alt": "[À MODIFIER - texte alternatif de l’image]"
    }
});
