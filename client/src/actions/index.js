export const Types = {
    START_GET_PHONES : 'START_GET_PHONES',
    SUCCESS_GET_PHONES : 'SUCCESS_GET_PHONES',
    FAILED_GET_PHONES : 'FAILED_GET_PHONES'
}

export const startGetPhones = payload => ({
    type: Types.START_GET_PHONES,
    ...payload
})

export const successGetPhones = payload => ({
    type: Types.SUCCESS_GET_PHONES,
    ...payload
})

export const failedGetPhones = payload => ({
    type: Types.FAILED_GET_PHONES,
    ...payload
})
