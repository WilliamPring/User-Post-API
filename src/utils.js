

export const genericCallback = (err, data, res) => {
    if(err && err.statusCode) {
        res.status(err.statusCode).send(err)
    } else {
        res.status(200).json(data)
    }
};