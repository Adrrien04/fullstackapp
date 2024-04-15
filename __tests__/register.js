import { mount } from '@vue/test-utils'
import axios from '../__mocks__/axios'
import Register from '../src/views/register.vue'

jest.mock('axios')

describe('register.vue', () => {
    let wrapper

    beforeEach(() => {
        wrapper = mount(Register)
    })

    it('renders the component', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('registers a user when form is submitted', async () => {
        const mockResponse = {
            data: {
                message: 'User registered successfully'
            }
        }

        axios.post.mockResolvedValueOnce(mockResponse)

        await wrapper.find('#username').setValue('testuser')
        await wrapper.find('#password').setValue('testpassword')
        await wrapper.find('#name').setValue('testname')
        await wrapper.find('#surname').setValue('testsurname')
        await wrapper.find('#email').setValue('testemail@example.com')

        await wrapper.find('form').trigger('submit.prevent')

        expect(axios.post).toHaveBeenCalledWith('http://localhost:3000/register', {
            username: 'testuser',
            password: 'testpassword',
            name: 'testname',
            surname: 'testsurname',
            email: 'testemail@example.com'
        })

        expect(wrapper.vm.message).toBe('User registered successfully')
        expect(wrapper.vm.isSuccess).toBe(true)
    })

    it('handles errors during registration', async () => {
        const mockError = new Error('Registration failed')

        axios.post.mockRejectedValueOnce(mockError)

        await wrapper.find('form').trigger('submit.prevent')

        expect(wrapper.vm.message).toBe('Registration failed')
        expect(wrapper.vm.isSuccess).toBe(false)
    })
})
