import Resume from "../Models/resumeModel.js";

export const createResume = async (req, res) => {
    const { contact, 
        skills, 
        techSkills, 
        experience, 
        internship, 
        education, 
        interest, 
        projects, 
        volunteerExperience,
        honorsAndAwards,
        training,
        certification,
        license,
        course,
        patent,
        publication,
        workshop,
        reference} = req.body;
        try {
            const resume = await new Resume(req.body);
            await resume.save();
            console.log('resume', resume);
            return res.json({success: true, msg: "Resume Data Updated Successfully", resume});
        } catch (error) {
            console.log(error);
            return res.json({success: false, msg: "something went wrong"})
        }
}

export const getAllResumesByUser = async (req, res) => {
    const userId = req.user.id;
    try {
        const resumes = await Resume.find({userId})
        return res.josn({success: true, msg: "User Resumes Sended Successfully", resumes})
    } catch (error) {
        console.log(error);
        return res.json({success: false, msg: "something went wrong", error})
    }
}

export const getUniqueResume = async (req, res) => {
    const {resumeId} = req.params;
    try {
        const resume = await Resume.findById(resumeId);
        if(!resume) return res.json({success: false, msg: "Resume Not Found"})
        return res.json({success: true, msg: "Resume data sended successfully", resume});
    } catch (error) {
        console.log(error);
        return res.json({success: false, msg: "something went wrong", error})
    }
}

export const updateResume = async (req, res) => {
    const {resumeId} = req.params;
    try {
        const resumeFind = await Resume.findById(id);
        if(!resumeFind) return res.json({success: false, msg: "Resume Not Found"});
        const updateResume = await Resume.findByIdAndUpdate({_id: resumeId}, req.body)
        return res.json({success: true, msg: "Resume Data Updated Successfully", resume: updateResume})
    } catch (error) {
        return res.json({success: false, msg: "something went wrong", error})
    }
}