const http = require('./jwtc');

const url = ' http://127.0.0.1:8000/api/tag/1000';



const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU4OTYzMjQ5OCwiZXhwIjoxNTg5NjM2MDk4LCJuYmYiOjE1ODk2MzI0OTgsImp0aSI6IkhSdzVFR3ZDUmFqaHdLRUwiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.ftSh7g224Q8KUGhIlvNEgvY42KuLbMlieGSIB_BH6GM';


body = {
    name: 'この前のアレ',
    profit_type: 1,
    comment: '思い出した'
};

http(url, 'PUT', token, body)
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
