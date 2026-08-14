
export default function passwordCheck (old,nPass,cPass){
    if(!nPass.trim() ) return {success:false,error:"Preencha o campo de nova senha para proseguir."};
    if(!cPass.trim() ) return {success:false,error:"Campo de confirmação de senha é necessária para sua segurança"};
    if(!old.trim() ) return {success:false,error:"Informe sua senha anterior."};

    if(nPass.trim() === cPass.trim() ){
        return {success:true,error:null};
    }else{
        return {success:false,error:"os campos nova senha e confirme senha são diferentes."};
    }
}