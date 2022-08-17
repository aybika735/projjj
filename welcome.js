import os from "os";
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.version());
// console.log(os.type());

let  type = os.type();
function welcome(){
    if(type === 'Darwin'){
        return "Привет, юзер. Вижу ты зашел с MacOS";
    }if(type === 'Linux' ){
        return "Привет, юзер. Вижу ты зашел с Linux";
    }if(type==='Windows_NT'){
        return "Привет, юзер. Вижу ты зашел с windows";
    }


}
export default welcome;