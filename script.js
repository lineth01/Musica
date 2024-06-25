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
        // Guardo la lista de canciones
        const songList = res.data.songs

        const trackList = document.getElementById('track-list')

        // recorriendo la lista de canciones
        songList.map((song) => {
            // Por cada canción

            const div = document.createElement('div')
            // div.classList.add('song')
            div.classList.add('main__B__songs__songcita')

            div.innerHTML = `
                <div class="main__B__songs__songcita__titulos">
                    <h2>${song.title}</h2>
                    <h4>${song.author}</h4>
                </div>
                
                <p>${song.duration}</p>
            `

            trackList.appendChild(div)
            
            // console.log(---)
        })
    })