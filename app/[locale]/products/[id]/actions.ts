'use server'
export async function myAction(formData: FormData) {
    // ...
    console.log('myAction', formData.get('user'))
}