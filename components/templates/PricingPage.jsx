import Head from "next/head";
import React, { useState } from "react";
import { logResourceLoadError } from "../../modules/logger";
import Script from "next/script";
import MenuTemplateRP from "../MenuTemplateRP";
import BannerRP from "../BannerRP";
import globalConfig from "../../configs/global.json";

export default function PricingPage(props) {
    const { billingNote, currencyOptions, plans, pageName, title, ogTags, bannerProps, menu, customCSSFile, chatBot } = props;

    const [billingPeriod, setBillingPeriod] = useState("Yearly");
    const [currency, setCurrency] = useState(currencyOptions[0]);
    const options = Object.keys(plans);

    const calculateSavings = (planTitle) => {
        if (billingPeriod !== "Yearly") return null;

        const monthlyPlan = plans.Monthly.find((plan) => plan.title === planTitle);
        const yearlyPlan = plans.Yearly.find((plan) => plan.title === planTitle);

        if (!monthlyPlan || !yearlyPlan) return null;

        const monthlyCostYear = monthlyPlan.price[currency] * 12;
        const yearlyCost = yearlyPlan.price[currency];
        const saved = monthlyCostYear - yearlyCost;

        if (saved <= 0) return null;
        return `$${saved}`;
    };

    let chatBotDFAgent;
    if (chatBot.enableChatBot) {
        chatBotDFAgent = chatBot.chatbotDFAgent ? chatBot.chatbotDFAgent : globalConfig["DEFAULT-CHATBOT-DF-AGENT"];
    }

    let articleWidth =  { width: "100%" } ;

    const setPageCampaignSource = () => {
        if (typeof setChatbotDFAgent === "function") {
            setChatbotDFAgent(chatBotDFAgent);
        }
    };
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta httpEquiv="content-type" content="text/html;charSet=utf-8" />
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="apple-itunes-app" content="app-id=535886823" />

                <meta property="og:title" content={ogTags.og_title} />
                <meta property="og:description" content={ogTags.og_description} />
                <meta property="og:image" content={ogTags.og_image} />
                <meta property="og:url" content={ogTags.og_url} />

                <link href="css/sw/styles3bb8.css?v=AUcpKiC1BEGp1mp0rFd8QrbpJS68UXwJcjvhlicFcHQ1" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
                <link rel="stylesheet" href="css/sw/t1.css" type="text/css" onError={(e) => logResourceLoadError(e.target)} />
                <link href="css/customStyle.css" rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet" type="text/css" onError={(e) => logResourceLoadError(e.target)} />
                <link rel="stylesheet" href="css/newui.css" onError={(e) => logResourceLoadError(e.target)} />
                <link rel="stylesheet" href="css/banner.css" onError={(e) => logResourceLoadError(e.target)} />
                <link rel="stylesheet" href="css/bootstrap.min.css" onError={(e) => logResourceLoadError(e.target)} />
                <link rel="stylesheet" href="css/fa.min.css" onError={(e) => logResourceLoadError(e.target)} />
                <link rel="stylesheet" href="css/rp.css" onError={(e) => logResourceLoadError(e.target)} />
                {chatBot.enableChatBot && <link rel="stylesheet" href="/css/chatbot.css" onError={(e) => logResourceLoadError(e.target)} />}
                <link rel="stylesheet" href="css/templates/PricingPage.css" onError={(e) => logResourceLoadError(e.target)} />
                {customCSSFile && <link href={`css/pages/${pageName}.css`} rel="stylesheet" onError={(e) => logResourceLoadError(e.target)} />}
            </Head>

            <Script src="js/jquery-3.5.1.min.js" strategy="beforeInteractive" onError={(e) => logResourceLoadError(e.target)} />

            {chatBot.enableChatBot && (
                <>
                    <Script
                        src="/js/chatbot.js"
                        onLoad={() => {
                            setPageCampaignSource();
                        }}
                        onError={(e) => logResourceLoadError(e.target)}
                    />
                    <Script src="/js/index.js" onError={(e) => logResourceLoadError(e.target)} />
                    <Script src="https://kit.fontawesome.com/c3c47df7d6.js" onError={(e) => logResourceLoadError(e.target)} />
                </>
            )}

            <div id="page-wrapper">
                <div id="content" className="bgclr0">
                    {menu && <MenuTemplateRP displayPhone={menu.displayPhone} />}
                    <BannerRP bannerProps={bannerProps} />
                    <div className="main-container">
                        <div id="pricing-container">
                            <div className="toggle-container">
                                {options.map((option) => (
                                    <button
                                        key={option}
                                        className={`toggle-button ${billingPeriod === option ? "active" : ""}`}
                                        onClick={() => setBillingPeriod(option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <p className="pricing-note">
                                {billingPeriod === "Monthly" ? billingNote.monthly : billingNote.yearly}
                            </p>
                            <div className="currency-row">
                                <select
                                    name="currency"
                                    id="currency-select"
                                    className="currency-dropdown"
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                >
                                    {currencyOptions.map((code) => (
                                        <option key={code} value={code}>
                                            {code}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="pricing-grid">
                                {plans[billingPeriod].map((plan) => {
                                    const savings = calculateSavings(plan.title);
                                    return (
                                        <div key={plan.title} className="pricing-card">
                                            {savings && <div className="savings-banner">Save {savings} yearly.</div>}
                                            <h2 id={`plan-${plan.title}`}>{plan.title}</h2>
                                            <p className="price">{plan.displayPrice[currency]}</p>

                                            <a
                                                href={`/start-using-traqr?plan=${plan.title}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="pricing-button"
                                                >
                                                {plan.title === "FREE" ? `Sign Up for ${plan.title}` : `Get ${plan.title} NOW`}
                                            </a>

                                            <hr className="pricing-divider" />

                                            <ul>
                                                {plan.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        {chatBot.enableChatBot && <div id="chatContain"></div>}
        </>
    );
}
