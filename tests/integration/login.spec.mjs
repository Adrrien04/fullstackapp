import chai from 'chai';
import chaiHttp from 'chai-http';
import jsdomGlobal from 'jsdom-global';
import { mount } from '@vue/test-utils';

chai.use(chaiHttp);
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