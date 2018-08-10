// 填充请求参数
function sendRequest(url){
    // let ua = navigator.userAgent,
    //     os = '';
    // // 添加系统参数
    // if ((/iPhone|iPad/ig).test(ua)){
    //     os = 'ios';
    // }else{
    //     os = 'android';
    // }
    // let char = '?';
    // if (/\?/.test(url)){
    //     char = '&';
    // }
    //url += `${char}os=${os}&_=${+new Date()}`;
    return fetch(url);
}


//推荐页面数据
export const getRecommendList = ()=> {
    return sendRequest('https://www.easy-mock.com/mock/5af661177138d57c901e916b/request1/recommend')
}
//音乐馆数据
export const getMusicList = ()=> {
    return sendRequest('https://www.easy-mock.com/mock/5af661177138d57c901e916b/request1/rankList')
}
//歌曲数据
export const getSongList = ()=> {
    return sendRequest('https://www.easy-mock.com/mock/5b6b96917a1a0e6a42b3bd04/example/mock')
}