const Google_Key = "AIzaSyApjQ1G_Zdf5E4s99gFwVrHuKKdscGMbPk";

export const G_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${Google_Key}`;

const Auto_complete_api = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query";