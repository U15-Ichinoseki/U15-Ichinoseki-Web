const GA_MEASUREMENT_ID = 'G-2E22NEMRDF'; // ←ここだけ修正

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', GA_MEASUREMENT_ID);

// Googleタグマネージャ本体の読み込み
if (!window.gtagScriptLoaded) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    window.gtagScriptLoaded = true;
}
