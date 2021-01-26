import dbConnection from '../../../config/db.js';
import Upload from '../../../models/upload.js';

dbConnection();

export default async(req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const upload = await Upload.find();
                res.status(200).json(JSON.stringify(upload, null, 4));
            } catch (err) {
                res.status(400).json(err);
            }
        break;
        case 'POST':
            const { path, size, type } = req.body;
            try {
                const upload = await Upload.create({ path, size, type });
                res.status(201).json(upload);
            } catch (err) {
                res.status(400).json(err);
            }
        break;
    }
}