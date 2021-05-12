import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Canvas from './Canvas';
import * as serviceWorker from './serviceWorker';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(
<html>

<head>
    <title>Basic Embed</title>

    <script src="./quicksight-embedding-js-sdk.min.js"></script>
    <script type="text/javascript">
        var dashboard;

        function embedDashboard() {
            var containerDiv = document.getElementById("embeddingContainer");
            var options = {
                // replace this dummy url with the one generated via embedding API
                url: "https://us-west-2.quicksight.aws.amazon.com/embed/bea48d3f0b7549aba7b75693d2bbef43/dashboards/a3dce800-013d-4f24-841e-be90e9261dfb?code=AYABeLqbF0jl6nKdIsfHwE9IUPwAAAABAAdhd3Mta21zAEthcm46YXdzOmttczp1cy13ZXN0LTI6OTAwNjQ5NDI3MTk2OmtleS9iYzAzMTYzMy0xYzJiLTRlMzEtYWM5ZC0yODQ2NDkwZjEyM2YAuAECAQB4a5Vy65_NRyq3IDuV8LaXpVn7UOrMGtsATSOtV23nDYwBF-ExXUO4Ciw6PJ1IHPP5pQAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDEd97nfHLyvuKAUA3wIBEIA7r0dInIfcSHOAWqNpOrSSii5Tdww-zd8ygmWn4_9Lo09vjgRd7SYjuAUXwl1cv2tC1ojNRI5HYIeTNAwCAAAAAAwAABAAAAAAAAAAAAAAAAAAAsvn3MxAcb_tIfNhw-8ymv____8AAAABAAAAAAAAAAAAAAABAAAA5mJ2MjX9WRaPoWkU1TUin6gvpKjetM_X1w54HfK3KiNiIStTTwZyVy39Jk3XoTemQWlg10ZuuHI-dEXLQKlV6wS6epqiZpGm35zP-ICf0S2XVcL2ygle30AG4r_F88v9uEztaTrwXRStg_hFvfGwmN5HKOAx0oXVBGt6fLorLTfMpuvZ4K34pmHF-kAnbk9bRy12eRYyQhN87MNP28uKa3ayeuxEd79I4lE7D3eDo5NKRxE3p2R29TqTzVLcNrwCj8WAMN_y2QOruaAytHF4WUY0Lpd9V0oBy2zGJWq30c0H6ZjafpeGLF7CAdNPTgKhuUsT9jc9dQ%3D%3D&identityprovider=quicksight&isauthcode=true&undoRedoDisabled=true&resetDisabled=true",  
                container: containerDiv,
                scrolling: "no",
                height: "700px",
                width: "1000px",
                footerPaddingEnabled: true
            };
            dashboard = QuickSightEmbedding.embedDashboard(options);
        }
    </script>
</head>

<body onload="embedDashboard()">
    <div id="embeddingContainer"></div>
</body>

</html>

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
