import mongoose from "mongoose";

const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    contact: {
        firstName: {type: String},
        lastName: {type: String},
        email: {type: String},
        phone: {type: String},
        address: [],
        // address: [{
        //     doorNo: {type: String},
        //     address: {type: String},
        //     city: {type: String},
        //     country: {type: String}
        // }],
        linkedinId: {type: String}
    },
    summary: [],
    skills: [],
    techSkills: [],
    experiences: [{
        designation: {type: String},
        companyName: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        city: {type: String},
        country: {type: String},
        responsibilities: []
    }],
    internships: [{
        designation: {type: String},
        companyName: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        city: {type: String},
        country: {type: String},
        responsibilities: [],
        achievements: []
    }],
    educations: [{
        degreeName: {type: String},
        collegeName: {type: String},	
        city: {type: String},
        country: {type: String},	
        startedAt: {type: String},
        endedAt: {type: String},
        score: {type: String}
    }],
    interest: [],
    projects: [{
        number: {type: String},
        title: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        description: {type: String}
    }],
    volunteerExperiences: [{
        designation: {type: String},	
        companyName: {type: String},	
        startedAt: {type: String},
        endedAt: {type: String},
        city: {type: String},
        country: {type: String},
        responsibilities: [],
        achievements: []
    }],
    honorsAndAwards: [],
    trainings: [{
        title: {type: String},
        instutionName: {type: String},
        city: {type: String},
        country: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        score: {type: String}
    }],
    certifications: [{
        title: {type: String},
        instutionName: {type: String},
        city: {type: String},
        country: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        score: {type: String}
    }],
    license: {
        name: {type: String},
        number: {type: String},
        validity: {type: String}
    },
    courses: [{
        title: {type: String},
        instutionName: {type: String},
        city: {type: String},
        country: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        score: {type: String}
    }],
    patent  : {
        title: {type: String},
        number: {type: String},
        description: {type: String},
        status: {type: String}
    },
    publications: [{
        name: {type: String},
        description: {type: String}
    }],
    workshops: [{
        designation: {type: String},
        companyName: {type: String},
        city: {type: String},
        country: {type: String},
        startedAt: {type: String},
        endedAt: {type: String},
        responsibilities: [],
        achievements: []
    }],
    references: [{
        name: {type: String},
        designation: {type: String},
        company: {type: String},
        email: {type: String}
    }],
    personalDetails: {
        languageKnown: [],
        dateOfBirth: {type: String},
        nationality: {type: String},
        passport: {type: String}
    }
}, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;