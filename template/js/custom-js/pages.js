// Add your custom JavaScript for storefront pages here.
setTimeout(() => {
    document.querySelector('button.close').addEventListener('click', () => {
        console.log('fui')
        sessionStorage.setItem('modal', 'close')
        return document.querySelector('button.close').removeEventListener('click', null, true)
    })
    if (!sessionStorage.getItem('modal')) {
        $('#exampleModalLong').modal('show')
    }
}, 1200)