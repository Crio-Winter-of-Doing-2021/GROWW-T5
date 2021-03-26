const models = require('./models');
const Context = require('../utils/context');
const { model } = require('mongoose');

exports.getFAQ = async (req, res) => {
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

async function faqBasedOnContext(req, res) {
    const contextManager = new Context();
    const context = await contextManager.generateContext(req);
    const tags = await contextManager.mapContextToTags(context);    
    const faqs = await models.FAQ.find().all('tags', tags)
        .limit(5);
    if (faqs.length > 0) {
        return({
            faqs: faqs,
            reply: null
        });
    } else {
        return({
            faqs: null,
            reply: null
        });
    }
}

exports.getAllFAQ = async (req, res) => {
    try {
        if (req.query.message) {
            const reply = await models.FAQ.find({question: req.query.message});
            if (reply) {
                res.json({
                    faqs: null,
                    reply: reply
                })
                return;
            }
            
            const faqs = await models.FAQ.find({$text: {$search: req.query.message}})
                .sort( { score: { $meta: "textScore" } } )
                .limit(5);

            if (faqs.length > 0) {
                res.json({
                    faqs: faqs,
                    reply: null
                })
            } else {
                var response = await faqBasedOnContext(req);
                res.json(response);
            }
        } else {
            var response = await faqBasedOnContext(req);
            res.json(response);
        }
    } catch (e) {
        console.log(e.name);
        res.status(500).json({msg: "Server Error"})
    }
}

exports.raiseFAQTicket = async (req, res) => {
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