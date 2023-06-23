import React from "react";
import { Helmet } from "react-helmet";

export const HelmetComponent = () => {
    return (
        <div className="application">
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:title" content="Agri Brokers Ukraine" />
                <meta property="og:site_name" content="Agri Brokers Ukraine" />
                <meta property="og:url" content="https://agribrokers.com.ua/" />
                <meta property="og:image" content="./favicon.ico" />
                <meta
                    property="og:description"
                    content="Helps farmers to sell their crops profitably on the best terms for them."
                />
                <meta name="description" content="Created by Kolya Svarshik" />
                <title>Agri Brokers Ukraine</title>
            </Helmet>
        </div>
    )
}




