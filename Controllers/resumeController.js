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
export const getAllResumesByUser = async (req, res) => {}
export const getUniqueResume = async (req, res) => {}
export const updateResume = async (req, res) => {}