
if (typeof TextEncoder === "undefined") {
    const { TextEncoder, TextDecoder } = require("util");
    global.TextEncoder = TextEncoder;
    global.TextDecoder = TextDecoder;
}


const chai = require('chai');
const chaiHttp = require('chai-http');
const { mount } = require('@vue/test-utils');
const Login = require('../../src/views/login.vue');

chai.use(chaiHttp);

describe('Login.vue', () => {
    it('should login a user and update the store', async () => {
        const wrapper = mount(Login);

    });
});

let cleanup;

beforeEach(() => {
    cleanup = jsdomGlobal();
});

afterEach(() => {
    cleanup();
});

describe('Login.vue', () => {
    it('should login a user and update the store', async () => {
        const wrapper = mount(Login);


    });
});