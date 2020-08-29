var SERVER = 'https://ciphersalad.uclaacm.com';
if (process && process.env && process.env.NODE_ENV === 'development')
    SERVER = 'http://localhost:3000';

export { SERVER };