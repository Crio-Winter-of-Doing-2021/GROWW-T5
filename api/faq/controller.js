const models = require('./models');

exports.getFAQ = async (req, res) => {
    // #swagger.tags = ['faq']
    try {
        var faq = await models.FAQ.findById(req.params.id);
        if (faq) {
            res.status(200).json(faq);
        } else {
            res.status(404).json({msg: 'Not Found'});
        }
    } catch (err) {
        res.status(500).json({msg: err.message});
    }
    
}

exports.getAllFAQ = async (req, res) => {
    // #swagger.tags = ['faq']
    // Should have the cahtbot quality
    res.json({
        faqs: []
    })
}

exports.raiseFAQTicket = async (req, res) => {
    // #swagger.tags = ['faq']
    try {
        const newFaq = new models.FAQ({
            question: req.body.question
        });
        await newFaq.save();
        res.status(201).json({msg: "Created"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

exports.updateFAQ = async (req, res) => {
    // #swagger.tags = ['faq']
    try {
        var faq = await models.FAQ.findByIdAndUpdate(
            req.params.id,
            {   
                question: req.body.question,
                answer: req.body.answer,
                tags: req.body.tags,
                status: "Answered"
            }
        );
        res.status(200).json({msg: "Updated"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}