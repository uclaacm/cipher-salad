var SERVER = 'https://romantic-visvesvaraya-10fce2.netlify.app';
if (process && process.env && process.env.NODE_ENV === 'development')
    SERVER = 'localhost:3000';

export { SERVER };