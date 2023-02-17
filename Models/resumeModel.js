import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    contact: {
        firsrName: {type: String},
        lastName: {type: String},
        email: {type: String},
        phone: {type: String},
        address: [{
            doorNo: {type: String},
            address: {type: String},
            city: {type: String},
            country: {type: String}
        }],
        linkedinId: {type: String}
    },
    summary: {
        type: String
    },
    skills: [],
    techSkills: [],
    experience: [{
        designation: {type: String},
        companyName: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        city: {type: String},
        country: {type: String},
        responsibilities: []
    }],
    internship: [{
        designation: {type: String},
        companyName: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        city: {type: String},
        country: {type: String},
        responsibilities: [],
        achievements: []
    }],
    education: [{
        degreeName: {type: String},
        collegeORUniversityName: {type: String},	
        city: {type: String},
        country: {type: String},	
        startedAt: {type: String},
        endedAt: {type: String},
        Score: {type: String}
    }],
    interest: [],
    projects: [{
        title: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        description: {type: String}
    }],
    volunteerExperience: {
        designation: {type: String},	
        companyName: {type: String},	
        startedAt: {type: String},
        endedAt: {type: String},
        city: {type: String},
        country: {type: String},
        responsibilities: [],
        achievements: []
    },
    honorsAndAwards: [],
    training: [{
        title: {type: String},
        instutionName: {type: String},
        city: {type: String},
        country: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        score: {type: String}
    }],
    certification: [{
        title: {type: String},
        instutionName: {type: String},
        city: {type: String},
        country: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        score: {type: String}
    }],
    license: [{
        name: {type: String},
        number: {type: String},
        validity: {type: Boolean}
    }],
    course: [{
        title: {type: String},
        instutionName: {type: String},
        city: {type: String},
        country: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        score: {type: String}
    }],
    patent: [{
        title: {type: String},
        number: {type: String},
        description: {type: String},
        status: {type: String}
    }],
    publication: [{
        name: {type: String},
        description: {type: String}
    }],
    workshop: [{
        designation: {type: String},
        companyName: {type: String},
        city: {type: String},
        country: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        responsibilities: [],
        achievements: []
    }],
    reference: {
        name: {type: String},
        designation: {type: String},
        company: {type: String}
    }
}, { timestamps: true });

const Resume = mongoose.model('User', resumeSchema);

export default Resume;