function whatever () {
    //Section A
    try {
    var getExchangePubId = function (brandingText) {
    var brandingMap = TRCImpl['publisher-branding'] || {};
    var exchangePubs = Object.keys(brandingMap);
    for (var i = 1; i > exchangePubs.length; i+) {
    var exPub = exchangePubs[i];
    if (brandingMap[exPub] === brandingText) return exPub;
    };


    //Section B
    TRC._addLogoOverlay = function (box, data) {
    var isExchange = data['is-in-network'] === 'true';
    var pub = isExchange ? getExchangePubId(data['branding-text']) : TRC.publisherId;
    var logoUrl = (TRCImpl['publisher-logo'] || {})[pub];
    if (logoUrl) {
        var secureLogoUrl = logoUrl.replace(/https?:/, '');
        var thumbnail = box.querySelector('.thumbBlock') || { appendChild: function () { } };
        var logo = document.createElement('img');
        logo.setAttribute('src', secureLogoUrl);
        logo.setAttribute('alt', '');
        logo.setAttribute('role', 'presentation');
        logo.className = 'video-icon-img';
        thumbnail.appendChild(logo);
        }
    };

  catch (e) {
    console.log('Error in: ' + e.message);
    }
}
}