const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'database-1.cuew0g3pupoz.us-east-1.rds.amazonaws.com',
    database: 'music',
    password: 'password',
    port: 5432,
});

const getArtist = (request, response) => {
    pool.query('SELECT * FROM artist', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getArtistById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM artist WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createArtist = (request, response) => {
    const {
        name,
        genre,
        gender,
        origin,
        albums,
        img
    } = request.body

    pool.query('INSERT INTO artist (name, genre, gender, origin, albums, img) VALUES ($1, $2, $3, $4, $5, $6)', [name, genre, gender, origin, albums, img], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Artist added: ${name}, ${genre}, ${gender}, ${origin}, ${albums} ${img}`)
    })
}

const updateArtist = (request, response) => {
    const id = parseInt(request.params.id)
    const {
        name,
        genre,
        gender,
        origin,
        albums,
        img
    } = request.body

    pool.query(
        'UPDATE artist SET name = $1, genre = $2, gender = $3, origin = $4, albums = $5, img = $6 WHERE id = $7',
        [name, genre, gender, origin, albums, img, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Artist modified with ID: ${id}`)
        }
    )
}

const deleteArtist = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM artist WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`Artist deleted with ID: ${id}`)
    })
}


module.exports = {
    getArtist,
    getArtistById,
    createArtist,
    updateArtist,
    deleteArtist,
}