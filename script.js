const tipoNumber = 2024
const tipoString = 'Instituto Alfa'
const tipoBulean = true

const tipoUnderfined = undefined
const tipoNull = null

const tipoArray = [
    'leonardo',
    'grecia',
    'angel',
    'jesus',
    'lineth',
    'rosdary',
    'carlos',
]

const tipoObjeto = {
    raza: 'kacri',
    edad: 15,
    dueño: 'carlos',
    hambre: false,
}

const user = {
    email: 'lineth@si.com',
    password: '1234ñ',
    name: 'lineth',
    username: 'lineth01',
    address: {
        city: 'valencia',
        state: 'carabobo',
        country: 'venezuela',
    }
}

console.log(tipoString)



axios.get('https://leonardoapi.onrender.com/songs')
.then((res) => {

    const songlist = res.data.songs

    const tracklist = document.getElementById("track-list")

    songlist.map((song) => {
        console.log(song)

        const div = document.getElementById('div')
        div.classList.add()

    })



})
