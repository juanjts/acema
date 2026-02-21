const getUserAuth = (email, users) => {
    if (!users || !Array.isArray(users)) return null;

    const userFound = users.find((item) => item.user?.email === email);
    
    return userFound?.user ?? null;
};

export default getUserAuth;