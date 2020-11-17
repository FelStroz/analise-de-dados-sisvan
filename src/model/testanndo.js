// const fetch = require('node-fetch');
// async function mandar () {
//    let result = await fetch("https://www.instagram.com/web/comments/2373016668031887535/add/", {
//     "headers": {
//         "accept": "*/*",
//         "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
//         "cache-control": "no-cache",
//         "content-type": "application/x-www-form-urlencoded",
//         "pragma": "no-cache",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "x-csrftoken": "i5rL4m6GsLP5uhCfNohCSz5m6J0x9ICG",
//         "x-ig-app-id": "936619743392459",
//         "x-ig-www-claim": "hmac.AR0rbMSpckDblpf3dtYFSMcYP0X5g7e_VrohQdT4GsYUoA2F",
//         "x-instagram-ajax": "c3bb75ef7ad8",
//         "x-requested-with": "XMLHttpRequest",
//     },
//     "referrer": "https://www.instagram.com/p/CDuphY4Hyiv/",
//     "referrerPolicy": "no-referrer-when-downgrade",
//     "body": "comment_text=asdasd&replied_to_comment_id=",
//     "method": "POST",
//     "mode": "cors"
// });
//    console.log(await result.text());
// }
//
// setTimeout(async function(){
//     await mandar();
//     console.log("mandou!");
// },6000);
// mandar();
//
// setInterval(function(){
//     let text = document.getElementsByClassName("Ypffh");
//     text[0].value = "@pedroivoia @georgebgadelha";
//     let button = document.getElementsByClassName("sqdOP yWX7d y3zKF ");
//     button[0].disabled = false;
//     button[0].click();
// }, 5000);
// setInterval(function() {text = document.getElementsByClassName("Ypffh");
//     text[0].click();
//     text[0].focus();
//     text[0].value = "@pedroivoia @georgebgadelha";
//     text[0].innerHTML = "@pedroivoia @georgebgadelha";
//     button = document.getElementsByClassName("sqdOP yWX7d y3zKF ");
//     button[0].disabled = false;
//     button[0].click();
// },3000);

// async function getData() {
//     let result = await fetch("https://sisaps.saude.gov.br/sisvan/relatoriopublico/consumoalimentar", {
//         "headers": {
//             "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
//             "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
//             "cache-control": "no-cache",
//             "pragma": "no-cache",
//             "sec-fetch-dest": "document",
//             "sec-fetch-mode": "navigate",
//             "sec-fetch-site": "same-origin",
//             "sec-fetch-user": "?1",
//             "upgrade-insecure-requests": "1",
//         },
//         "referrerPolicy": "no-referrer-when-downgrade",
//         "body": null,
//         "method": "GET",
//         "mode": "cors"
//     });
//
//     console.log(await result.text());
// }
// getData();

// let array1 = ['idade', 'quantidade'];
// let array2 = [[11, 23], [32, 56], [34, 34]];
//
// function bumba(headers, information) {
//     let finalArray = [];
//
//     for (let values of information) { // [42, 54]
//         let object = {};
//         for (let headerKey of Object.keys(headers)) {
//             let header = headers[headerKey];
//             object[header] = values[headerKey] // {idade}
//         }
//         finalArray.push(object);
//     }
//     return finalArray;
// }
//
// console.log(bumba(array1, array2));


// async function papapa() {
//     let result = await fetch("https://gitlab.com/Mafralpm/tutoria-git-alias/notes?target_id=70384749&target_type=issue", {
//         "headers": {
//             "accept": "application/json, text/plain, */*",
//             "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
//             "cache-control": "no-cache",
//             "content-type": "application/json;charset=UTF-8",
//             "pragma": "no-cache",
//             "sec-fetch-dest": "empty",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-site": "same-origin",
//             "x-csrf-token": "Bd+O+pzeFOQXji4LmZmQ0nfROA1atGRFxtt9LM/zwcBkcIYIYwPerZ5YtO3x8kdm6INjkI46t67nfeJipuBAlw==",
//             "x-requested-with": "XMLHttpRequest",
//         },
//         "referrer": "https://gitlab.com/Mafralpm/tutoria-git-alias/-/issues/2",
//         "referrerPolicy": "origin-when-cross-origin",
//         "body": "{\"note\":{\"noteable_type\":\"Issue\",\"noteable_id\":70384749,\"note\":\"/spend 2h\\n\"}}",
//         "method": "POST",
//         "mode": "cors"
//     });
//     return result;
// }
//
// papapa().then((res) => {
//     console.log(res);
// });
