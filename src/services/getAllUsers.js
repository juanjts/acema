const getAllUsers = async (email, password) => {
    try {
        const response = await fetch('https://randomuser.me/api/0.8/?results=100');
        const data = await response.json();
        const users = data.results;
        return users
    } catch (error) {
        return [];
    }
};

export default getAllUsers;