const Data=require('../Models/DataModel')
class DataController {
    async SkillData(req, res) {
        try{
            const data= await Data.Skill();
            if(!data) {
                return res.status(200).json({success: false ,message: 'chưa có dữ liệu'})
            }
            return res.status(200).json({success: true ,message: data})

        }catch(error) {
            return res.status(500).json({success: false ,message: 'lỗi server! hãy thử lại sau'})
        }
    }
    async ProjectData(req, res) {
       try{
            const data= await Data.Project();
            if(!data) {
                return res.status(200).json({success: false ,message: 'chưa có dữ liệu'})
            }
            return res.status(200).json({success: true ,message: data})

        }catch(error) {
            return res.status(500).json({success: false ,message: 'lỗi server! hãy thử lại sau'})
        }
    }
}
module.exports = new DataController()