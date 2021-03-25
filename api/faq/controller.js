const models = require('./models');
const Context = require('../utils/context');

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

    if (req.query.message) {
        const faqs = await models.FAQ.find({$text: {$search: req.query.message}})
            .sort( { score: { $meta: "textScore" } } )
            .limit(5);

        if (faqs.length > 0) {
            res.json({
                faqs: faqs
            })
        } else {
            const contextManager = new Context();
            const context = await contextManager.generateContext(req);
            const tags = await contextManager.mapContextToTags(context);
            console.log(tags);
            const faqs = await models.FAQ.find().all('tags', tags)
                .limit(5);
            if (faqs.length > 0) {
                res.json({
                    faqs: faqs
                })
            } else {
                res.status(200);
            }
            
        }
    } else {
        const contextManager = new Context();
        const context = await contextManager.generateContext(req);
        const tags = await contextManager.mapContextToTags(context);
        console.log(tags);
        const faqs = await models.FAQ.find().all('tags', tags);

        res.json({
            faqs: faqs
        })
    }
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