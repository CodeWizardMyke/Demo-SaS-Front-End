
export default function userInitials({userName}){
    if(!userName) return null;

    const initials =  userName.split(' ').slice(0,2).map((name) => name.charAt(0).toUpperCase()).join(' ');

    return initials
};