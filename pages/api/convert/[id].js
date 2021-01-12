import dbConnection from '../../../config/db.js';
import Upload from '../../../models/upload.js';

dbConnection();

export default async(req, res) => {
    const {
        query: { _id },
        method
    } = req;

    switch(method) {
        case 'GET':
            try {
                const upload = await Upload.findById(_id);
                res.status(200).json({ upload });
            } catch (err) {
                res.status(400).json(err);
            }
        break;
        case 'DELETE':
            try {
                await Upload.deleteOne({ _id: _id });
                res.status(200).json({ message: 'Deleted' });
            } catch (err) {
                res.status(400).json(err);
            }
        break;
    }
}