import { cache } from 'react'

const promiseTimeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const getUserContext = cache(async (uid: string) => {
    console.log('getUserContext', uid)
    await promiseTimeout(1)
    return {
        uid,
        name: Math.floor(Math.random() * 100) + '-User-' + uid
    }
})