const { db } = require('../../Config/firebase');
class DataModel {
    static async Skill() {
        const Skillref= db.ref('categories')
        const snapshot= await Skillref.once("value")
        if(!snapshot.exists()) {
            return;
        }
        return snapshot.val()
    }
    static async Project() {
        const Projectref= db.ref('projects')
        const snapshot= await Projectref.once('value')
        if(!snapshot.exists()) {
            return ;
        }
        return snapshot.val()
    
    }
}
module.exports = DataModel