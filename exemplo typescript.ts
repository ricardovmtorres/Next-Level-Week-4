type User = {
    name: string;
    age: string;
    address: {
        city: string;
        uf: string;
    }
}

function showUserInfo(user: User) {
    //ERROR nao existe city em user, só address.city
    //return `Welcome, ${user.name} - ${user.age}. Cidade: ${user.city}`; 
    return `Welcome, ${user.name} - ${user.age}. Cidade: ${user.address.city}, UF: ${user.address.uf}`;
}

//Adicionar RTCIceCandidatePairChangedEvent, estado usuario nessa mensagem