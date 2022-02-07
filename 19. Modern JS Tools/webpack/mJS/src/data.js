const users = [
    {name: 'mario', premium: true },
    {name: 'Beji', premium: false },
    {name: 'sven', premium: true },
    {name: 'jakiro', premium: false },
    {name: 'peach', premium: true },
];

const getPremUsers = (users) => {
    return users.filter(user => user.premium);
};

export { getPremUsers, users as default };
