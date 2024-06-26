import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const HelmetComponent = () => {
    return (
        <HelmetProvider className="application">
            <Helmet>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    property="og:image"
                    content="https://agribrokers.com.ua/preview_icon.png"
                />
                <meta property="og:image" content="./favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <meta property="og:title" content="Agri Brokers Ukraine" />
                <meta property="og:site_name" content="Agri Brokers Ukraine" />
                <meta property="og:url" content="https://agribrokers.com.ua/" />
                <meta
                    property="og:description"
                    content="Helps farmers to sell their crops profitably on the best terms for them."
                />

                <meta property="image" content="./favicon.ico" />
                <meta property="title" content="Agri Brokers Ukraine" />
                <meta property="site_name" content="Agri Brokers Ukraine" />
                <meta property="url" content="https://agribrokers.com.ua/" />
                <meta
                    property="description"
                    content="Helps farmers to sell their crops profitably on the best terms for them."
                />

                <meta name="designer" content="Created by Nazar Buialo, with love for Agri Brokers Ukraine" />

                <title>Agri Brokers Ukraine</title>
            </Helmet>
        </HelmetProvider>
    )
}




