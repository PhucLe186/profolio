const { db } = require('../../Config/firebase');
class FeedbackModel {
    static async Feedback() {
        const testimonialsRef= db.ref('testimonials')
        const snapshot= await testimonialsRef.once('value')
        if(!snapshot.exists()) {
            return;
        }
        return snapshot.val()
    }
    static async sendFeedback(name, email, avata,content, rating, position) {
        const createdAt = new Date().toISOString();
        const id_feedback=db.ref(`testimonials`).push().key;
        const feedbackRef=db.ref(`testimonials/${id_feedback}`);
        await feedbackRef.set ({
            name,
            email,
            avata,
            content,
            rating,
            position,
            createdAt,
        })

        return true
    }

}
module.exports = FeedbackModel