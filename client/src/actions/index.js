export const Types = {
    START_GET_PHONES : 'START_GET_PHONES',
    SUCCESS_GET_PHONES : 'SUCCESS_GET_PHONES'
}

export const startGetPhones = payload => ({
    type: Types.START_GET_PHONES,
    ...payload
})

const successGetPhones = payload => ({
    type: Types.SUCCESS_GET_PHONES,
    ...payload
})

