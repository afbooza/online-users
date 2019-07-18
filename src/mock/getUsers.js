import data from './mockUsers';

function timeout(ms) {
    return new Promise(data => setTimeout(data, ms));
}

const getUsers = async () => {
    await timeout(2000);
    return data;
}

export default getUsers;