const filterUsersBySearch = (param, data) => {
    if (!data) return [];
    
    const query = param.toLowerCase();

    return data.filter(({ user }) => {
        const firstName = user.name.first.toLowerCase();
        const email = user.email.toLowerCase();

        return firstName.includes(query) || email.includes(query);
    });
}

export default filterUsersBySearch;