// ==UserScript==
// @name         Endless Shimarin
// @namespace    https://ebycow.net/
// @version      0.5
// @description  ＼ｱﾂｲ／
// @author       Ebycow <https://ebycow.net>
// @match        *://animestore.docomo.ne.jp/animestore/sc_d_pc?partId=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=docomo.ne.jp
// @grant        none
// ==/UserScript==

function getPartId() {
    const url = window.location.href;
    const name = "partId";
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

(function() {
    'use strict';

        setInterval(() => {
            // シークバーのX軸値を取得
            // console.log( $("#seekBar").css("transform").split('(')[1].toString().split(')')[0].split(",")[0] );

            // ゆるキャン△一期最終話
            if(getPartId() == "21928012"){
                // 再生終了判定
                if(changeStartPositionToMillisecond($("#time").text().replace(":", "m") + "s") == 0){
                    // 二期一話に移動
                    location.href = "?partId="+ "24435001" +"&startPosition=" + "0"

                }
            }

            // ゆるキャン△二期最終話
            if(getPartId() == "24435013"){
                // 再生終了判定
                if(changeStartPositionToMillisecond($("#time").text().replace(":", "m") + "s") == 0){
                    // 一期一話に移動
                    location.href = "?partId="+ "21928001" +"&startPosition=" + "0"

                }

            }

        }, 100);




})();
