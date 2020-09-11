const { Router } = require('express');
const BucketListItem = require('../../models/BucketListItem');

const router = Router();

//Get Request 
router.get('/', async(req, res) => {
    try {
        const bucketListItems = await BucketListItem.find();

        if(!bucketListItems) throw new Error('No bucketListItems');
        const sorted = bucketListItems.sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
        });
        res.status(200).json(sorted);
        
    } catch (error) {
        res.status(500).json({ message:error.message });        
    }
});

//Post Request
router.post('/', async(req, res) => {
    const newBucketListItem = new BucketListItem(req.body);
    try {
        const bucketListItem = newBucketListItem.save();
        if(!bucketListItem) throw new Error('Something went wrong while saving the Bucketlist');
        res.status(200).json(bucketListItem) 
    } catch (error) {
        res.status(500).json({ message:error.message });         
    }
});

//PUT request
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const response = await BucketListItem.findByIdAndUpdate(id, req.body);
        if(!response) throw new Error('Something went wrong while updating');
        const updated = { ...response._doc, ...req.body }
        res.status(200).json(updated); 
    } catch (error) {
        res.status(500).json({ message:error.message });        
    }    
});

//Delete Request
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const removed = await BucketListItem.findByIdAndDelete(id);
        if(!removed) throw new Error('Something went wrong while deleting the BucketItem');
        res.status(200).json(removed)
    } catch (error) {
        res.status(500).json({ message:error.message });        
    }
});

module.exports = router;
