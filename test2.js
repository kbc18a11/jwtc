const axios = require('axios');


const promiseFun1 = async () => {
    const url = "http://ec2-3-14-81-178.us-east-2.compute.amazonaws.com/api/tag";
    return axios.get(url);
};

//Promiseを返す
console.log('promiseFun1', promiseFun1());

const promiseFun2 = async () => {
    const url = "http://ec2-3-14-81-178.us-east-2.compute.amazonaws.com/api/tag";

    const result = await axios.get(url);
    console.log(result);
    return result;
};
//関数内のawaitまでは、同期処理されるが、それ以降と呼び出し元は非同期処理となり、Promiseを返す。
console.log('promiseFun2', promiseFun2());


const promiseFun3 = async () => {
    const url = "http://ec2-3-14-81-178.us-east-2.compute.amazonaws.com/api/tag";

    const result = await axios.get(url);
    console.log('promiseFun3', result);
};
//実際にAPIとの通信の結果を表示する
promiseFun3();



const promiseFun4 = async () => {
    const url = "http://ec2-3-14-81-178.us-east-2.compute.amazonaws.com/api/tag";

    const result = await axios.get(url);

    return result;
};

const AnotherFun = async () => {
    const result = await promiseFun4();
    console.log('promiseFun4', result);
    return result;
};
//axiosを使っている関数を別の関数で呼びたい場合の対応方法
AnotherFun();


axios.get('http://ec2-3-14-81-178.us-east-2.compute.amazonaws.com/api/tag')
    .then((res) => {
        console.log('普通のPromiseのように呼び出したパターン',res);
    });
