const posts = [
    {
        userId: 1,
        id: 1,
        title: 'Uno',
        body: 'Uno'
    },
    {
        userId: 1,
        id: 2,
        title: 'Dos',
        body: 'Dos'
    },
    {
        userId: 1,
        id: 3,
        title: 'Tres',
        body: 'Tres'
    },
    {
        userId: 1,
        id: 4,
        title: 'Cuatro',
        body: 'Cuatro'
    },
    {
        userId: 2,
        id: 5,
        title: 'Cinco',
        body: 'Cinco'
    },
    {
        userId: 3,
        id: 6,
        title: 'Seis',
        body: 'Seis'
    },
    {
        userId: 4,
        id: 7,
        title: 'Siete',
        body: 'Siete'
    },
    {
        userId: 4,
        id: 8,
        title: 'Ocho',
        body: 'Ocho'
    },
    {
        userId: 5,
        id: 9,
        title: 'Nueve',
        body: 'Nueve'
    },
    {
        userId: 5,
        id: 10,
        title: 'Diez',
        body: 'Diez'
    }
]

/*
const findPostById = id => {
    const post = posts.find((item) => item.id === id)
    return new Promise((resolve, reject) => {
        
        if (post) {
            resolve(post) 
        } else {
            reject(`No se encontro el post con id: ${id}`)
        }
        
    post ? resolve(post) : reject(`No se encontro el post con id: ${id}`)
    })
}

findPostById(3)
    .then((post) => console.log('Post => ',post))
    .catch((error) => console.error('Error => ', error))
    .finally(() => console.log('Fin de la promesa'))
*/  
    
const findPostById = id => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const post = posts.find((item) => item.id === id)
                post ? resolve(post) : reject(`No se encontro el post con id: ${id}`)
            }, 2000);
        })
    }

const buscar = async () => {
    //const post1 = await findPostById(1)
    //const post2 = await findPostById(2)
    //const post3 = await findPostById(3)
    //console.log("🚀 ~ post ~ :", post1, post2 ,post3)
    const allPost = await Promise.all([findPostById(3)], [findPostById(2)], [findPostById(9)])
    console.log("🚀 ~ allPost ~ :", allPost)
}

buscar ()

